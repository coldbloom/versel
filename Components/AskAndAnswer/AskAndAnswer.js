import React from 'react'
import ChildComponent from "./ChildComponent";


const AskAndAnswer = () => {
    const data = [
        {
            id: '_001v45ccy4',
            question: 'Что делать, если человек умер вне дома?',
            answer: 'Порядок действий зависит от места смерти. ' +
                'Если человек умер в стационаре по причине болезни, медработники сами направят тело в морг, ' +
                'оформят справку о смерти и выдадут родственникам документы и личные вещи покойного. ' +
                'В случаях, когда смерть наступила на улице, в дороге и т.д., ' +
                'необходимо вызвать полицию и бригаду скорой помощи. Это делается, ' +
                'чтобы установить факт смерти и ее характер (естественная или насильственная). ' +
                'Затем врач скорой передает вызов санитарам для перевозки тела в морг.',
        },
        {
            id: '_001v43ccy4',
            question: 'Сколько времени тело хранится в морге?',
            answer: 'Похороны по православным канонам проводят на третий день. ' +
                'Иногда в силу обстоятельств у родни нет возможности сразу забрать покойника. ' +
                'Помните, что бесплатно тело хранится в морге 7 дней. ' +
                'По истечению срока взимается плата. Если тело не забирают, ' +
                'его хоронят в общей могиле без опознавательных знаков.',
        },
        {
            id: '_001v47ccy4',
            question: 'Что нужно предоставить в морг из одежды усопшего?',
            answer: 'Независимо от пола усопшего необходимо предоставить носовой платок, ' +
                'мыло, полотенце, зубные протезы, а также одеколон или другую аналогичную жидкость. ' +
                'Помимо этого, для тела покойного следует подготовить: ' +
                'для усопшего: \n' +
                '\n' +
                'носки с обувью; \n' +
                'комплект нижнего белья (майка и трусы); \n' +
                'рубашку с галстуком и костюмом; \n' +
                'станок для бритья;\n' +
                'для усопшей: \n' +
                'чулки с обувью; \n' +
                'комплект нижнего белья (ночная рубашка и штанишки или трусы);\n' +
                'платок; \n' +
                'верхнюю одежду (платье, костюм и др.).'
        },
        {
            id: '_001v47cct2ydy4',
            question: 'Сколько реально стоят похороны в Крыму?',
            answer: 'На сумму затрат влияет несколько факторов: класс ритуальных принадлежностей, ' +
                'выбранный комплекс церемониальных мероприятий, необходимость в бальзамировании и многое другое. ' +
                'Однако средние похороны, по факту нашего опыта, обходятся людям в 30000 рублей, ' +
                'поэтому можем уверить вас более 100% что похороныт на сумму меньше 15 тысяч' +
                ' с учетом суммы пособия на погребение, которая состовляет 14 000 рублей ' +
                'для жителей Крыма на момент 2022 года ни одна Ритуальная служба города Евпатории и с. Уютное' +
                ' предоставить вам не сможет, так как минимальный набор атрибутики и услуг необходимых для захоронения,' +
                ' в которые входят копка и закопка могилы, ' +
                'услуги по подготовке тела умершего в гроб, и транспортировка тела' +
                ' обходится не менее 30 000 рублей.'
        }
    ]
    return (
        <div className='pt-10 pb-10 bg-white px-4 md:px-10'>
            <h2 className='font-bold text-3xl text-center mb-5'>Вопрс-ответ</h2>
            <div className='flex flex-col w-full'>
                {data.map((item) => (
                    <ChildComponent key={item.id} data={item}/>
                ))}

            </div>
        </div>
    )
}

export default AskAndAnswer