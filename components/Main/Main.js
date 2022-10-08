import React from 'react'
import Rules from '../Rules/Rules'
import Map from '../Map/Map'
import FirstPage from "../Firstpage/Firstpage";
import Parent from "../testService/Parent";
import PackagesTwo from "../Packages2/PackagesTwo";
import RitualSlider from "../Slider/RitualSlider";
import AskAndAnswer from "../AskAndAnswer/AskAndAnswer";
import CompensationTwo from "../Compensation2/CompensationTwo";
import Ringing from "../Ringing/Ringing";
import ProductsTwo from "../Products2/ProductsTwo";


const Main = () => {

    return (
        <div>

            <FirstPage />

            <Rules />

            <Parent />

            <CompensationTwo />

            <PackagesTwo />

            <ProductsTwo />

            <RitualSlider />

            <Ringing />

            <Map />

            <AskAndAnswer />

        </div>
    )
}

export default Main