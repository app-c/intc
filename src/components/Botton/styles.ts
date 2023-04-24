import styled from 'styled-components/native';
import { w, Hight, textSize } from '../../utils/size';
import { cor } from '../../theme';

export const Container = styled.View`
   align-self: flex-end;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;

   background-color: ${cor.blue[3]};
   width: ${w}px;
   height: ${w * 0.15}px;
   padding: 10px 15px;
`;

export const title = styled.Text`
   font-size: ${textSize}px;
   color: ${cor.orange[2]};
`;

export const touch = styled.TouchableOpacity``;
