import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider, Icon } from 'native-base';

import DeviceIdScreen from './src/screens/deviceId';
import CartScreen from './src/screens/cart';
import PogressScreen from './src/screens/progress';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Device Id"
            component={DeviceIdScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="device-id" style={{ backgroundColor: color }} />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="cart" style={{ backgroundColor: color }} />
              ),
            }}
          />
          <Tab.Screen
            name="Progress"
            component={PogressScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="progress" style={{ backgroundColor: color }} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
