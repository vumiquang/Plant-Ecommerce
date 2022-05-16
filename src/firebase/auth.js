import { auth } from './firebase-config';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    getRedirectResult,
} from 'firebase/auth';

import userSlice from '../store/User/userSlice';
import notifySlice from '../store/Notification/notifySlice';
const provider = new GoogleAuthProvider();
export const register = async (dispatch, navigate) => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            const u = {
                isLogin: true,
                name: user.displayName,
                id: user.uid,
                avatar: user.photoURL,
            };
            dispatch(userSlice.actions.login(u));
            localStorage.setItem('user', JSON.stringify(u));
            dispatch(
                notifySlice.actions.addNotify({
                    content: 'Đăng nhập thành công',
                    type: 'success',
                })
            );
        })
        .catch((error) => {
            dispatch(
                notifySlice.actions.addNotify({
                    content: 'Có lỗi xảy ra',
                    type: 'warn',
                })
            );
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
};

export const signout = async (dispatch, navigate) => {
    signOut(auth)
        .then(() => {
            dispatch(userSlice.actions.logout());
            localStorage.removeItem('user');
            navigate('/login');
        })
        .catch((error) => {
            // An error happened.
        });
};
