import React, {useState} from "react";
import DesktopComp from "./ChildComp/DesktopComp";
import MobileComp from "./ChildComp/MobileComp";
import {AiOutlineCheck} from 'react-icons/ai'
import Additional from "./ChildComp/Additional";
import cn from 'classnames'
import ModalSelect from "../ModalSelect/ModalSelect";
import modalSelect from "../ModalSelect/ModalSelect";

const packages = [
    {
        id: '001',
        item: 0,
        name: 'Эконом',
        price: 13450,
        sale_price: 3450,
        bold: false,
        products: [
            {
                product: 'Гроб стандартный обитый шелковой тканью',
                id: 'Гроб стандартный обитый шелковой тканью1',
            },
            {
                product: 'Покрывало ритуальное',
                id: 'Покрывало ритуальное1'
            },
            {
                product: 'Тапочки ритуальные,',
                id: 'Тапочки ритуальные1,'
            },
            {
                product: 'Крест на крышку гроба',
                id: 'Крест на крышку гроба1'
            },
            {
                product: 'Постель в гроб',
                id: 'Постель в гроб1'
            }
        ],
        services: [
            {
                product: 'Оформление заказа на приобретение и доставку предметов похоронного ритуала',
                id: 'Оформление заказа на приобретение и доставку предметов похоронного ритуала1',
            },
            {
                product: 'Комплексная услуга по доставке похоронных принадлежностей к месту нахождения умершего с выполнением погрузочно-разгрузочных работ',
                id: 'Комплексная услуга по доставке похоронных принадлежностей к месту нахождения умершего с выполнением погрузочно-разгрузочных работ1',
            },
            {
                product: 'Заказ катафального транспорта',
                id: 'Заказ катафального транспорта1',
            },
            {
                product: 'Катафальный транспорт (перевозка гроба с телом умершего из дома или морга к месту кремации , обратная доставка сопровождающих лиц',
                id: 'Катафальный транспорт по маршруту морг - крематорий1',
            },
            {
                product: 'Выезд ритуального агента',
                id: 'Выезд ритуального агента1',
            },
        ]
    },
    {
        id: '002',
        item: 1,
        name: 'Стандарт',
        price: 25436,
        sale_price: 15436,
        bold: true,
        products: [
            {
                product: 'Гроб стандартный обитый атласной тканью',
                id: 'Гроб стандартный обитый шелковой тканью1',
            },
            {
                product: 'Покрывало ритуальное',
                id: 'Покрывало ритуальное1'
            },
            {
                product: 'Тапочки ритуальные,',
                id: 'Тапочки ритуальные1,'
            },
            {
                product: 'Крест на крышку гроба',
                id: 'Крест на крышку гроба1'
            },
            {
                product: 'Постель в гроб',
                id: 'Постель в гроб1'
            }
        ],
        services: [
            {
                product: 'Оформление заказа на приобретение и доставку предметов похоронного ритуала',
                id: 'Оформление заказа на приобретение и доставку предметов похоронного ритуала2',
            },
            {
                product: 'Комплексная услуга по доставке похоронных принадлежностей к месту нахождения умершего с выполнением погрузочно-разгрузочных работ',
                id: 'Комплексная услуга по доставке похоронных принадлежностей к месту нахождения умершего с выполнением погрузочно-разгрузочных работ2',
            },
            {
                product: 'Заказ катафального транспорта',
                id: 'Заказ катафального транспорта12',
            },
            {
                product: 'Катафальный транспорт (перевозка гроба с телом умершего из дома или морга к месту кремации , обратная доставка сопровождающих лиц',
                id: 'Катафальный транспорт по маршруту морг - крематорий2',
            },
            {
                product: 'Выезд ритуального агента',
                id: 'Выезд ритуального агента2',
            },
        ]
    },
    {
        id: '003',
        item: 2,
        name: 'Премиум',
        price: 52324,
        sale_price: 42324,
        bold: false,
        products: [
            {
                product: 'Гроб лакированный 4-гранный',
                id: 'Гроб лакированный 4-гранный3'
            },
            {
                product: 'Подушка атласная',
                id: 'Подушка атласная3',
            },
            {
                product: 'Покрывало атласное ритуальное',
                id: 'Покрывало атласное ритуальное3',
            },
            {
                product: 'Композиция на крышку гроба на заказ',
                id: 'Композиция на крышку гроба на заказ3',
            },
            {
                product: 'Тапочки ритуальные',
                id: 'Тапочки ритуальные3',
            },
            {
                product: 'Постель атлас мягкая',
                id: 'Постель атлас мягкая3',
            },
            {
                product: 'Траурная лента 1 шт',
                id: 'Траурная лента 1 шт3',
            },
        ],
        services: [
            {
                product: 'Оформление заказа на приобретение и доставку предметов похоронного ритуала,',
                id: 'Оформление заказа на приобретение и доставку предметов похоронного ритуал4,'
            },
            {
                product: 'Комплексная услуга по доставке похоронных принадлежностей к месту нахождения умершего с выполнением погрузочно-разгрузочных работ',
                id: 'Комплексная услуга по доставке похоронных принадлежностей к месту нахождения умершего с выполнением погрузочно-разгрузочных работ4'
            },
            {
                product: 'Заказ катафального транспорта',
                id: 'Заказ катафального транспорта4'
            },
            {
                product: 'Катафальный транспорт (перевозка гроба с телом умершего из дома или морга к месту кремации , обратная доставка сопровождающих лиц',
                id: 'Катафальный транспорт (перевозка гроба с телом умершего из дома или морга к месту кремации , обратная доставка сопровождающих лиц4'
            },
            {
                product: 'Выезд ритуального агента (предварительная оценка расходов на погребение , консультация)',
                id: 'Выезд ритуального агента (предварительная оценка расходов на погребение , консультация)'
            }
        ]
    }
]


