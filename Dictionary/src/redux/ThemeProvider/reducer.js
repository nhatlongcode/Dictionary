import actions from './action';
import AsyncStorage from '@react-native-community/async-storage';

const initState = {
  theme: 'light',
};

export default function (state = initState, action) {
  switch (action.type) {
    case actions.SET_THEME:
      AsyncStorage.setItem('theme', action.theme);
      return {...state, theme: action.theme};
    default:
      return state;
  }
}
