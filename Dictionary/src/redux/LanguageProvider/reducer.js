import actions from './action';
import AsyncStorage from '@react-native-community/async-storage';

const initState = {
  lang: 'vi',
};

export default function (state = initState, action) {
  switch (action.type) {
    case actions.SET_LANGUAGE:
      AsyncStorage.setItem('lang', action.lang);
      return {...state, lang: action.lang};
    default:
      return state;
  }
}
