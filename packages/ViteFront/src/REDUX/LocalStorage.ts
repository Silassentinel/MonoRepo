// #region imports
import { EmptyObject } from '@reduxjs/toolkit';
// #endregion

// De state terug in de React-Redux applicatie inladen
export const loadState = (): unknown | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log('Error in loading the state ', err);
    return undefined;
  }
};

// De state in de React-Redux applicatie opslaan
export const saveState = (state : EmptyObject) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('Error in saving the state ', err);
  }
};
