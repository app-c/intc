import styled from 'styled-components/native';
import { Hight, w } from '../../utils/size';
import { cor } from '../../theme';
import { fonts } from '../../theme/fonts';

export const Container = styled.View`
   margin-top: 20px;
`;

export const title = styled.Text`
   font-size: ${Hight * 0.025}px;
   font-family: ${fonts.rBold};
`;

export const subTitle = styled.Text`
   font-size: ${Hight * 0.02}px;
   font-family: ${fonts.rRgular};
`;

export const content = styled.View`
   width: 100%;
   border-radius: 10px;

   margin-top: ${Hight * 0.02}px;
`;

export const grid = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin: 10px 0;
   border-radius: 5px;
`;

export const line = styled.View`
   width: 100%;
   height: 1px;
   border-width: 0.8px;
   border-style: dashed;
`;

export const box = styled.View`
   width: ${w * 0.25}px;
`;
