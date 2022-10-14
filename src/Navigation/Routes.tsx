import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { authContext } from '@Store';
import { UserRouter } from './UserRouter';
import { AuthRouter } from './AuthRouter';

export const Routes = () => {
  const { userInfo } = useContext(authContext);
  console.log(userInfo);
  const renderRouter = () => {
    const routers = {
      user: <UserRouter />,
    };

    return userInfo ? routers.user : <AuthRouter />;
  };
  return <NavigationContainer>{renderRouter()}</NavigationContainer>;
};
