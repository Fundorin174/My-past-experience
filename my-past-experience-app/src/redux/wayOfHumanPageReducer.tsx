
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
import husband1 from './../img/human/child/child13.jpg';


const SET_CURRENT_LIST = 'MY_EXPERIENCE/HUMAN/SET_CURRENT_LIST';


export type photoType = {
    title: string,
    url: string,
    description: string        
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
                    description: 'Отец'                
                },
                {
                    title: 'Мать',
                    url: child6,
                    description: ''                
                },
                {
                    title: '',
                    url: child7,
                    description: 'Я'                
                },
                {
                    title: '',
                    url: child8,
                    description: 'В детском саду'                
                },
                {
                    title: '',
                    url: child9,
                    description: 'Пока отец на службе'                
                },
                {
                    title: '',
                    url: child10,
                    description: 'Не в настроении...'                
                },
                {
                    title: '',
                    url: child11,
                    description: 'Октябренок'                
                },
                {
                    title: '',
                    url: child12,
                    description: 'Начинающий водила'                
                },
                {
                    title: '',
                    url: child13,
                    description: 'С любимой бабушкой'                
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
                    description: 'Как молоды мы были'                
                },


            ]
        },
        {
            ID: 2,
            title: 'Собаковод',
            iconImgUrl: ownerIconImg,
            mainDescription: ['1980-1997 годы',
                                'Я родился 25 февраля 1980 года в Белоруссии. Через год мой отец подписал контракт на службу в армии, и его направили служить на Кольский полуостров, в закрытый городок Гаджиево. Там и прошло моё детство.',
                                'Мой отец служил в строительных войсках, был начальником вещевой и продовольственной служб полка. Мать освоила несколько профессий: от товароведа до бухгалтера. В закрытом городке особого выбора не было. Ещё у меня есть любимая родная сестра.',
                                'В 1986 году мы переехали в Воронеж, где и живём до сих пор.'
                            ],
            photos: [
                {
                    title: 'photo1',
                    url: './../img/human/childhood.png',
                    description: 'Какие огромные в детстве медведи'                
                },
                {
                    title: 'photo2',
                    url: './../img/human/Owner.png',
                    description: 'Моя семья'                
                },

            ]
        },
        {
            ID: 3,
            title: 'Отец',
            iconImgUrl: fatherIconImg,
            mainDescription: ['1980-1997 годы',
                                'Я родился 25 февраля 1980 года в Белоруссии. Через год мой отец подписал контракт на службу в армии, и его направили служить на Кольский полуостров, в закрытый городок Гаджиево. Там и прошло моё детство.',
                                'Мой отец служил в строительных войсках, был начальником вещевой и продовольственной служб полка. Мать освоила несколько профессий: от товароведа до бухгалтера. В закрытом городке особого выбора не было. Ещё у меня есть любимая родная сестра.',
                                'В 1986 году мы переехали в Воронеж, где и живём до сих пор.'
                            ],
            photos: [
                {
                    title: '',
                    url: './../img/human/childhood.png',
                    description: 'Какие огромные в детстве медведи'                
                },
                {
                    title: '',
                    url: './../img/human/Owner.png',
                    description: 'Моя семья'                
                },

            ]
        }
    ],
    currentList: {}
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