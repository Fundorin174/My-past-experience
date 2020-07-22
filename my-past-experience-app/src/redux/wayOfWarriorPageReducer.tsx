import liceistIconImg from './../img/warrior/shcool.png';
import fsoIconImg from './../img/warrior/fso.png';
import troopsIconImg from './../img/warrior/troops.png';
import baumanaIconImg from './../img/warrior/Baumana.png';
import sheduleIconImg from './../img/warrior/schedule.png';
import chiefHelperIconImg from './../img/warrior/chief_helper.png';
import magistrIconImg from './../img/warrior/magistr.png';
import teacherIconImg from './../img/warrior/teacher.png';


let initialState = {
    pathName: 'warrior',
    navBarList: [
        {
            title: 'Лицеист',
            iconImgUrl: liceistIconImg
        },
        {
            title: 'Курсант',
            iconImgUrl: fsoIconImg
        },
        {
            title: 'Связист',
            iconImgUrl: troopsIconImg
        },
        {
            title: 'Кандидат',
            iconImgUrl: baumanaIconImg
        },
        {
            title: 'Планер',
            iconImgUrl: sheduleIconImg
        },
        {
            title: 'Старпом',
            iconImgUrl: chiefHelperIconImg
        },
        {
            title: 'Магистр',
            iconImgUrl: magistrIconImg
        },
        {
            title: 'Преподаватель',
            iconImgUrl: teacherIconImg
        }
    ]
};
  
export type wayOfWarriorInitialStateType = typeof initialState;

type ActionType = any;

const wayOfWarriorPageReducer = (state = initialState,
    action: ActionType): wayOfWarriorInitialStateType => {
        return state;
      };
  
  export default wayOfWarriorPageReducer;