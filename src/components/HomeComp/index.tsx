import React from 'react';
import * as S from './styles';

interface props {
   title: string;
   text: string;
}

export function HomeComp() {
   return (
      <S.Container>
         <S.grid>
            <S.title>Sua Colocação Brasil</S.title>
            <S.text>25º</S.text>
         </S.grid>

         <S.grid>
            <S.title>Sua Colocação SP</S.title>
            <S.text>1º</S.text>
         </S.grid>

         <S.line />

         <S.grid>
            <S.title>Seu Status</S.title>
            <S.text>Gerente Pleno</S.text>
         </S.grid>

         <S.line />

         <S.grid>
            <S.title>Contratos Março</S.title>
            <S.text>5</S.text>
         </S.grid>

         <S.grid>
            <S.title>Contratos 2023</S.title>
            <S.text>230</S.text>
         </S.grid>

         <S.grid>
            <S.title>Sua carteira</S.title>
            <S.text>50</S.text>
         </S.grid>

         <S.grid>
            <S.title>Projetos</S.title>
            <S.text>0</S.text>
         </S.grid>
      </S.Container>
   );
}
