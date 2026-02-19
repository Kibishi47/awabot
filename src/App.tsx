import { useState } from 'react';
import { Box } from '@mui/material';
import { LoginScreen } from './screens/Login/LoginScreen';
import { OnboardingContainer } from './screens/Onboarding/OnboardingContainer';
import { ManagementContainer } from './screens/Management/ManagementContainer';

type AppState = 'login' | 'onboarding' | 'management';

function App() {
  const [state, setState] = useState<AppState>('login');

  const renderContent = () => {
    switch (state) {
      case 'login':
        return <LoginScreen onLogin={() => setState('onboarding')} />;
      case 'onboarding':
        return <OnboardingContainer onFinish={() => setState('management')} />;
      case 'management':
        return <ManagementContainer onLogout={() => setState('login')} />;
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
