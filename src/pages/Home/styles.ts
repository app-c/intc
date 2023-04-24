import styled from 'styled-components/native';
import { titleSize, w, Hight } from '../../utils/size';
import { fonts } from '../../theme/fonts';
import { cor } from '../../theme';

export const Container = styled.View`
   flex: 1;
   width: 100%;
   padding: ${Hight * 0.02}px;
`;

export const content = styled.View`
   margin-top: ${Hight * 0.1}px;
`;

export const grid = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;
export const title = styled.Text`
   font-size: ${titleSize}px;
   font-weight: 600;
   font-family: ${fonts.rRgular};
   color: ${cor.dark[1]};
`;

export const trofeu = styled.Image`
   width: ${Hight * 0.23}px;
   height: ${Hight * 0.23}px;

   align-self: center;
   margin-top: ${Hight * 0.03}px;
`;

export const box = styled.View`
   margin-top: 20px;
`;
