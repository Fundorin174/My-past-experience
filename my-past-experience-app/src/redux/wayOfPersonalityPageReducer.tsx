
import webDevIconImg from './../img/personality/webDev.png';
import vniknyIconImg from './../img/personality/vnikni.png';
import adventageIconImg from './../img/personality/extrim.png';
import travelingIconImg from './../img/personality/travel.png';
import rockIconImg from './../img/personality/rock.png';
import kvnIconImg from './../img/personality/kvn.png';
import sportIconImg from './../img/personality/sport.png';
import footballIconImg from './../img/personality/football.png';
import turizmIconImg from './../img/personality/tourism.png';

import webDev1 from './../img/personality/webDev/webDev1.jpg';
import webDev2 from './../img/personality/webDev/webDev2.jpg';
import webDev3 from './../img/personality/webDev/webDev3.jpg';
import webDev4 from './../img/personality/webDev/webDev4.jpg';
import webDev5 from './../img/personality/webDev/webDev5.jpg';
import webDev6 from './../img/personality/webDev/webDev6.jpg';

import vnikny1 from './../img/personality/vnikny/vnilny1.png';
import vnikny2 from './../img/personality/vnikny/vnilny2.png';
import vnikny3 from './../img/personality/vnikny/vnilny3.png';
import vnikny4 from './../img/personality/vnikny/vnilny4.png';
import vnikny5 from './../img/personality/vnikny/vnilny5.png';
import vnikny6 from './../img/personality/vnikny/vnilny6.png';

let initialState = {
    pathName: 'personality',
    navBarList: [
        {
            ID: 0,
            title: 'Web Developer',
            iconImgUrl: webDevIconImg,
            mainDescription: ['2019 год - по наст. время',
                                'Еще в армии, в порядке эксперимента, я попробовал сделать пару простых сайтов.',
                                'Этот сайт - это переработанная на React/Redux/Rreact-Bootstrap копия моего первого сайта, который был сделан на HTML/CSS/JQuery для конкурса "Преподаватель Года".',
                                'Однажды встав на путь Web разработки, я понял что это  - мой путь и уже с него не сворачивал.',
                                'Заканчивая свой последний контракт в армии я усиленно осваивал новую профессию и создавал проекты. Сначала простые, потом все сложнее и интереснее...',
                                'Ссылки на все мои проекты есть в резюме'
                            ],
            photos: [
                {
                    title: '',
                    url: webDev1,
                    description: 'React приложение для раздичных мероприятий. Силой голоса вы управляете полетом птицы и одновременно поете песню. '                
                },
                {
                    title: '',
                    url: webDev2,
                    description: 'Стек технологий: React, Redux, Typescript, SCSS, Flexbox, React-router, FLUX ...'                
                },
                {
                    title: '',
                    url: webDev3,
                    description: 'Соцсеть на React/Redux/TypeScript '                
                },
                {
                    title: '',
                    url: webDev4,
                    description: 'Один из моих первых сайтов для свадебного ведущего'                
                },
                {
                    title: '',
                    url: webDev5,
                    description: 'Многостраничник для фирмы по установке систем охраны'                
                },
                {
                    title: '',
                    url: webDev6,
                    description: 'Ну и интернет-магазины на WordPress тоде приходилось клепать'                
                },
                
            ]
        },
        {
            ID: 1,
            title: 'ВНИКНИ',
            iconImgUrl: vniknyIconImg,
            mainDescription: ['На этапе своей преподавательской карьеры, я понял, что мне нравится разрабатывать понятные и интересные занятия и рассказывать курсантам о современных технологиях. ',
            'Однако преподавать только для курсантов моего института мне показалось мало. Хотелось, чтобы то, что я могу рассказать, могли услышать как можно больше человек. Поэтому я закупил оборудование и завёл свой канал на YouTube. На канале "ВНИКНИ" я выпускаю короткие информативные ролики о наиболее интересных моментах компьютерных и сетевых технологий. ',
                            ],
            photos: [
                {
                    title: '',
                    url: vnikny1,
                    description: ' '                
                },
                {
                    title: '',
                    url: vnikny2,
                    description: ' '                
                },
                {
                    title: '',
                    url: vnikny3,
                    description: ' '                
                },
                {
                    title: '',
                    url: vnikny4,
                    description: ' '                
                },
                {
                    title: '',
                    url: vnikny5,
                    description: ' '                
                },
                {
                    title: '',
                    url: vnikny6,
                    description: ' '                
                },
                
            ]
        },
        {
            ID: 2,
            title: 'Приключения',
            iconImgUrl: adventageIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: webDev1,
                    description: ' '                
                },
                
            ]
        },
        {
            ID: 3,
            title: 'Путешествия',
            iconImgUrl: travelingIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: webDev1,
                    description: ' '                
                },
                
            ]
        },
        {
            ID: 4,
            title: 'Рок-н-ролл',
            iconImgUrl: rockIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: webDev1,
                    description: ' '                
                },
                
            ]
        },
        {
            ID: 5,
            title: 'Спорт',
            iconImgUrl: sportIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: webDev1,
                    description: ' '                
                },
                
            ]
        },
        {
            ID: 6,
            title: 'Футбол',
            iconImgUrl: footballIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: webDev1,
                    description: ' '                
                },
                
            ]
        },
        {
            ID: 7,
            title: 'Туризм',
            iconImgUrl: turizmIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: webDev1,
                    description: ' '                
                },
                
            ]
        },
        {
            ID: 8,
            title: 'КВН',
            iconImgUrl: kvnIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: webDev1,
                    description: ' '                
                },
                
            ]
        },
    ],

};
  

type ActionType =any
export type wayOfPersonalityInitialStateType = typeof initialState;;


const wayOfPersonalityPageReducer = (state = initialState,
    action: ActionType): wayOfPersonalityInitialStateType => { 
        return state;
     };
  
  export default wayOfPersonalityPageReducer;