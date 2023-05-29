import React from 'react'
import {FaOdnoklassniki, FaTelegramPlane, FaViber} from "react-icons/fa";
import {ImPhone, ImVk} from "react-icons/im";
import {IoIosMail, IoLogoWhatsapp} from "react-icons/io";
import ChildComponent from "./ChildComponent";
import cn from 'classnames'
import styles from "../Header/Header.module.css";
import {AiFillEnvironment} from "react-icons/ai";

const data_contacts = [
    {
        id: '_num00123oi',
        name: 'Компания'
    },
    {
        id: '_num43rnm63oi',
        name: 'О компании'
    },
    {
        id: '_num67imz24oi',
        name: 'История'
    },
    {
        id: '_num78jx34i',
        name: 'Лицензии'
    },
    {
        id: '_num5ut7jnx5i',
        name: 'Партнёры'
    },
    {
        id: '_num067gh34oi',
        name: 'Отзывы'
    },
    {
        id: '_num001ki86i',
        name: 'Вакансии'
    },
    {
        id: '_num0098jk3oi',
        name: 'Реквизиты'
    },
]
const data_catalog = [
    {
        id: 'id02e001',
        name: 'Каталог',
    },
    {
        id: 'id02e002',
        name: 'Памятники',
    },
    {
        id: 'id02e003',
        name: 'Оградки, столы, лавки',
    },
    {
        id: 'id02e004',
        name: 'Кресты',
    },
    {
        id: 'id02e005',
        name: 'Гробы',
    },
    {
        id: 'id02e006',
        name: 'Венки',
    },
    {
        id: 'id02e007',
        name: 'Ритуальная одежда',
    },
    {
        id: 'id02e008',
        name: 'Ритуально-похоронные-принадлежности',
    },
]
const data_services_des = [
    {
        id: '_id01rte',
        name: 'Услуги',
    },
    {
        id: '_id02wer',
        name: 'Организация похорон',
    },
    {
        id: '_id03rc20',
        name: 'Сопутствующие услуги',
    },
    {
        id: '_id04cla2a',
        name: 'VIP-похороны',
    },
]

const data_services = [
    {
        name: 'Вызов ритуального агента',
        id: 'data_serv_01fg',
    },
    {
        name: 'Ритуальный транспорт',
        id: 'data_serv_02cjj',
    },
    {
        name: 'Организация похорон',
        id: 'data_serv_03cjj',
    },
    {
        name: 'Организация кремации',
        id: 'data_serv_04cjj',
    },
    {
        name: 'Груз 200',
        id: 'data_serv_05j',
    },
    {
        name: 'Поминальная трапеза',
        id: 'data_serv_06n',
    },
    {
        name: 'Место на кладбище',
        id: 'data_serv_07s',
    }
]

const data_products = [
    {
        name: 'Гробы',
        id: 'prod_01vty'
    },
    {
        name: 'Гробы',
        id: 'prod_02vty'
    },
    {
        name: 'Гробы',
        id: 'prod_03vty'
    },
    {
        name: 'Гробы',
        id: 'prod_04vty'
    },
    {
        name: 'Гробы',
        id: 'prod_05vty'
    },
]

const data_information = [
    {
        name: 'Льготы и скидки',
        id: 'data_inf_01inf01'
    },
    {
        name: 'Свидетельство о смерти',
        id: 'data_inf_02inf02'
    },
    {
        name: 'Морг',
        id: 'data_inf_03inf03'
    },
    {
        name: 'Место на кладбище',
        id: 'data_inf_04inf04'
    },
    {
        name: 'МФЦ',
        id: 'data_inf_05inf05'
    },
    {
        name: 'Крематорий',
        id: 'data_inf_06inf06'
    },
]

