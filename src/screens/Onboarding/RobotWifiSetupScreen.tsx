import { Typography, Box, MenuItem, Stack } from '@mui/material';
import { StepLabel } from '../../components/Onboarding/StepLabel';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';
import { ScreenLayout } from '../../components/Onboarding/ScreenLayout';

interface RobotWifiSetupScreenProps {
    onNext: () => void;
    onBack?: () => void;
}

export const RobotWifiSetupScreen = ({ onNext, onBack }: RobotWifiSetupScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ mb: 6 }}>
                        <StepLabel step={3} />

                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral.noir', fontSize: '24px' }}>
                            Connexion au réseau Wifi
                        </Typography>
                    </Box>

                    <Stack spacing={3} sx={{ mb: 6 }}>
                        <Box>
                            <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral.noir' }}>
                                Choix du réseau
                            </Typography>
                            <TextField
                                select
                                defaultValue=""
                                fullWidth
                            >
                                <MenuItem value="wifi1">Freebox_1234</MenuItem>
                                <MenuItem value="wifi2">Awabot_Internal</MenuItem>
                                <MenuItem value="wifi3">Guest_Network</MenuItem>
                            </TextField>
                        </Box>

                        <Box>
                            <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral.noir' }}>
                                Mot de passe Wifi
                            </Typography>
                            <TextField
                                type="password"
                                placeholder="Entrez votre mot de passe"
                                fullWidth
                            />
                        </Box>
                    </Stack>
                </Box>

                <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2, mt: 'auto' }}>
                    Terminer
                </Button>
            </Box>
        </ScreenLayout>
    );
};
