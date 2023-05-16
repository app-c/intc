import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';
import { cor } from '../../theme';
import { textSize } from '../../utils/size';
import { fonts } from '../../theme/fonts';

interface Props {
   isError: boolean;
   isFocus: boolean;
}

export const BoxContainer = styled.View`
   width: 100%;
`;

export const Title = styled.Text`
   color: ${cor.dark[1]};
   margin-left: 8px;
   margin-bottom: 4px;
   font-size: ${textSize}px;
   font-family: ${fonts.rRgular};
`;

export const Box = styled.View<Props>`
   padding: 5px 10px;
   background-color: ${cor.light[2]};

   width: 100%;
   height: 45px;
   border-width: 1px;
   justify-content: center;
   margin-bottom: 16px;
   flex-direction: row;
   border-radius: 3px;
   border-color: ${cor.gray[1]};
   ${({ isError }) =>
      isError &&
      css`
         border-width: 3px;
      `}
   ${({ isFocus }) =>
      isFocus &&
      css`
         border-width: 2px;
         border-color: ${cor.orange[1]};
      `};
`;

export const Container = styled.TextInput`
   flex: 1;
   font-size: ${textSize}px;
   color: ${cor.gray[3]};
   font-family: ${fonts.bold};
`;

export const Icon = styled(Feather)`
   margin-right: 14px;
   align-self: center;
`;
