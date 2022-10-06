import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { Icon } from 'react-native-eva-icons';

import DeviceIdScreen from './screens/deviceId';
import CartScreen from './screens/cart';
import PogressScreen from './screens/progress';
import CheckoutScreen from './screens/checkout';
import { CartStackParamList } from '@types';

const CartStack = createNativeStackNavigator<CartStackParamList>();

const CartStackScreen = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <CartStack.Screen name="Checkout" component={CheckoutScreen} />
    </CartStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export const RegisterAllScreen = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="DeviceIdTab"
            component={DeviceIdScreen}
            options={{
              title: 'Device Id',
              tabBarIcon: ({ color }) => (
                <Icon fill={color} name="hash-outline" width={20} height={20} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="CartTab"
            component={CartStackScreen}
            options={{
              tabBarLabel: 'Cart',
              tabBarIcon: ({ color }) => (
                <Icon
                  fill={color}
                  name="shopping-cart-outline"
                  width={22}
                  height={22}
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="ProgressTab"
            component={PogressScreen}
            options={{
              tabBarLabel: 'Progress Bar',
              tabBarIcon: ({ color }) => (
                <Icon
                  fill={color}
                  name="rewind-right-outline"
                  width={16}
                  height={16}
                />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
