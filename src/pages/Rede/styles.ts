import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Hight, titleSize, w } from '../../utils/size';
import { fonts } from '../../theme/fonts';
import { cor } from '../../theme';

export const Container = styled.View`
   flex: 1;

   padding: 20px;
`;

export const title = styled.Text`
   font-size: ${titleSize}px;
   font-family: ${fonts.rBold};

   margin-bottom: 20px;
`;
export const text = styled.Text`
   font-size: ${titleSize}px;
   font-family: ${fonts.rRgular};
`;
