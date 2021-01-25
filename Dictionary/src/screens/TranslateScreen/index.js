import {Text, TextInput, TouchableOpacity, Button, View} from 'react-native';
import SearchBar from '../../components/SearchBar';
import Screens from '../Screens';
import agent from '../../api/restful';
import React, {useState} from 'react';
import TranslateScreenWrapper, {
  StyledTextInput,
  TranslateButtonGroup,
  TranslateButton,
} from './style';
import {useIntl} from 'react-intl';

const TranslateScreen = ({navigation}) => {
  const intl = useIntl();
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translate = (source, target) => {
    agent.GoogleTranslate.trans(source, target, text).then((res) => {
      if (res && res[0] && res[0][0] && res[0][0][0]) {
        setTranslatedText(res[0][0][0]);
      }
    });
  };

  return (
    <TranslateScreenWrapper>
      <View>
        <StyledTextInput
          multiline={true}
          numberOfLines={8}
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <TranslateButtonGroup>
          <TranslateButton
            vntoen={false}
            title={intl.formatMessage({
              id: 'translate.btn.en-vi',
              defaultMessage: 'Anh - Việt',
            })}
            onPress={() => translate('en', 'vi')}
          />
          <TranslateButton
            vntoen={true}
            title={intl.formatMessage({
              id: 'translate.btn.vi-en',
              defaultMessage: 'Việt - Anh',
            })}
            onPress={() => translate('vi', 'en')}
          />
        </TranslateButtonGroup>
        {translatedText ? (
          <StyledTextInput
            multiline={true}
            numberOfLines={8}
            value={translatedText}
            onChangeText={(value) => setTranslatedText(value)}
          />
        ) : null}
      </View>
    </TranslateScreenWrapper>
  );
};

export default TranslateScreen;
