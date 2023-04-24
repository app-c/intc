import React from 'react';
import * as S from './styles';

interface props {
   donwline: string;
}

export function DownlineComp({ donwline }: props) {
   return (
      <S.Container>
         <S.content>
            <S.title>Donwline {donwline}</S.title>
            <S.grid>
               <S.title>NOME</S.title>
               <S.title>META</S.title>
            </S.grid>

            <S.grid>
               <S.box>
                  <S.subTitle>MARIA</S.subTitle>
               </S.box>
               <S.subTitle>GJ</S.subTitle>
               <S.subTitle>35,50%</S.subTitle>
            </S.grid>

            <S.line />

            <S.grid>
               <S.box>
                  <S.subTitle>MARIA</S.subTitle>
               </S.box>
               <S.subTitle>GJ</S.subTitle>
               <S.subTitle>35,50%</S.subTitle>
            </S.grid>

            <S.line />

            <S.grid>
               <S.box>
                  <S.subTitle>MARIA</S.subTitle>
               </S.box>
               <S.subTitle>GJ</S.subTitle>
               <S.subTitle>35,50%</S.subTitle>
            </S.grid>

            <S.line />

            <S.grid>
               <S.box>
                  <S.subTitle>MARIA</S.subTitle>
               </S.box>
               <S.subTitle>GJ</S.subTitle>
               <S.subTitle>35,50%</S.subTitle>
            </S.grid>

            <S.line />
         </S.content>
      </S.Container>
   );
}
