import styled from 'styled-components/native';
import { Hight, fontSize } from '../../utils/size';
import { cor } from '../../theme';
import { fonts } from '../../theme/fonts';

export const Container = styled.TouchableOpacity`
   width: 100%;
   padding: 5px 10px;
   height: ${Hight * 0.06}px;
   background-color: ${cor.orange[1]};

   align-items: center;
   justify-content: center;
   border-radius: 5px;
`;

export const title = styled.Text`
   font-size: ${fontSize.xg}px;
   color: ${cor.blue[5]};
   font-family: ${fonts.rBold};
`;
