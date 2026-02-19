import { useState } from 'react';
import { Box } from '@mui/material';
import { ScreenLayout } from '../../components/Onboarding/ScreenLayout';
import { RobotStep1Screen } from './RobotStep1Screen';
import { RobotWifiSetupScreen } from './RobotWifiSetupScreen';
import { RobotSuccessScreen } from './RobotSuccessScreen';
import { Typography } from '@mui/material';
import { Button } from '../../components/Button';

// Re-using but simplifying the steps
export type OnboardingStep =
    | 'power'            // Etape 1 : allumer le robot
    | 'connect-ap'       // Etape 2 : Connexion au réseau WiFi du robot
    | 'config-wifi'      // Etape 3 : Renseigner les informations WiFi pour que le robot s'y connecte
    | 'success';         // Etape 4 : Félicitation

interface OnboardingContainerProps {
    onFinish: () => void;
    onBack?: () => void;
    isManagement?: boolean;
}

export const OnboardingContainer = ({ onFinish, onBack, isManagement = false }: OnboardingContainerProps) => {
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
                // For Step 2, we can reuse the first half of WiFi setup or create a specialized one.
                // Let's use a simplified version of RobotWifiSetupScreen logic
                return (
                    <ScreenLayout onBack={goBack}>
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h1" sx={{ fontSize: '32px', fontWeight: 700, color: 'neutral.noir', mb: 2 }}>
                                Étape 2 : Connexion au robot
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: 'neutral.noir', opacity: 0.8 }}>
                                Veuillez vous connecter au réseau WiFi émis par le robot (ex: Beam-XXXX) depuis les réglages de votre appareil.
                            </Typography>
                        </Box>
                        {/* Placeholder for scanning/status */}
                        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ p: 4, bgcolor: 'white', borderRadius: '20px', textAlign: 'center', width: '100%' }}>
                                <Typography sx={{ fontWeight: 700, color: 'accent.dark' }}>Recherche du robot...</Typography>
                            </Box>
                        </Box>
                        <Button fullWidth onClick={() => goTo('config-wifi')} sx={{ mt: 4 }}>
                            Je suis connecté au robot
                        </Button>
                    </ScreenLayout>
                );

            case 'config-wifi':
                return <RobotWifiSetupScreen
                    onNext={() => goTo('success')}
                    onBack={goBack}
                />;

            case 'success':
                return <RobotSuccessScreen
                    onFinish={onFinish}
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
