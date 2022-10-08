import React from 'react'
import Header from "../../components/Header/Header";
import Ringing from "../../components/Ringing/Ringing";
import RitualSlider from "../../components/Slider/RitualSlider";
import FooterTwo from "../../components/Footer2/FooterTwo";
import {TiArrowBack} from "react-icons/ti";
import Link from "next/link";
import Navigation from "../../components/Navigation/Navigation";

const Poxoroni = () => {
    return(
        <div>
            <Header />
            <Navigation />
            <div className='pb-10'>
                <h1 className='text-2xl font-bold pt-2 flex justify-center'>Организация похорон</h1>
            </div>
            <Ringing />
            <RitualSlider />
            <FooterTwo />
        </div>
    )
}

export default Poxoroni