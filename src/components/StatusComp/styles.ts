import styled from 'styled-components/native';
import { textSize, titleSize, w } from '../../utils/size';
import { fonts } from '../../theme/fonts';
import { cor } from '../../theme';

export const Container = styled.View``;

export const title = styled.Text`
   font-size: ${titleSize}px;
   font-weight: 500;
   font-family: ${fonts.rBold};
`;

export const text = styled.Text`
   font-size: ${textSize}px;
   font-weight: 500;
   font-family: ${fonts.rRgular};
`;

export const grid = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding: 3px 0;
`;

export const gridStatus = styled.View`
   flex-direction: row;
   padding: 10px 0;
   margin: 8px 0;
   align-items: center;
   justify-content: space-between;

   border-right-color: #fff;
   border-left-color: #fff;

   border-style: dotted;
   border-width: 2px;
`;

export const line = styled.View`
   width: 100%;
   height: 1px;
   border-width: 0.8px;
   border-style: dashed;
   margin: 8px 0;
`;
export const box = styled.View`
   width: ${w * 0.28}px;
`;
