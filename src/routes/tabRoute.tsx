import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Home } from '../pages/Home';
import { Drawer } from './drawer';
import { cor } from '../theme';
import { Status } from '../pages/Status';
import { Stack } from './stack';

const S = createBottomTabNavigator();

export function Tab() {
   return (
      <S.Navigator
         screenOptions={{
            headerTransparent: true,
            tabBarActiveTintColor: cor.orange[3],
            tabBarInactiveTintColor: cor.light[4],
            headerShown: false,
            tabBarStyle: {
               backgroundColor: cor.blue[4],
               alignContent: 'center',
               padding: 5,
               height: 60,
            },
         }}
      >
         <S.Screen
            options={{
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
               ),
            }}
            name="Home"
            component={Drawer}
         />
         <S.Screen
            options={{
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name="ribbon-sharp" color={color} size={size} />
               ),
            }}
            name="Status"
            component={Status}
         />

         <S.Screen
            options={{
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name="ios-git-branch" color={color} size={size} />
               ),
            }}
            name="Rede"
            component={Stack}
         />
      </S.Navigator>
   );
}
