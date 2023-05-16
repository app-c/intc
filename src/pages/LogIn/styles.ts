import styled from 'styled-components/native';
import { cor } from '../../theme';
import { Hight, fontSize, titleSize } from '../../utils/size';
import { fonts } from '../../theme/fonts';

export const Container = styled.View`
   flex: 1;
   align-items: center;
   padding: 20px;
   background-color: ${cor.blue[5]};
`;

export const boxLogo = styled.View`
   width: 100%;
   height: ${Hight * 0.4}px;
   align-items: center;
   justify-content: center;
`;

export const title = styled.Text`
   font-size: ${fontSize.xg}px;
   font-family: ${fonts.rBold};
   color: ${cor.orange[1]};
   margin-bottom: 20px;
`;

export const boxForgotPass = styled.TouchableOpacity`
   width: 100%;
`;

export const forgotPass = styled.Text`
   font-size: ${fontSize.sm}px;
   color: ${cor.light[1]};
   font-family: ${fonts.rBold};
`;
