import { NavigationContainer } from '@react-navigation/native';
import { Tab } from './tabRoute';
import { LogIn } from '../pages/LogIn';

export function Route() {
   return (
      <NavigationContainer>
         {/* <Tab /> */}
         <LogIn />
      </NavigationContainer>
   );
}
