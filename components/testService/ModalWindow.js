import React from 'react'
import {RiMenu2Fill} from 'react-icons/ri'
import s from './ModalWindow.module.css'

const Modal = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    return (
        <div className='pt-10 pb-10 bg-amber-100'>
            <div onClick={() => setShowMenu(!showMenu)}>
                <RiMenu2Fill/>
            </div>

            { showMenu  &&
                <div className={s.alert}>
                    <h1>Показывать меню</h1>
                </div>
            }
        </div>
    )

}

export default Modal