import styled from 'styled-components';
import {palette} from 'styled-theme';
import {View, TextInput, Button} from 'react-native';
import TranslateBut from '../../components/TranslateBut';



const TranslateScreenWrapper = styled(View)`
  background: white;
  width: 100%;
  height: 100%;
`;

const StyledTextInput = styled(TextInput)`
  margin: 5px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  background: #E1E1E1;
`;

const TranslateButtonGroup = styled(View)`
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
  flexDirection: row;
  margin-top: 10px;
`;

const TranslateButton = styled(TranslateBut)`
  max-width: 50px;
`;

export {StyledTextInput, TranslateButtonGroup, TranslateButton};
export default TranslateScreenWrapper;
