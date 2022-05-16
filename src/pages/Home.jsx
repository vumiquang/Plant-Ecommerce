import React, { useState, useEffect } from 'react';
import SliderHome from '../components/SliderHome';
import Section from '../components/Section';
import MenuTree from '../components/MenuTree';
import HotTree from '../components/HotTree';
import HotNews from '../components/HotNews';

const Home = () => {
   

    return (
        <>
            <SliderHome></SliderHome>
            <Section title="DANH MỤC CÂY">
                <MenuTree></MenuTree>
            </Section>
            <Section title="CÂY BÁN CHẠY">
                <HotTree></HotTree>
            </Section>
            <Section title="BÀI VIẾT NỔI BẬT">
                <HotNews></HotNews>
            </Section>
        </>
    );
};

export default Home;
