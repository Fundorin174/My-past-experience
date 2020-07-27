
import childIconImg from './../img/human/childhood.png';
import husbandIconImg from './../img/human/husband.png';
import ownerIconImg from './../img/human/Owner.png';
import fatherIconImg from './../img/human/father.png';

import child1 from './../img/human/child/child1.jpg';
import child2 from './../img/human/child/child2.jpg';
import child3 from './../img/human/child/child3.jpg';
import child4 from './../img/human/child/child4.jpg';
import child5 from './../img/human/child/child5.jpg';
import child6 from './../img/human/child/child6.jpg';
import child7 from './../img/human/child/child7.jpg';
import child8 from './../img/human/child/child8.jpg';
import child9 from './../img/human/child/child9.jpg';
import child10 from './../img/human/child/child10.jpg';
import child11 from './../img/human/child/child11.jpg';
import child12 from './../img/human/child/child12.jpg';
import child13 from './../img/human/child/child13.jpg';

import husband1 from './../img/human/husband/husband1.jpg';
import husband2 from './../img/human/husband/husband2.jpg';
import husband3 from './../img/human/husband/husband3.jpg';
import husband4 from './../img/human/husband/husband4.jpg';
import husband5 from './../img/human/husband/husband5.jpg';
import husband6 from './../img/human/husband/husband6.jpg';
import husband7 from './../img/human/husband/husband7.jpg';
import husband8 from './../img/human/husband/husband8.jpg';
import husband9 from './../img/human/husband/husband9.jpg';
import husband10 from './../img/human/husband/husband10.jpg';
import husband11 from './../img/human/husband/husband11.jpg';
import husband12 from './../img/human/husband/husband12.jpg';
import husband13 from './../img/human/husband/husband13.jpg';
import husband14 from './../img/human/husband/husband14.jpg';
import husband15 from './../img/human/husband/husband15.jpg';

import owner1 from './../img/human/owner/owner1.jpg';
import owner2 from './../img/human/owner/owner2.jpg';
import owner3 from './../img/human/owner/owner3.jpg';
import owner4 from './../img/human/owner/owner4.jpg';
import owner5 from './../img/human/owner/owner5.jpg';
import owner6 from './../img/human/owner/owner6.jpg';
import owner7 from './../img/human/owner/owner7.jpg';
import owner8 from './../img/human/owner/owner8.jpg';

import father1 from './../img/human/father/father1.jpg';
import father2 from './../img/human/father/father2.jpg';
import father3 from './../img/human/father/father3.jpg';
import father4 from './../img/human/father/father4.jpg';
import father5 from './../img/human/father/father5.jpg';
import father6 from './../img/human/father/father6.jpg';
import father7 from './../img/human/father/father7.jpg';
import father8 from './../img/human/father/father8.jpg';
import father9 from './../img/human/father/father9.jpg';
import father10 from './../img/human/father/father10.jpg';
import father11 from './../img/human/father/father11.jpg';


const SET_CURRENT_LIST = 'MY_EXPERIENCE/HUMAN/SET_CURRENT_LIST';


export type photoType = {
    title: string,
    url: string,
    description: string,
    isVerticalOriented?: boolean        
}

export type ListType = {
    ID: number,
    title: string,
    iconImgUrl: string,
    mainDescription: Array<string>,
    photos: Array<photoType>,
}

type SetCurrentListType = {
    type: typeof SET_CURRENT_LIST;
    list: ListType;
}

export const setCurrentList = (list:ListType):SetCurrentListType => ({
        type: SET_CURRENT_LIST,
        list: list
    });


