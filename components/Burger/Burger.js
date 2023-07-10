import React, {useState} from 'react';

const Burger = ({changeHeight, menu}) => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [isMenuClicked, setMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            changeHeight(`${menu.current.scrollHeight}px`)
        } else {
            setBurgerClass("burger-bar unclicked")
            changeHeight('0px')
        }
        setMenuClicked(!isMenuClicked)
    }

    return (
        <div className='block md:hidden flex flex-row p-2'>
            <div className='flex items-center box-border'>
                <div className='burger-menu' onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </div>
        </div>
    );
};

export default Burger;