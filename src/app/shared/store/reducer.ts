import { ActionsUnion, ActionTypes } from './actions';
import { LocalStorageService } from '../services/local-storage.service';

export const initialState = {
  items: [],
  cart: []
};

const localStorage = new LocalStorageService();
export function ShopReducer(state = initialState, action: ActionsUnion) {
  if (localStorage.getSavedState('store'))  state = localStorage.getSavedState('store');

  switch (action.type) {
    case ActionTypes.LoadSuccess:
      let stateData = {
        ...state,
        items: [...action.payload]
      };
      console.log('ShopReducer Load: ', stateData);
      localStorage.setSavedState(stateData, 'store');
      return stateData;
    case ActionTypes.Add:
      stateData = {
        ...state,
        cart: [...state.cart, action.payload]
      };
      console.log('ShopReducer Add : ', stateData);

      localStorage.setSavedState(stateData, 'store');
      return stateData;

    case ActionTypes.Remove:
      const idx = state.cart.findIndex(item => item.isbn === action.payload.isbn);
      if (idx > -1) state.cart.splice(idx, 1);

      stateData = {
        ...state,
        cart: [...state.cart]
      };
      console.log('ShopReducer Remove : ', stateData);

      localStorage.setSavedState(stateData, 'store');
      return stateData;

    default:
      console.log('ShopReducer Default : ', state);
      return state;
  }
}
