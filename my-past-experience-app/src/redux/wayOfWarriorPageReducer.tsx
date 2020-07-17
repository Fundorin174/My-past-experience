import liceistIconImg from './../img/warrior/shcool.png';
import fsoIconImg from './../img/warrior/fso.png';
import troopsIconImg from './../img/warrior/troops.png';
import baumanaIconImg from './../img/warrior/Baumana.png';
import sheduleIconImg from './../img/warrior/schedule.png';
import chiefHelperIconImg from './../img/warrior/chief_helper.png';
import magistrIconImg from './../img/warrior/magistr.png';
import teacherIconImg from './../img/warrior/teacher.png';
import webDevIconImg from './../img/warrior/teacher.png';

let initialState = {
    pathName: 'warrior',
    navBarList: [
        {
            title: 'лицеист',
            iconImgUrl: liceistIconImg
        },
        {
            title: 'курсант',
            iconImgUrl: fsoIconImg
        },
        {
            title: 'связист',
            iconImgUrl: troopsIconImg
        },
        {
            title: 'кандидат',
            iconImgUrl: baumanaIconImg
        },
        {
            title: 'планер',
            iconImgUrl: sheduleIconImg
        },
        {
            title: 'старпом',
            iconImgUrl: chiefHelperIconImg
        },
        {
            title: 'магистр',
            iconImgUrl: magistrIconImg
        },
        {
            title: 'преподаватель',
            iconImgUrl: teacherIconImg
        },
        {
            title: 'разработчик',
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