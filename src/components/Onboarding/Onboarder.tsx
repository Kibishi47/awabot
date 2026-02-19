import { useState } from 'react';
import { Box } from '@mui/material';
import { IntroScreen } from './screens/IntroScreen';
import { LoginDecisionScreen } from './screens/LoginDecisionScreen';
import { LanguageScreen } from './screens/LanguageScreen';
import { RobotStep1Screen } from './screens/RobotStep1Screen';
import { RobotWifiSetupScreen } from './screens/RobotWifiSetupScreen';
import { AuthWelcomeScreen } from './screens/AuthWelcomeScreen';
import { SignupScreen } from './screens/SignupScreen';
import { VerificationScreen } from './screens/VerificationScreen';
import { LoginScreen } from './screens/LoginScreen';
import { AuthSuccessScreen } from './screens/AuthSuccessScreen';
import { OrgNameScreen } from './screens/OrgNameScreen';
import { OrgSirenScreen } from './screens/OrgSirenScreen';
import { OrgAddressScreen } from './screens/OrgAddressScreen';
import { OrgManagerScreen } from './screens/OrgManagerScreen';
import { OrgSuccessScreen } from './screens/OrgSuccessScreen';
import { RobotNameScreen } from './screens/RobotNameScreen';
import { RobotCodeScreen } from './screens/RobotCodeScreen';
import { RobotSafetyScreen } from './screens/RobotSafetyScreen';
import { RobotSuccessScreen } from './screens/RobotSuccessScreen';

export type Step =
    | 'intro'
    | 'login-decision'
    | 'tutorial-lang'
    | 'tutorial-step1'
    | 'tutorial-wifi-setup'
    | 'auth-welcome'
    | 'auth-signup'
    | 'auth-verify'
    | 'auth-login'
    | 'auth-success'
    | 'org-name'
    | 'org-siren'
    | 'org-address'
    | 'org-manager'
    | 'org-success'
    | 'robot-name'
    | 'robot-code'
    | 'robot-safety'
    | 'robot-success';

export const Onboarder = () => {
    const [history, setHistory] = useState<Step[]>(['intro']);

    const currentStep = history[history.length - 1];

    const goTo = (step: Step) => {
        setHistory(prev => [...prev, step]);
    };

    const goBack = () => {
        if (history.length > 1) {
            setHistory(prev => prev.slice(0, -1));
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 'intro': return <IntroScreen onNext={() => goTo('login-decision')} />;
            case 'login-decision': return <LoginDecisionScreen
                onTutorial={() => goTo('tutorial-lang')}
                onManage={() => goTo('auth-login')}
            />;
            case 'tutorial-lang': return <LanguageScreen
                onNext={() => goTo('tutorial-step1')}
                onBack={goBack}
            />;
            case 'tutorial-step1': return <RobotStep1Screen
                onNext={() => goTo('tutorial-wifi-setup')}
                onBack={goBack}
            />;
            case 'tutorial-wifi-setup': return <RobotWifiSetupScreen
                onNext={() => goTo('auth-welcome')}
                onBack={goBack}
            />;
            case 'auth-welcome': return <AuthWelcomeScreen
                onNext={() => goTo('auth-signup')}
                onLogin={() => goTo('auth-login')}
                onBack={goBack}
            />;
            case 'auth-signup': return <SignupScreen
                onNext={() => goTo('auth-verify')}
                onBack={goBack}
            />;
            case 'auth-verify': return <VerificationScreen
                onNext={() => goTo('auth-success')}
                onBack={goBack}
            />;
            case 'auth-login': return <LoginScreen
                onNext={() => goTo('auth-success')}
                onBack={goBack}
            />;
            case 'auth-success': return <AuthSuccessScreen
                onOrg={() => goTo('org-name')}
                onRobot={() => goTo('robot-name')}
                onBack={goBack}
            />;
            case 'org-name': return <OrgNameScreen
                onNext={() => goTo('org-siren')}
                onBack={goBack}
            />;
            case 'org-siren': return <OrgSirenScreen
                onNext={() => goTo('org-address')}
                onBack={goBack}
            />;
            case 'org-address': return <OrgAddressScreen
                onNext={() => goTo('org-manager')}
                onBack={goBack}
            />;
            case 'org-manager': return <OrgManagerScreen
                onNext={() => goTo('org-success')}
                onBack={goBack}
            />;
            case 'org-success': return <OrgSuccessScreen
                onConnect={() => goTo('robot-name')}
                onLater={() => console.log('Finish')}
                onBack={goBack}
            />;
            case 'robot-name': return <RobotNameScreen
                onNext={() => goTo('robot-code')}
                onBack={goBack}
            />;
            case 'robot-code': return <RobotCodeScreen
                onNext={() => goTo('robot-safety')}
                onBack={goBack}
            />;
            case 'robot-safety': return <RobotSafetyScreen
                onNext={() => goTo('robot-success')}
                onBack={goBack}
            />;
            case 'robot-success': return <RobotSuccessScreen
                onFinish={() => console.log('Finish')}
            />;
            default: return null;
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'var(--color-accent-light)' }}>
            {renderStep()}
        </Box>
    );
};
