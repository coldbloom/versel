import React from 'react'
import Header from "../../components/Header/Header";
import Ringing from "../../components/Ringing/Ringing";

import Footer from "../../components/Footer/Footer";
import {TiArrowBack} from "react-icons/ti";
import Link from "next/link";
import Navigation from "../../components/Navigation/Navigation";
import RitualSlier from "../../components/Slider/RitualSlier";

const Poxoroni = () => {
    return(
        <div>
            <Header />
            <Navigation />
            <div className='pb-10'>
                <h1 className='text-2xl font-bold pt-2 flex justify-center'>Организация похорон</h1>
            </div>
            <Ringing />
            <RitualSlier />
            <Footer />
        </div>
    )
}

export default Poxoroni