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
      if (res.sentences[0].trans) {
        setTranslatedText(res.sentences[0].trans);
      }
    });
  };

  return (
    <TranslateScreenWrapper>
      <View>
        <StyledTextInput
          multiline={true}
          numberOfLines={4}
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <TranslateButtonGroup>
          <TranslateButton
            title={intl.formatMessage({
              id: 'translate.btn.en-vi',
              defaultMessage: 'Anh - Việt',
            })}
            onPress={() => translate('en', 'vi')}
          />
          <TranslateButton
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
            numberOfLines={4}
            value={translatedText}
            onChangeText={(value) => setTranslatedText(value)}
          />
        ) : null}
      </View>
    </TranslateScreenWrapper>
  );
};

export default TranslateScreen;
