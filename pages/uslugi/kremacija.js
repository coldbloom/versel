import React from 'react'
import Header from "../../Components/Header/Header";
import Navigation from "../../Components/Navigation/Navigation";
import Ringing from "../../Components/Ringing/Ringing";
import RitualSlider from "../../Components/Slider/RitualSlider";
import FooterTwo from "../../Components/Footer2/FooterTwo";

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
            <FooterTwo />
        </div>
    )
}

export default Kremacija