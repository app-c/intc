import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Rede } from '../pages/Rede';

const S = createNativeStackNavigator();

export function Stack() {
   return (
      <S.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <S.Screen name="rede" component={Rede} />
      </S.Navigator>
   );
}
