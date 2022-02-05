import { combineReducers, createStore } from "redux";
import anecdoteReducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notifications: notificationReducer
});

const index = createStore(
    reducer,
    composeWithDevTools()
)

export default index;