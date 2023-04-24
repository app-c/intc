import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../pages/Home';
import { cor } from '../theme';
import { Treinamento } from '../pages/Treinamento';
import { Premio } from '../pages/Premio';
import { Perfil } from '../pages/Perfil';

const S = createDrawerNavigator();

export function Drawer() {
   return (
      <S.Navigator
         screenOptions={{
            headerTintColor: cor.blue[4],
            headerTransparent: true,
         }}
      >
         <S.Screen name="HOME" component={Home} />
         <S.Screen name="UNIVERSIDADE" component={Treinamento} />
         <S.Screen name="PRÊMIOS" component={Premio} />
         <S.Screen name="PERFIL" component={Perfil} />
      </S.Navigator>
   );
}
