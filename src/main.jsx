import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { logger } from './middleware/index.js'
import  {thunk}  from 'redux-thunk'
import './index.css'
import rootReducer from './reducers/rootReducer.js'

const composeAlt = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));
const store = createStore(rootReducer, composedEnhancers);
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode >


)
