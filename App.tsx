import { AppStateWrapper, appInitialState } from './src/store';
import { RegisterAllScreen } from './src/routes';

export default function App() {
  const appStateWrapperProps = {
    initialState: {
      ...appInitialState,
    },
  };

  return (
    <AppStateWrapper {...appStateWrapperProps}>
      {RegisterAllScreen()}
    </AppStateWrapper>
  );
}
