import { AppStateType } from "../redux/redux-store";
import { ListType } from "../redux/wayOfHumanPageReducer";

export const getCurrentNavBarList = (state: AppStateType) =>{
    let currentNavBarList = state.wayOfPersonality.navBarList;
    state.wayOfPersonality.navBarList?.forEach((listItem: ListType)=>{
        if (listItem?.ID === state.wayOfHuman.currentList.ID) {
            currentNavBarList = state.wayOfPersonality.navBarList;
        } 
    })

    state.wayOfWarrior.navBarList?.forEach((listItem: ListType)=>{
        if (listItem?.ID === state.wayOfHuman.currentList.ID) {
            currentNavBarList = state.wayOfWarrior.navBarList;
        } 
    })

    state.wayOfHuman.navBarList?.forEach((listItem: ListType)=>{
        if (listItem?.ID === state.wayOfHuman.currentList.ID) {
            currentNavBarList = state.wayOfHuman.navBarList;
        } 
    })

    
    return currentNavBarList
};

