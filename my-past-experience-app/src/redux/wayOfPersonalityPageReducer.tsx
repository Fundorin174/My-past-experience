
import webDevIconImg from './../img/personality/webDev.png';
import vniknyIconImg from './../img/personality/vnikni.png';
import adventageIconImg from './../img/personality/extrim.png';
import travelingIconImg from './../img/personality/travel.png';
import rockIconImg from './../img/personality/rock.png';
import kvnIconImg from './../img/personality/kvn.png';
import sportIconImg from './../img/personality/sport.png';
import footballIconImg from './../img/personality/football.png';
import turizmIconImg from './../img/personality/tourism.png';

let initialState = {
    pathName: 'personality',
    navBarList: [
        {
            title: 'WebDev',
            iconImgUrl: webDevIconImg
        },
        {
            title: 'ВНИКНИ',
            iconImgUrl: vniknyIconImg
        },
        {
            title: 'Приключения',
            iconImgUrl: adventageIconImg
        },
        {
            title: 'Путушествия',
            iconImgUrl: travelingIconImg
        },
        {
            title: 'Рок-н-ролл',
            iconImgUrl: rockIconImg
        },
        {
            title: 'Спорт',
            iconImgUrl: sportIconImg
        },
        {
            title: 'Футбол',
            iconImgUrl: footballIconImg
        },
        {
            title: 'Туризм',
            iconImgUrl: turizmIconImg
        },
        {
            title: 'КВН',
            iconImgUrl: kvnIconImg
        }
    ]
};
  

type ActionType =any
export type wayOfPersonalityInitialStateType = typeof initialState;;


const wayOfPersonalityPageReducer = (state = initialState,
    action: ActionType): wayOfPersonalityInitialStateType => { 
        return state;
     };
  
  export default wayOfPersonalityPageReducer;