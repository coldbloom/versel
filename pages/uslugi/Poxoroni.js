import React from 'react'
import Header from "../../Components/Header/Header";
import Ringing from "../../Components/Ringing/Ringing";
import RitualSlider from "../../Components/Slider/RitualSlider";
import FooterTwo from "../../Components/Footer2/FooterTwo";
import {TiArrowBack} from "react-icons/ti";
import Link from "next/link";
import Navigation from "../../Components/Navigation/Navigation";

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