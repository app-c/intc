import React from 'react';
import { View } from 'react-native';
import * as S from './styles';
import { StatusComp } from '../../components/StatusComp';

export function Status() {
   return (
      <S.Container>
         <S.content>
            <StatusComp />
         </S.content>
      </S.Container>
   );
}
