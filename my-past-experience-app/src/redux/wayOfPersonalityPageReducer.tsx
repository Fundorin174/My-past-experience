
let initialState = {
    isLoading: true
};
  

type ActionType =any
export type wayOfPersonalityInitialStateType = typeof initialState;;


const wayOfPersonalityPageReducer = (state = initialState,
    action: ActionType): wayOfPersonalityInitialStateType => { 
        return state;
     };
  
  export default wayOfPersonalityPageReducer;