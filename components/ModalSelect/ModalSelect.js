import React from 'react';
import style from './ModalSelect.module.css'
import {RxCrossCircled} from 'react-icons/rx';

const ModalSelect = ({hiddenModal}) => {
    return (
        <div className={style.modalSelect} onClick={() => hiddenModal()}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <RxCrossCircled className={style.closed} onClick={() => hiddenModal()}/>
                <h4>Заказать тариф</h4>
                <p>Позвоните нам по номеру</p>
                <strong>+7-978-938-02-21</strong>
                <p>наш ритуальный агент Виталий ответит на все Ваши вопросы, подготовят необходимое оборудование и подготовят коммерческое предложение.</p>
            </div>
        </div>
    );
};

export default ModalSelect;