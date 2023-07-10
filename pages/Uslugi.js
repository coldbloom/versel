import React from "react";
import {TiArrowBack} from "react-icons/ti";
import Link from "next/link";
import Header from "../components/Header/Header";
import Ringing from "../components/Ringing/Ringing";
import RitualSlider from "../components/Slider/RitualSlier";
import Footer from "../components/Footer/Footer";

const Uslugi = () => {
    return(
        <div>
            <Header />
            <div className='px-4 md:px-10'>
                <div className='flex flex-row items-center'>
                    <TiArrowBack />
                    <Link href="/">
                        <a className='p-2 font-semibold text-blue-900'>На Главную</a>
                    </Link>
                </div>
                <h1 className='text-2xl font-bold pt-2 text-center'>Ритуальные услуги</h1>
                <p className='pt-4'>Ритуальные услуги, предоставляемые городской специализированной службой Ритуал Евпатория, оказываются на основании утвержденных правительством Крыма стандартов и по доступным для всех категорий населения расценкам. Информирование граждан о положенных льготах на городские ритуальные услуги является одной из основных социальных функций, возложенных на нашу организацию.</p>
                <h3 className='text-xl font-medium pt-10'>Полный список услуг</h3>
                <div className='flex flex-col text-blue-900 font-bold text-xl'>
                    <li className='mt-4 ml-2'><Link href='/'>Бальзамирование</Link></li>
                    <li className='mt-4 ml-2'><Link href='/'>Отпевание</Link></li>
                    <li className='mt-4 ml-2'><Link href='/'>Оформление документов</Link></li>
                    <li className='mt-4 ml-2'><Link href='/'>Организация похорон</Link></li>
                    <li className='mt-4 ml-2'><Link href='/'>Кремация</Link></li>
                    <li className='mt-4 ml-2'><Link href='/'>Катафальный транспорт</Link></li>
                    <li className='mt-4 ml-2'><Link href='/'>Носильщики</Link></li>
                    <li className='mt-4 ml-2'><Link href='/'>Груз 200</Link></li>
                    <li className='mt-4 ml-2'><Link href='/'>Ритуальный агент</Link></li>
                    <li className='mt-4 ml-2'><Link href='/'>Социальные похороны</Link></li>
                </div>
                <h3 className='text-2xl font-bold pt-10 text-center'>Почему обращаются именно к нам?</h3>
                <p className='pt-4 pb-10'>Огромный опыт позволяет нам быстро и качественно выполнять заказы любого уровня сложности – от социальных (безвозмездных) похорон до траурных церемоний уровня VIP. Мы досконально знаем все нюансы похоронного дела и выстраиваем отношения с нашими заказчиками максимально прозрачными. Наши специалисты организовали и провели более тысячи церемоний прощания.</p>
            </div>
            <Ringing />
            <RitualSlider />
            <Footer />
        </div>
    )
}

export default Uslugi