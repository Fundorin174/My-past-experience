
let initialState = {
    pathName: 'personality'
};
  

type ActionType =any
export type wayOfPersonalityInitialStateType = typeof initialState;;


const wayOfPersonalityPageReducer = (state = initialState,
    action: ActionType): wayOfPersonalityInitialStateType => { 
        return state;
     };
  
  export default wayOfPersonalityPageReducer;