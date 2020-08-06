import { combineReducers, compose, createStore} from "redux";
import wayOfWarriorPageReducer from "./wayOfWarriorPageReducer";
import wayOfHumanPageReducer from "./wayOfHumanPageReducer";
import wayOfPersonalityPageReducer from "./wayOfPersonalityPageReducer";



let rootReducer = combineReducers({
  wayOfWarrior: wayOfWarriorPageReducer,
  wayOfHuman: wayOfHumanPageReducer,
  wayOfPersonality: wayOfPersonalityPageReducer
});

type RootReduserType = typeof rootReducer

export type AppStateType = ReturnType<RootReduserType>

//@ts-ignore
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
//@ts-ignore
window.__store__ = store;

export default store;