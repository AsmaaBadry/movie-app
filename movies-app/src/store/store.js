import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import favoratemovies from './reducer/favoratemovies'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
const store = createStore(favoratemovies, composeWithDevTools(applyMiddleware(thunk)));

// const store=createStore(favoratemovies,applyMiddleware(thunk))
export default store