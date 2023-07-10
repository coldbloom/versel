import React, {useEffect} from 'react'
import Rules from '../Rules/Rules'
import Map from '../Map/Map'
import FirstPage from "../Firstpage/Firstpage";
import Parent from "../testService/Parent";
import Packages from "../Packages2/Packages";
import AskAndAnswer from "../AskAndAnswer/AskAndAnswer";
import Compensation from "../Compensation/Compensation";
import Ringing from "../Ringing/Ringing";
import Products from "../Products/Products";
import RitualSlier from "../Slider/RitualSlier";


const Main = () => {

    return (
        <div>

            <FirstPage />

            <Rules />

            <Parent />

            <Compensation />

            <Packages />

            <Products />

            <RitualSlier />

            <Ringing />

            <Map />

            <AskAndAnswer />

        </div>
    )
}

export default Main