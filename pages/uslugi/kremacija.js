import React from 'react'
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Ringing from "../../components/Ringing/Ringing";
import RitualSlider from "../../components/Slider/RitualSlider";
import Footer from "../../components/Footer/Footer";

const Kremacija = () => {
    return(
        <div>
            <Header />
            <Navigation />

            <div>
                <h1 className='text-2xl font-bold pt-2 text-center'>Кремация в Крыму</h1>
            </div>

            <Ringing />
            <RitualSlider />
            <Footer />
        </div>
    )
}

export default Kremacija