let initialState = {
    pathName: 'human',
    navBarList: [
        {
            ID: 0,
            title: 'Ребенок',
            iconImgUrl: childIconImg,
            mainDescription: ['1980-1997 годы',
                                'Я родился 25 февраля 1980 года в Белоруссии. Через год мой отец подписал контракт на службу в армии, и его направили служить на Кольский полуостров, в закрытый городок Гаджиево. Там и прошло моё детство.',
                                'Мой отец служил в строительных войсках, был начальником вещевой и продовольственной служб полка. Мать освоила несколько профессий: от товароведа до бухгалтера. В закрытом городке особого выбора не было. Ещё у меня есть любимая родная сестра.',
                                'В 1986 году мы переехали в Воронеж, где и живём до сих пор.'
                            ],
            photos: [
                {
                    title: '',
                    url: child1,
                    description: 'Какие огромные в детстве медведи'                
                },
                {
                  title: '',
                  url: child2,
                  description: 'Моя семья'                
              },
                {
                    title: '',
                    url: child3,
                    description: 'С детства по военным городкам'                
                },
                {
                    title: '',
                    url: child4,
                    description: 'Суровый север'                
                },
                {
                    title: '',
                    url: child5,
                    description: 'Отец',
                    isVerticalOriented: true                
                },
                {
                    title: 'Мама',
                    url: child6,
                    description: ''                
                },
                {
                    title: '',
                    url: child7,
                    description: 'Я',
                    isVerticalOriented: true                  
                },
                {
                    title: '',
                    url: child8,
                    description: 'В детском саду',
                    isVerticalOriented: true                  
                },
                {
                    title: '',
                    url: child9,
                    description: 'Пока отец на службе',
                    isVerticalOriented: true                     
                },
                {
                    title: '',
                    url: child10,
                    description: 'Не в настроении...',
                    isVerticalOriented: true                     
                },
                {
                    title: '',
                    url: child11,
                    description: 'Октябренок',
                    isVerticalOriented: true                     
                },
                {
                    title: '',
                    url: child12,
                    description: 'Начинающий водила'                
                },
                {
                    title: '',
                    url: child13,
                    description: 'С любимой бабушкой',
                    isVerticalOriented: true                     
                },
            ]
        },
        {
            ID: 1,
            title: 'Муж',
            iconImgUrl: husbandIconImg,
            mainDescription: ['С 2002 года и навсегда',
                                'Со своей будущей супругой Людмилой я познакомился во время обучения в Академии в Орле. Нам хватило совсем немного времени, чтобы понять, что это Любовь.',
                                'Выпустившись из Академии, я забрал её в Воронеж, и вскоре мы поженились. Вот уже более пятнадцати лет мы вместе, и с каждым годом любим друг друга всё сильнее.'
                            ],
            photos: [
                {
                    title: '',
                    url: husband1,
                    description: 'Как молоды мы были...',
                    isVerticalOriented: true                     
                },
                {
                    title: '',
                    url: husband2,
                    description: 'Проверка на прочность-))'                
                },
                {
                    title: '',
                    url: husband3,
                    description: 'Моменты настоящего счастья'                
                },
                {
                    title: '',
                    url: husband4,
                    description: 'Впереди новая жизнь...'                
                },
                {
                    title: '',
                    url: husband5,
                    description: 'Чтбы стать женой генерала, надо выйти замуж за лейтенента',
                    isVerticalOriented: true                     
                },
                {
                    title: '',
                    url: husband6,
                    description: 'Везде вместе'                
                },
                {
                    title: '',
                    url: husband7,
                    description: 'Спортивная семья',
                    isVerticalOriented: true                     
                },
                {
                    title: '',
                    url: husband8,
                    description: 'Красивая пара',
                    isVerticalOriented: true                     
                },
                {
                    title: '',
                    url: husband9,
                    description: 'Любовь проверяется годами',
                    isVerticalOriented: true                     
                },
                {
                    title: '',
                    url: husband10,
                    description: 'Кто тут главный?-))',
                    isVerticalOriented: true                     
                },
                {
                    title: '',
                    url: husband11,
                    description: 'Под Новый год',
                    isVerticalOriented: true                     
                },
                {
                    title: '',
                    url: husband12,
                    description: 'Всё ещё неплохо смотримся',
                    isVerticalOriented: true                     
                },
                {
                    title: '',
                    url: husband13,
                    description: 'На жёнах всё держится',
                    isVerticalOriented: true                     
                },
                {
                    title: '',
                    url: husband14,
                    description: 'Красавица',
                    isVerticalOriented: true                     
                },
                {
                    title: '',
                    url: husband15,
                    description: '15-летие свадьбы! Как вчера...',
                    isVerticalOriented: true                     
                },
            ]
        },
        {
            ID: 2,
            title: 'Хозяин',
            iconImgUrl: ownerIconImg,
            mainDescription: ['с 2009 года',
                                'Вот уже 11 лет в нашей семье живёт мохнатый друг породы Ши-Тцу. Зовут его Спартак, и это самый умный и доброжелательный пёс из всех, кого я видел.',
                                'Так как мы вместе с ним болеем за Спартак, то ему положена вкусная печенька за каждый забитый гол. Зная это, он болеет азартнее меня и давно научился определять забитые мячи-))'
                            ],
            photos: [
                {
                    title: '',
                    url: owner1,
                    description: 'Со Спартаком, за Спартак!',
                    isVerticalOriented: true                             
                },
                {
                    title: '',
                    url: owner2,
                    description: 'Я Ваш подарочек...',
                    isVerticalOriented: true                         
                },
                {
                    title: '',
                    url: owner3,
                    description: 'Зверь',
                    isVerticalOriented: true                             
                },
                {
                    title: '',
                    url: owner4,
                    description: 'Сторожевой пёс-))'                
                },
                {
                    title: '',
                    url: owner5,
                    description: 'Порода из Тибета,суши любит-)'                
                },
                {
                    title: '',
                    url: owner6,
                    description: 'Милашки',
                    isVerticalOriented: true                             
                },
                {
                    title: '',
                    url: owner7,
                    description: 'Антистресс'                
                },
                {
                    title: '',
                    url: owner8,
                    description: 'Сугроб пришёл-)',
                    isVerticalOriented: true                             
                },
            ]
        },
        {
            ID: 3,
            title: 'Отец',
            iconImgUrl: fatherIconImg,
            mainDescription: ['С 2013 года',
                                '15 октября 2013 года у нас родились очаровательные двойняшки Алёна и Илья. Несмотря на то, что родились они одновременно, это два абсолютно разных человечка с совершенно разными характерами.'
                            ],
            photos: [
                {
                    title: '',
                    url: father1,
                    description: 'За рулём лимузина'    
                },
                {
                    title: '',
                    url: father2,
                    description: 'Паровозик радости'                
                },
                {
                    title: '',
                    url: father3,
                    description: 'С детства за Спартак!'                
                },
                {
                    title: '',
                    url: father4,
                    description: 'Доча'                
                },
                {
                    title: '',
                    url: father5,
                    description: 'Всё семейство на даче'                
                },
                {
                    title: '',
                    url: father6,
                    description: 'На природе'                
                },
                {
                    title: '',
                    url: father7,
                    description: 'Семейная фотосессия'                
                },
                {
                    title: '',
                    url: father8,
                    description: 'Маленький, а уже грозный-)',
                    isVerticalOriented: true                             
                },
                {
                    title: '',
                    url: father9,
                    description: 'Моя принцесса'                
                },
                {
                    title: '',
                    url: father10,
                    description: 'Семья!',
                    isVerticalOriented: true                             
                },
                {
                    title: '',
                    url: father11,
                    description: 'Первые уроки вождения',
                    isVerticalOriented: true                             
                },


            ]
        }
    ],
    currentList: {} as ListType
};
  

type ActionType = SetCurrentListType;
export type wayOfHumanInitialStateType = typeof initialState;;


const wayOfHumanPageReducer = (state = initialState,
    action: ActionType): wayOfHumanInitialStateType => {
        switch (action.type) {
            case SET_CURRENT_LIST:
            return {
                ...state, 
                currentList: action.list
            };
            default:
                return state;
        }
        
       
      };
  
  export default wayOfHumanPageReducer;