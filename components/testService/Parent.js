import React, {useState} from "react";
import Item from "./Item";
import MobileItem from './MobileItem';
import ModalWindow from "./ModalWindow";

const data = [
    {
        id: '0001vrz',
        _id: '0001vrz2',
        name: 'Похороны',
        url: '/uslugi/Poxoroni',
        content: 'Организация похопрон родственника - эмоционально тяжёлое занятие. Именно поэтому многие поручаюи это дело профессионалам, которые много раз сталкиваоись с чужим горем, и способны сохранять самообладание даже в свмых страшных случаях. Когда обсуждается с родственниками и агентом организация похорон, цена имеет не последнее значение в принятии решения о сотрудничестве. Случается так, что агенство, которое первое пришло вам на ум , ранее крупно вложилось в рекламу, из-за чего пришлось повысить цены; либо они решили специализироваться только на элитных похоронах. С ГУП Ритуал вы можете быть уверены, что найдёте вариант организации похорон по карману. Мы поможем вам получить необходимое пособие от государства на сумму 16 000 рублей. При таком раскладе похороны обойдцтся вам почти даром, и вы сможете заказать позже памятник на могилу лучшего качества, не экономя на памяти умершего. Позвоните нам по номеру 8-800-100-06-81 в любое время дня и ночи. Если вы не в силах  тратить время на обдумывание каждой детали и не готовы сделать выбор, наш агент приедет к вам, покажет вам каталог, и объяснит все особенности того или иного ритуального продукта.'
    },
    {
        id: '0002vrz',
        _id: '0002vrz2',
        name: 'Кремация',
        url: '/uslugi/kremacija',
        content: 'Чем поможет агент ГУП Ритуал при кремации?' +
        '1) Проверит, есть ли все документы и правильность из заполнения;' +
        "2) Поможет с выбором необходимых ритуальных принадлежносткй;" +
        "3) Возьмет на себя техническую организацию процесса - вовремя подаст катафалк к дверям зала, организует установку гроба на постамент, пригласит участников траурной процессии в зал;" +
        "4) Организует трансфер прощающихся и усопшего к месту прощания и на поминальную трапезу." +
        "Позвоните нам по номеру 8-800-100-06-81 в любое время дня и ночи. Если вы не в силах  тратить время на обдумывание каждой детали и не готовы сделать выбор, наш агент приедет к вам, покажет вам каталог, и объяснит все особенности того или иного ритуального продукта."
    },
    {
        id: '0003vrz',
        _id: '0003vrz45',
        name: 'Перевозки',
        url: '/uslugi/Poxoroni',
        content: 'Ритуальный транспорт - одна из самы важных составляющих организации похорон. Он необходим как для перевозки тел умерших, так и для доставки прощающихся на кладбище, и в кафе для поминальной трапезы' +
            'Типы ритуального транспорта и его назначение' +
            'Тот катафалк, который осуществляет перевозки на место смерти - присылается от морга бесплатно.' +
            'А перевозки тела из морга в рамках похорон производится за счёт аренды ритуального транспорта у похоронного бюро.' +
            '1) То есть первый тип ритуального транспорта, который оплачивается - это катафалк для тела. В таком виде ритуального транспорта обычно размещается 2-3 сидения для сопровождающих родственников и похоронного агента.' +
            '2_ Второй тип машин для похорон - это автобус для перевозки прощающихся близких. Если у покойного много родственников и знакомых, которые хотят присутствовать на его погребении, то такой транспорт просто необходим. Особенно, если прощающиеся приехали из другого города и не имеют личного автомобиля.' +
            '2) Третий тип транспорта, который на данный момент не используется в широкой практике - это автобус с местом для гроба и с большим количеством сидений для прощающихся.' +
            'Так как такие автобусы не оснащены ультрафиолетовыми лампами для обеззараживания, они непригодны для совместной поездки груза 200 и живых людей.'
    },
    {
        id: '0004vrz',
        _id: '0004vrz4332df',
        name: 'Носильщики',
        url: '/uslugi/Poxoroni',
        content: 'Когда в семьк произошло несчастье, очень неприятно тратить время и тревожиться о таких деталях, как перенос тела. И когда похороны организуются родственниками, всегда встаёт вопрос о том, кто будет нести гроб.' +
            'Суеверия ' +
            'Во множестве культур люди верят в то, что нельзя прикосаться к покойнику, а уж тем более, нести его во время похорон  и опускаться в могилу. Этот вопрос отпадает, когда есть ритуальный агент и целая команда похоронного предприятия , среди которой есть специально подготовленные носильщики. И это не только не нарушает многолетние традиции и поверья, но и значительно облегчают задачу родных умершего.',
    },
    {
        id: '00c05jty',
        _id: '005fgh64cf',
        name: 'Отпевание',
        url: '/uslugi/Poxoroni',
        content: 'текст про Носильщики2   Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
            '\n' +
            'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
    },
    {
        id: '0006gtgy6vrzy',
        _id: '006fn790ccf',
        name: 'Бальзамирование',
        url: '/uslugi/Poxoroni',
        content: 'текст про Носильщики2   Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
            '\n' +
            'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
    },
    {
        id: '0007vhj3m5rzy',
        _id: '007fgnnyj6ccf',
        name: 'Панихида',
        url: '/uslugi/Poxoroni',
        content: 'текст про Носильщики2   Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
            '\n' +
            'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
    },
    {
        id: '0008vh68rzy',
        _id: '008fcg542f7cf',
        name: 'Поминки',
        url: '/uslugi/Poxoroni',
        content: 'текст про Носильщики2   Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
            '\n' +
            'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
    },
    {
        id: '0009vgf96rzy',
        _id: '009fxa1ae56ccf',
        name: 'Груз 200',
        url: '/uslugi/gruz-200',
        content: 'текст про Носильщики2   Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
            '\n' +
            'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
    },
]

const Parent = () => {
    const [content, setContent] = useState({
        id: data[0].id,
        content: data[0].content,
    });

    const papaFunc = (newContent) => {
        setContent(newContent);
    }

    const [mobileContent, setMobileContent] = useState({
        id: null,
        content: null,
    });

    const mobilePapaFunc = (newMobileContent) => {
        setMobileContent(newMobileContent);
        setMobileActive(true);
        console.log('mobile' + mobileContent.id)
        console.log(mobileContent.action)
    }

    const [mobileActive, setMobileActive] = useState(false);

    const closed = () => {
        setMobileActive(false);
    }

    return(
        <div className='bg-blue-900 pt-10 pb-10 px-10 flex justify-center flex-col'>
            <h2 className='text-white font-bold text-3xl text-center mb-5'>Полный комплекс ритуальных услуг</h2>
            {/*мобильный экран*/}
            <div className='block md:hidden'>
                {data.map((item) => (<MobileItem key={item._id} item={item} papaFunc={mobilePapaFunc}/>))}
            </div>
            {/*дестоп*/}
            <div className='flex justify-center'>
                <div className='md:flex hidden max-w-screen-xl w-full'>
                    {data.map((item) => (<Item key={item.id} item={item} activeId={content.id} papaFunc={papaFunc}/>))}
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='hidden text-white md:block max-w-screen-xl p-5 border-x border-b rounded-b text-justify'>
                    {content.content}
                </div>
            </div>
        </div>
    )
}

export default Parent