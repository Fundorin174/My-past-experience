
let initialState = {
    isLoading: true
};
  

type ActionType =any
export type wayOfHumanInitialStateType = typeof initialState;;


const wayOfHumanPageReducer = (state = initialState,
    action: ActionType): wayOfHumanInitialStateType => {
        return state;
      };
  
  export default wayOfHumanPageReducer;