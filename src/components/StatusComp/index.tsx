import React from 'react';
import * as S from './styles';

interface props {
   title: string;
   text: string;
}

export function StatusComp() {
   return (
      <S.Container>
         <S.grid>
            <S.box>
               <S.title>STATUS</S.title>
            </S.box>
            <S.title>CLIENTES</S.title>
            <S.title>SUA REDE</S.title>
         </S.grid>

         <S.line />

         <S.grid>
            <S.box>
               <S.text>Trainee</S.text>
            </S.box>
            <S.text>0</S.text>
            <S.text>17</S.text>
         </S.grid>

         <S.line />

         <S.grid>
            <S.box>
               <S.text>Executivo</S.text>
            </S.box>
            <S.text>0</S.text>
            <S.text>17</S.text>
         </S.grid>

         <S.line />

         <S.grid>
            <S.box>
               <S.text>Gerente Junior</S.text>
            </S.box>
            <S.text>0</S.text>
            <S.text>17</S.text>
         </S.grid>

         <S.line />

         <S.grid>
            <S.box>
               <S.text>Gerente Pleno</S.text>
            </S.box>
            <S.text>0</S.text>
            <S.text>17</S.text>
         </S.grid>

         <S.line />

         <S.grid>
            <S.box>
               <S.text>Gerente Sênior</S.text>
            </S.box>
            <S.text>0</S.text>
            <S.text>17</S.text>
         </S.grid>

         <S.line />

         <S.grid>
            <S.box>
               <S.text>Diretor Junior</S.text>
            </S.box>
            <S.text>0</S.text>
            <S.text>17</S.text>
         </S.grid>

         <S.line />

         <S.grid>
            <S.box>
               <S.text>Diretor Pleno</S.text>
            </S.box>
            <S.text>0</S.text>
            <S.text>17</S.text>
         </S.grid>

         <S.line />

         <S.grid>
            <S.box>
               <S.text>Diretor Sênior</S.text>
            </S.box>
            <S.text>0</S.text>
            <S.text>17</S.text>
         </S.grid>

         <S.line />

         <S.grid>
            <S.text>Master Franquedo</S.text>
         </S.grid>
      </S.Container>
   );
}
