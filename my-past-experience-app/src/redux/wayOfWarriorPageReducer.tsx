
let initialState = {
    isLoading: true
};
  
export type wayOfWarriorInitialStateType = typeof initialState;

type ActionType = any;

const wayOfWarriorPageReducer = (state = initialState,
    action: ActionType): wayOfWarriorInitialStateType => {
        return state;
      };
  
  export default wayOfWarriorPageReducer;