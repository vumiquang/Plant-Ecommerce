import React, { useRef, useState, useEffect } from 'react';
import anh from '../../../assets/images/ngoc-ngan.png';
import Rate from '../../Rate';
import { formatTime } from '../../../util/formatTime';
import {
    addCollection,
    getCollectionBy,
    updateCollection,
    deleteCollection,
} from '../../../firebase/util';
import { reviewCollection, plantCollection } from '../../../firebase/util';
import './style.scss';
import { useSelector } from 'react-redux';
import notifySlice from '../../../store/Notification/notifySlice';
import { useDispatch } from 'react-redux';
import { getAllProduct } from '../../../store/Product/productSlice';
const Comment = ({ tree, comments, setComments }) => {
    const dispatch = useDispatch();
    const [rateStar, setRateStar] = useState(5);
    const [comment, setComment] = useState('');
    const textComment = useRef();
    const user = useSelector((state) => state.user);

    const addNewComment = () => {
        if (!user.isLogin) {
            dispatch(
                notifySlice.actions.addNotify({
                    content: 'Bạn chưa đăng nhập',
                    type: 'warn',
                })
            );
            return;
        }
        const data = {
            comment: comment,
            plantid: tree.id,
            star: rateStar,
            time: formatTime(new Date()),
            username: user.name,
            avatar: user.avatar,
        };
        addCollection(
            reviewCollection,
            data,
            () => {
                dispatch(
                    notifySlice.actions.addNotify({
                        content: 'Đánh giá thành công',
                        type: 'success',
                    })
                );
                setComments([...comments, data]);
            },
            () => {
                dispatch(
                    notifySlice.actions.addNotify({
                        content: 'Có lỗi xảy ra',
                        type: 'warn',
                    })
                );
            }
        );

        setComment('');
        setRateStar(5);
    };

    useEffect(() => {
        (async () => {
            const star = comments.reduce(
                (value, comment, id) => {
                    value.count++;
                    value.total += Number(comment.star);
                    return value;
                },
                { total: 0, count: 0 }
            );
            const avgStar = Math.round(star.total / star.count);
            if (tree.star !== avgStar && !Number.isNaN(avgStar)) {
                await updateCollection('plant', tree.id, {
                    star: avgStar,
                });
                dispatch(getAllProduct());
            }
        })();
    }, [comments]);

    return (
        <div className="product-comment">
            <div className="wrap">
                <p className="title">Đánh giá</p>
                {comments.map((cmt, id) => {
                    return (
                        <div className="comment" key={id}>
                            <div className="avatar">
                                <img src={cmt.avatar} />
                            </div>
                            <div className="detail">
                                <div>
                                    <div className="top">
                                        <div>
                                            <span>{cmt.username}</span>
                                            <span>
                                                {new Date(
                                                    Date.parse(cmt.time)
                                                ).toLocaleString()}
                                            </span>
                                        </div>
                                        <Rate
                                            rating={Number(cmt.star)}
                                            size={10}
                                        />
                                    </div>
                                    <div className="bottom">{cmt.comment}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <p className="title">Viết đánh giá</p>
                <textarea
                    className="write"
                    placeholder="Bình luận"
                    value={comment}
                    ref={textComment}
                    onChange={() => {
                        setComment(textComment.current.value);
                    }}
                />
                <div className="tick-rate">
                    <Rate
                        rating={rateStar}
                        size={20}
                        onRating={setRateStar}
                        isHover={true}
                    />
                </div>
                <div>
                    <button
                        className="btn btn-small"
                        onClick={() => {
                            addNewComment();
                        }}
                    >
                        Gửi
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Comment;
