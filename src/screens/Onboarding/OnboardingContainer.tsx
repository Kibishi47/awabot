import { useState } from 'react';
import { Box } from '@mui/material';
import { RobotSuccessScreen } from './RobotSuccessScreen';
import { RobotStep1Screen } from './RobotStep1Screen';
import { RobotConnectAPScreen } from './RobotConnectAPScreen';
import { RobotWifiSetupScreen } from './RobotWifiSetupScreen';


// Re-using but simplifying the steps
export type OnboardingStep =
    | 'power'            // Etape 1 : allumer le robot
    | 'connect-ap'       // Etape 2 : Connexion au réseau WiFi du robot
    | 'config-wifi'      // Etape 3 : Renseigner les informations WiFi pour que le robot s'y connecte
    | 'success';         // Etape 4 : Félicitation

interface OnboardingContainerProps {
    onFinish: () => void;
    onInvite?: () => void;
    onBack?: () => void;
    isManagement?: boolean;
}


export const OnboardingContainer = ({ onFinish, onInvite, onBack, isManagement = false }: OnboardingContainerProps) => {

    const [history, setHistory] = useState<OnboardingStep[]>(['power']);

    const currentStep = history[history.length - 1];

    const goTo = (step: OnboardingStep) => setHistory(prev => [...prev, step]);
    const goBack = () => {
        if (history.length > 1) {
            setHistory(prev => prev.slice(0, -1));
        } else if (onBack) {
            onBack();
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 'power':
                return <RobotStep1Screen
                    onNext={() => goTo('connect-ap')}
                    onBack={isManagement ? onBack : undefined}
                />;

            case 'connect-ap':
                return <RobotConnectAPScreen
                    onNext={() => goTo('config-wifi')}
                    onBack={goBack}
                />;


            case 'config-wifi':
                return <RobotWifiSetupScreen
                    onNext={() => goTo('success')}
                    onBack={goBack}
                />;

            case 'success':
                return <RobotSuccessScreen
                    onFinish={onFinish}
                    onInvite={onInvite || onFinish}
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
