import styled from 'styled-components';
import {palette} from 'styled-theme';
import {View, TextInput, Button} from 'react-native';

const TranslateScreenWrapper = styled(View)`
  background: red;
  width: 100%;
  height: 100%;
`;

const StyledTextInput = styled(TextInput)`
  margin: 5px;
  background: white;
`;

const TranslateButtonGroup = styled(View)`
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
`;

const TranslateButton = styled(Button)`
  max-width: 50px;
`;

export {StyledTextInput, TranslateButtonGroup, TranslateButton};
export default TranslateScreenWrapper;
