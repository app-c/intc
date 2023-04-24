import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import * as S from './styles';
import { RedeCom } from '../../components/RedeComp';
import { DownlineComp } from '../../components/DownlineComp';

type Select = 'N1' | 'N2' | 'N3';

export function Rede() {
   const [selec, setSelect] = React.useState<Select>('N1');

   return (
      <S.Container>
         <ScrollView>
            <RedeCom selected={selec} select={h => setSelect(h)} />

            {selec === 'N1' && <DownlineComp donwline={selec} />}
            {selec === 'N2' && <DownlineComp donwline={selec} />}
            {selec === 'N3' && <DownlineComp donwline={selec} />}
         </ScrollView>
      </S.Container>
   );
}
