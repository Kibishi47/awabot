import { Typography, Box } from '@mui/material';
import { StepLabel } from '../../components/Onboarding/StepLabel';
import { Button } from '../../components/Button';
import { ScreenLayout } from '../../components/Onboarding/ScreenLayout';

interface RobotConnectAPScreenProps {
    onNext: () => void;
    onBack?: () => void;
}

export const RobotConnectAPScreen = ({ onNext, onBack }: RobotConnectAPScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ mb: 4 }}>
                        <StepLabel step={2} />
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral.noir', fontSize: '24px' }}>
                            Connexion au réseau Wifi du robot
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4
                    }}>
                        <Box
                            component="img"
                            src="/wifi-settings.png"
                            alt="Wifi Settings Instructions"
                            sx={{
                                maxWidth: '100%',
                                maxHeight: '300px',
                                objectFit: 'contain'
                            }}
                        />
                    </Box>
                </Box>

                <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2, mt: 'auto' }}>
                    Je suis connecté au robot
                </Button>
            </Box>
        </ScreenLayout>
    );
};
