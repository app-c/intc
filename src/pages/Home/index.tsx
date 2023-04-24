import React from 'react';
import moment from 'moment';
import * as S from './styles';

import trofeu from '../../assets/trofeu.png';
import { HomeComp } from '../../components/HomeComp';

export function Home() {
   moment.locale();
   console.log(moment('2023-07-04').locale('pt-br').fromNow());
   return (
      <S.Container>
         <S.content>
            <S.grid>
               <S.title>Participantes Brasil</S.title>
               <S.title>500</S.title>
            </S.grid>

            <S.grid>
               <S.title>Participantes SP</S.title>
               <S.title>150</S.title>
            </S.grid>
         </S.content>
         <S.trofeu resizeMode="contain" source={trofeu} />

         <S.box>
            <HomeComp />
         </S.box>
      </S.Container>
   );
}
