import { NavigationContainer } from '@react-navigation/native';
import { UserRouter } from './UserRouter';

export const Routes = () => {
  const renderRouter = () => {
    const routers = {
      user: <UserRouter />,
    };

    return routers.user;
  };
  return <NavigationContainer>{renderRouter()}</NavigationContainer>;
};
