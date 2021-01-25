import React, {useEffect} from 'react';
import {Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './src/screens/LandingScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import Screens from './src/screens/Screens';
import SearchScreen from './src/screens/SearchScreen';
import WordScreen from './src/screens/WordScreen';
import {ThemeProvider} from 'styled-components';
import {IntlProvider} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';
import AppLocale from './src/utils/languages';
import Themes from './src/utils/themes';
import langAction from './src/redux/LanguageProvider/action';
import themeAction from './src/redux/ThemeProvider/action';
import TranslateScreen from './src/screens/TranslateScreen';

function LogoTitle() {
  return (
    <Image
      style={{width: 180, height: 50, marginTop: 15}}
      source={require('./src/image/logo.png')}
    />
  );
}

const App = () => {
  const dispatch = useDispatch();
  const selectedLang = useSelector((state) => state.LangProvider.lang);
  const selectedTheme = useSelector((state) => state.ThemeProvider.theme);

  const locale = AppLocale[selectedLang];
  const theme = Themes[selectedTheme];

  useEffect(() => {
    AsyncStorage.getItem('lang', (error, result) => {
      if (result != null) {
        dispatch({type: langAction.SET_LANGUAGE, lang: result});
      } else {
        dispatch({type: langAction.SET_LANGUAGE, lang: 'vi'});
      }
    });
    AsyncStorage.getItem('theme', (error, result) => {
      if (result != null) {
        dispatch({type: themeAction.SET_THEME, theme: result});
      } else {
        dispatch({type: themeAction.SET_THEME, theme: 'light'});
      }
    });
  }, []);

  return (
    <IntlProvider locale={locale.locale} messages={locale.messages}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={Screens.Home}
            screenOptions={{
              headerStyle: {
                backgroundColor: '#51ABF0',
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTintColor: '#2C1100',
            }}>
            <Stack.Screen
              name={Screens.Home}
              component={LandingScreen}
              options={{headerTitle: (props) => <LogoTitle {...props} />}}
            />
            <Stack.Screen
              name={Screens.Component}
              component={ComponentScreen}
            />
            <Stack.Screen name={Screens.Search} component={SearchScreen} />
            <Stack.Screen
              name={Screens.Word}
              component={WordScreen}
              options={({route}) => ({title: route.params.title})}
            />
            <Stack.Screen
              name={Screens.Translate}
              component={TranslateScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </IntlProvider>
  );
};

const Stack = createStackNavigator();

export default App;
