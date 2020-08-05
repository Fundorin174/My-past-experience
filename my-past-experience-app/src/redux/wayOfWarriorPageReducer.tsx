import liceistIconImg from './../img/warrior/shcool.png';
import fsoIconImg from './../img/warrior/fso.png';
import troopsIconImg from './../img/warrior/troops.png';
import baumanaIconImg from './../img/warrior/Baumana.png';
import sheduleIconImg from './../img/warrior/schedule.png';
import chiefHelperIconImg from './../img/warrior/chief_helper.png';
import magistrIconImg from './../img/warrior/magistr.png';
import teacherIconImg from './../img/warrior/teacher.png';

import warrior1 from './../img/warrior/teacher.png';


let initialState = {
    pathName: 'warrior',
    navBarList: [
        {
            ID: 0,
            title: 'Лицеист',
            iconImgUrl: liceistIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: warrior1,
                    description: ' ' ,
                    orientation: 'portrait'                
                },
                
            ]
        },
        {
            ID: 1,
            title: 'Курсант',
            iconImgUrl: fsoIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: warrior1,
                    description: ' ',
                    orientation: 'portrait'                 
                },
                
            ]
        },
        {
            ID: 2,
            title: 'Связист',
            iconImgUrl: troopsIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: fsoIconImg,
                    description: ' ',
                    orientation: 'portrait'                 
                },
                
            ]
        },
        {
            ID: 3,
            title: 'Кандидат',
            iconImgUrl: baumanaIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: fsoIconImg,
                    description: ' ' ,
                    orientation: 'portrait'                
                },
                
            ]
        },
        {
            ID: 4,
            title: 'Планер',
            iconImgUrl: sheduleIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: fsoIconImg,
                    description: ' ' ,
                    orientation: 'portrait'                
                },
                
            ]
        },
        {
            ID: 5,
            title: 'Старпом',
            iconImgUrl: chiefHelperIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: fsoIconImg,
                    description: ' ',
                    orientation: 'portrait'                 
                },
                
            ]
        },
        {
            ID: 6,
            title: 'Магистр',
            iconImgUrl: magistrIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: fsoIconImg,
                    description: ' ',
                    orientation: 'portrait'                 
                },
                
            ]
        },
        {
            ID: 7,
            title: 'Преподаватель',
            iconImgUrl: teacherIconImg,
            mainDescription: [' ',
                                ' ',
                                ' ',
                                ' '
                            ],
            photos: [
                {
                    title: '',
                    url: fsoIconImg,
                    description: ' ',
                    orientation: 'portrait'                 
                },
                
            ]
        },
    ]
};
  
export type wayOfWarriorInitialStateType = typeof initialState;

type ActionType = any;

const wayOfWarriorPageReducer = (state = initialState,
    action: ActionType): wayOfWarriorInitialStateType => {
        return state;
      };
  
  export default wayOfWarriorPageReducer;