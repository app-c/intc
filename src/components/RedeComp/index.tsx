import React from 'react';
import * as S from './styles';

type Select = 'N1' | 'N2' | 'N3';

interface props {
   select: (type: Select) => void;
   selected: Select;
}

export function RedeCom({ select, selected }: props) {
   return (
      <S.Container>
         <S.content>
            <S.title>Sua rede</S.title>

            <S.grid selected={selected === 'N1'} onPress={() => select('N1')}>
               <S.text>Donwline N1</S.text>
               <S.text>10</S.text>
            </S.grid>

            <S.line />

            <S.grid selected={selected === 'N2'} onPress={() => select('N2')}>
               <S.text>Donwline N2</S.text>
               <S.text>10</S.text>
            </S.grid>

            <S.line />

            <S.grid selected={selected === 'N3'} onPress={() => select('N3')}>
               <S.text>Donwline N3</S.text>
               <S.text>10</S.text>
            </S.grid>

            <S.line />
         </S.content>
      </S.Container>
   );
}
