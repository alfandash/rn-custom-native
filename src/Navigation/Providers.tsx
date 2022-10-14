import { NativeBaseProvider } from 'native-base';
import { Routes } from './Routes';
import { AuthProvider } from '@Store/AuthStore';

export const Providers = () => {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </AuthProvider>
  );
};
