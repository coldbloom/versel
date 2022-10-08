import React, {useState} from 'react'
import Header from "../../components/Header/Header";
import Ringing from "../../components/Ringing/Ringing";
import RitualSlider from "../../components/Slider/RitualSlider";
import FooterTwo from "../../components/Footer2/FooterTwo";
import Navigation from "../../components/Navigation/Navigation";

import { FaPlaneDeparture, FaCar, FaTrain } from "react-icons/fa";

const Gruz = () => {
    const [clickButton, setClickButton] = useState(true);
    const clickUp = () => {
        clickButton ? setClickButton(!clickButton) : null
    }

    const clickDown = () => {
        clickButton ? null : setClickButton(!clickButton)
    }


    return(
        <div>
            <Header />
            <Navigation />
            <div className='pb-10 px-4 md:px-10'>
                <h1 className='text-2xl font-bold pt-2 text-center'>Перевозка груза 200 по России, странам СНГ и всему миру:</h1>
                <div className='flex flex-col items-center text-center text-xl font-bold text-blue-900'>
                    <div className='flex items-center justify-start'>
                        <FaCar className='mr-4'/>
                        <h3>Автомобилем</h3>
                    </div>
                    <div className='flex items-center justify-start'>
                        <FaPlaneDeparture className='mr-4'/>
                        <h3>Самолётом</h3>
                    </div>
                    <div className='flex items-center justify-start'>
                        <FaTrain className='mr-4'/>
                        <h3>Поездом</h3>
                    </div>
                </div>
                <p>Получите точный расчёт стоимости перевозки по необходимому
                    вам маршруту в течение 5 минут</p>
                <p>Позвоните по телефону горячей линии +7 (495) 152 03-27 или оставьте заявку на расчёт</p>
                <div className='pt-10 pb-10'>
                </div>
                <div className='rounded-2xl border-blue-700 border-4 flex flex-col text-white'>
                    <button
                        onClick={clickDown}
                        className={clickButton
                            ? 'border-blue-700 border-b-2 bg-blue-700 py-2 transition-colors'
                            : 'border-blue-700 border-b-2 py-2 text-black transition-colors'}>
                        Отправка груза 200
                    </button>
                    <button
                        onClick={clickUp}
                        className={clickButton
                            ? 'border-blue-700 border-t-2 py-2 text-black transition-colors'
                            : 'border-blue-700 border-t-2 bg-blue-700 py-2 transition-colors'}>
                        Встреча груза 200
                    </button>
                </div>
                {
                    clickButton
                        ? <div>отправка</div>
                        : <div>встреча</div>
                }
            </div>
            <Ringing />
            <RitualSlider />
            <FooterTwo />
        </div>
    )
}

export default Gruz