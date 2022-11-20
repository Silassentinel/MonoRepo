// #region imports
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { throttle } from 'lodash';
import { loadState, saveState } from '../LocalStorage';
// #endregion

const rootReducer = combineReducers({

  /**
     *
     */

});

// De state uit de localStorage laden om daarachter aan de store te kunnen meegeven
// TODO implement somethine for the any below
const loadedStateFromLocalStorage : any = loadState();

// Dit gaat onze store configuren met verschillen properties in het
// configuratie object dat we meegeven als argument
const store = configureStore({
  // De root reducer die we meegeven in onze store, dit kunnen zoals
  // in dit geval meerdere zijn die gecombineerd zijn met combineReducers
  reducer: rootReducer,
  // De preloaded state is de initiële state die we meegeven aan onze store
  // in dit geval is dit de state vanuit de localStorage die we meegeven als initiële state
  preloadedState: loadedStateFromLocalStorage,
});

store.subscribe(
  throttle(() => saveState(store.getState()), 1000),
);

export default store;
