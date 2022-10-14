import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CartScreen from '@Screens/cart';
import CheckoutScreen from '@Screens/checkout';
import { CartStackParamList } from '@types';

const CartStack = createNativeStackNavigator<CartStackParamList>();

export const CartRouter = () => {
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