const Packages = () => {

    const [priceNow, setPriceNow] = useState([2000, 15000, 40000]);
    const [comp, setComp] = React.useState(true);
    const [flag, setFlag] = React.useState(false);

    const [modal, setModal] = useState(false)

    React.useEffect(() => {
        const handleclick = () => {
            document.body.style.overflow = modal ? 'hidden' : 'auto';
        };

        document.addEventListener('click', handleclick);

        return () => {
            document.removeEventListener('click', handleclick);
        }
    }, [modal])

    const visibleModal = () => {
        setModal(true)
        console.log('visible', modal)
    }

    const hiddenModal = () => {
        setModal(false)
        console.log('hidden', modal)
    }

    function compensation() {
        setComp(!comp)
        const newArray = [];
        if (comp === true) {
            for (let i = 0; i < priceNow.length; i++) {
                newArray[i] = priceNow[i] + 10000;
            }
            setPriceNow(newArray)
        } else {
            for (let i = 0; i < priceNow.length; i++) {
                newArray[i] = priceNow[i] - 10000;
            }
            setPriceNow(newArray)
        }
    }
    function funeral() {
        if (flag === true) {
            const newArray = []
            newArray[0] = priceNow[0] - 3000;
            newArray[1] = priceNow[1] - 5000;
            newArray[2] = priceNow[2] - 8000;
            setPriceNow(newArray)
            setFlag(false)
        }
    }
    function cremation() {
        if (flag === false) {
            const newArray = []
            newArray[0] = priceNow[0] + 3000;
            newArray[1] = priceNow[1] + 5000;
            newArray[2] = priceNow[2] + 8000;
            setPriceNow(newArray)
            setFlag(true)
        }
    }

    return (
        <div className="secondary pt-10">
            <div className='px-4 md:px-10'>
                <p className='text-white md:text-lg font-semibold leading-5 md:text-center'>Стоимость услуг и
                    ритуальных товаров зафиксирована в договоре
                    и остаётся неизменной</p>
                <div className='md:flex md:row justify-center'>
                    <h1 className='font-bold text-3xl text-white md:text-center leading-7 pt-2'>Комплексные программы
                        организации</h1>
                    <div className='flex row ml-4'>
                        <h1 className={flag ? 'font-bold text-4xl mr-4 opacity-50 text-white underline cursor-pointer' : 'font-bold text-4xl mr-4 text-white cursor-pointer'}
                            onClick={funeral}>похорон</h1>
                        <h1 className={flag ? 'font-bold text-4xl text-white cursor-pointer' : 'font-bold text-4xl opacity-50 text-white underline cursor-pointer'}
                            onClick={cremation}>кремации</h1>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='flex pt-2 w-full max-w-screen-xl md:px-10 px-4'>
                        <div className='border-4 border-red-700 h-12'>
                            <div className='w-10 h-10 flex items-center justify-center bg-white'
                                 onClick={compensation}>
                                <AiOutlineCheck size={40} className={comp ? 'block' : 'hidden'}/>
                            </div>
                        </div>
                        <p className='ml-2 text-white max-w-3xl'>Показывать цены с учётом пособия на погребение, предусмотренное
                            законодательством России, для граждан Крымского полуострова</p>
                    </div>
                </div>
                {/*мобильные компоненты*/}
                <div className='pt-5 pb-5 md:hidden block'>
                    {packages.map(item => (
                        <MobileComp
                            key={item.id + 'mob'}
                            item={item}
                            priceNow={priceNow}
                            visibleModal={visibleModal}
                        />
                    ))}
                </div>
            </div>

            {/*Дестопные компоненты*/}
            <div className='flex justify-center'>
                <div className='w-full max-w-screen-xl hidden md:block secondary px-4 md:px-10'>
                    <div className={cn('flex md:flex-row pt-10 pb-10')}>
                        {
                            packages.map(item => (
                                <DesktopComp
                                    key={item.id}
                                    item={item}
                                    priceNow={priceNow}
                                    visibleModal={visibleModal}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            {/*дополнительная верстка*/}

            <Additional/>

            {
                modal &&
                <ModalSelect hiddenModal={hiddenModal}/>
            }
        </div>
    )
}

export default Packages