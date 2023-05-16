/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
   ButtonProps,
   ActivityIndicator,
   TouchableOpacityProps,
} from 'react-native';
import * as S from './styles';
import { cor } from '../../theme';
import { fontSize } from '../../utils/size';

interface IProps extends TouchableOpacityProps {
   title: string;
   load: boolean;
}

export function Button({ title, load, ...rest }: IProps) {
   return (
      <S.Container disabled={load} activeOpacity={0.5} {...rest}>
         {load ? (
            <ActivityIndicator color={cor.light[1]} size={fontSize.eg} />
         ) : (
            <S.title>{title}</S.title>
         )}
      </S.Container>
   );
}
