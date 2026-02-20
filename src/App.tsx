import { useState } from 'react';
import { Box } from '@mui/material';
import { LoginScreen } from './screens/Login/LoginScreen';
import { OnboardingContainer } from './screens/Onboarding/OnboardingContainer';
import { ManagementContainer, type ManagementView } from './screens/Management/ManagementContainer';


type AppState = 'login' | 'onboarding' | 'management';

function App() {
  const [state, setState] = useState<AppState>('login');
  const [initialView, setInitialView] = useState<ManagementView>('dashboard');

  const renderContent = () => {
    switch (state) {
      case 'login':
        return <LoginScreen onLogin={() => setState('onboarding')} />;
      case 'onboarding':
        return (
          <OnboardingContainer
            onFinish={() => {
              setInitialView('dashboard');
              setState('management');
            }}
            onInvite={() => {
              setInitialView('session-form');
              setState('management');
            }}
          />
        );
      case 'management':
        return (
          <ManagementContainer
            onLogout={() => setState('login')}
            initialView={initialView}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      {renderContent()}
    </Box>
  );
}

export default App;
