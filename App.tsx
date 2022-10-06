import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Icon } from 'native-base';

import DeviceIdScreen from './src/screens/deviceId';
import CartScreen from './src/screens/cart';
import PogressScreen from './src/screens/progress';
import CheckoutScreen from './src/screens/checkout';
import { AppStateWrapper, appInitialState } from './src/store';
import { CartStackParamList } from '@types';

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator<CartStackParamList>();

function CartStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Cart" component={CartScreen} />
      <SettingsStack.Screen name="Checkout" component={CheckoutScreen} />
    </SettingsStack.Navigator>
  );
}

export default function App() {
  const appStateWrapperProps = {
    initialState: {
      ...appInitialState,
    },
  };

  return (
    <AppStateWrapper {...appStateWrapperProps}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="DeviceIdTab"
              component={DeviceIdScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="device-id" style={{ backgroundColor: color }} />
                ),
              }}
            />
            <Tab.Screen
              name="CartTab"
              component={CartStackScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="cart" style={{ backgroundColor: color }} />
                ),
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="ProgressTab"
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
    </AppStateWrapper>
  );
}
