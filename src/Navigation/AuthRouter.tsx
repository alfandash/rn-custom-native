import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DummyScreen from '@Screens/dummy';

const Stack = createNativeStackNavigator();

export const AuthRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        options={{
          headerTitle: 'Sign In',
        }}
        name="Login"
        component={DummyScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Register',
        }}
        name="Register"
        component={DummyScreen}
      />
    </Stack.Navigator>
  );
};
