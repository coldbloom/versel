import React from 'react';
import style from './ModalSelect.module.css'
import {RxCrossCircled} from 'react-icons/rx';

const ModalSelect = ({hiddenModal}) => {
    return (
        <div className={style.modalSelect} onClick={() => hiddenModal()}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <RxCrossCircled className={style.closed} onClick={() => hiddenModal()}/>
                <h4 className='text-xl font-bold text-blue-900 mb-2'>Заказать тариф</h4>
                <p>Позвоните нам по номеру</p>
                <strong className='text-2xl underline mb-1'><a href="tel:+79789380221">+7-978-938-02-21</a></strong>
                <p className='text-center'>наш ритуальный агент <strong className='text-blue-900'>Виталий</strong> ответит на все Ваши вопросы, подготовит необходимое оборудование и подготовит коммерческое предложение.</p>
            </div>
        </div>
    );
};

export default ModalSelect;