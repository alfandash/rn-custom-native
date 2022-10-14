import { NativeBaseProvider } from 'native-base';
import { Routes } from './Routes';
import { AppStateWrapper, appInitialState } from '@Store';

export const Providers = () => {
  const appStateWrapperProps = {
    initialState: {
      ...appInitialState,
    },
  };

  return (
    <AppStateWrapper {...appStateWrapperProps}>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </AppStateWrapper>
  );
};
