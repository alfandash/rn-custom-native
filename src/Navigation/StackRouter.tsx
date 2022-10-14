import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DummyScreen from '@Screens/dummy';
import { ExampleStackParamList } from '@types';

const ExampleStack = createNativeStackNavigator<ExampleStackParamList>();

export const ExampleStackRouter = () => {
  return (
    <ExampleStack.Navigator>
      <ExampleStack.Screen
        name="Dummy1"
        component={DummyScreen}
        options={{ headerShown: false }}
      />
      <ExampleStack.Screen name="Dummy2" component={DummyScreen} />
    </ExampleStack.Navigator>
  );
};
