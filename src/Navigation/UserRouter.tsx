import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-eva-icons';

import DeviceIdScreen from '@Screens/userScreens/deviceId';
import PogressScreen from '@Screens/userScreens/progress';
import { ExampleStackRouter } from './StackRouter';

const Tab = createBottomTabNavigator();

export const UserRouter = () => {
  return (
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
        name="StackTab"
        component={ExampleStackRouter}
        options={{
          tabBarLabel: 'Stack',
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
  );
};