const Footer = () => {
    return (
        <footer>
            <div className='h-4 bg-gradient-to-b from-white to-blue-900'></div>
            <div className='secondary flex justify-center'>
                <div className='max-w-screen-xl w-full pb-4 pt-2 px-4 md:px-10 flex justify-around'>
                    <div>
                        <FaTelegramPlane size={24} color='rgb(148 163 184)'/>
                    </div>
                    <div>
                        <ImVk size={24} color='rgb(148 163 184)'/>
                    </div>
                    <div>
                        <FaOdnoklassniki size={24} color='rgb(148 163 184)'/>
                    </div>
                    <div>
                        <IoLogoWhatsapp size={24} color='rgb(148 163 184)'/>
                    </div>
                    <div>
                        <FaViber size={24} color='rgb(148 163 184)'/>
                    </div>
                </div>
            </div>
            {/*мобильный контент*/}
            <div className={cn('max-w-screen-xl md:px-10 md:hidden secondary text-white')}>
                <div className='border-t'></div>
                <ChildComponent name='Ритуальные услуги' data={data_services}/>
                <ChildComponent name='Ритуальные товары' data={data_products}/>
                <ChildComponent name='Полезная информация' data={data_information}/>

                <h2 className='flex justify-center text-2xl font-bold mt-5 md:mt-0 md:text-xl'>РИТУАЛ
                    ЕВПАТОРИЯ
                </h2>
                <div className='flex flex-row justify-center'>
                    <div className='flex items-center pb-1 md:pb-0 pr-1.5'>
                        <div
                            className={cn(styles.blink, styles.bg__color, 'flex justify-center p-1 rounded-2xl')}>
                        </div>
                    </div>
                    <span
                        className={cn('block flex justify-center pt-1 text-xl md:items-center md:mr-1 md:py-0 md:my-0 mb-1 md:text-lg', styles.text__color)}>
                                Круглосуточная справочная
                            </span>
                </div>
                <strong
                    className={cn('flex justify-center pb-1 text-xl md:items-center md:py-0 md:text-lg text-green-300', styles.text__color)}>
                    8-978-938-02-21
                </strong>
            </div>
            {/*дестопный контент*/}
            <div className='secondary flex justify-center'>
                <div className='max-w-screen-xl w-full md:px-10 md:flex flex-col justify-between md:flex-col lg:flex-row pt-10 hidden '>
                    <div className='flex flex-col md:flex-row lg:justify-around md:justify-start'>
                        <div className='flex flex-col w-full md:w-36 md:pr-10 '>
                            {data_contacts.map((item) => <div className='flex justify-center md:justify-start first:text-white first:font-bold text-gray-400 pt-1 text-left text-sm mb-2 first:mb-3 md:first:mb-5 first:text-base' key={item.id}><p className='leading-4'>{item.name}</p></div>)}
                        </div>
                        <div className='flex flex-col w-full md:w-36 md:pr-10 pt-10 md:pt-0'>
                            {data_catalog.map((item) => <div className='flex justify-center md:justify-start first:text-white first:font-bold text-gray-400 pt-1 text-left text-sm mb-2 first:mb-3 md:first:mb-5 first:text-base' key={item.id}><p className='leading-4'>{item.name}</p></div>)}
                        </div>
                        <div className='flex flex-col w-full md:w-36 pt-10 md:pt-0'>
                            {data_services_des.map((item) => <div className='flex justify-center md:justify-start first:text-white first:font-bold text-gray-400 pt-1 text-left text-sm mb-2 first:mb-3 md:first:mb-5 first:text-base' key={item.id}><p className='leading-4'>{item.name}</p></div>)}
                        </div>
                    </div>

                    <div className=''>
                        <h3 className='text-white text-base font-bold mb-5 flex justify-center md:justify-start'>Наши контакты</h3>
                        <div className='flex flex-row justify-center md:justify-start items-center'>
                            <div>
                                <ImPhone size={18} color='rgb(148 163 184)'/>
                            </div>
                            <strong className='items-center flex pl-3 text-white justify-center md:justify-start'>+7 (978) 938-02-21</strong>
                        </div>
                        <p className='md:ml-7 text-sm leading-0 text-gray-400 flex justify-center md:justify-start'>Ежедневно / Круглосуточно</p>
                        <div className='flex flex-row justify-center md:justify-start items-center pt-7'>
                            <div>
                                <AiFillEnvironment size={22} color='rgb(148 163 184)'/>
                            </div>
                            <p className='md:pl-3 text-white w-64 md:text-left text-center'>Республика Крым, г. Евпатория, проспект Победы, 42, Ярмарка, торговое место №62</p>
                        </div>
                        <div className='flex flex-row justify-center md:justify-start items-center pt-7'>
                            <div>
                                <IoIosMail size={22} color='rgb(148 163 184)'/>
                            </div>
                            <a href="" className='items-center flex pl-3 text-white'>ritevp@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center secondary'>
                <div className='divide-gray-600 divide-y pt-2 w-full max-w-screen-xl'>
                    <p className='text-xs text-gray-800 pt-2 pb-4 text-justify px-4'>© 2022 «ГОРОДСКАЯ СЛУЖБА
                        РИУТАУЛЬНЫХ УСЛУГ» - Все права защищены. Вся представленная на сайте информация носит
                        исключительно информационный характер
                        и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437(2)
                        Гражданского кодекса РФ.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer