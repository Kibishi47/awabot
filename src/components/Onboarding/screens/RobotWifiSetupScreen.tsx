import { Typography, Box, MenuItem, Stack } from '@mui/material';
import { Button } from '../../Button';
import { TextField } from '../../TextField';
import { ScreenLayout } from '../ScreenLayout';

interface RobotWifiSetupScreenProps {
    onNext: () => void;
    onBack: () => void;
}

export const RobotWifiSetupScreen = ({ onNext, onBack }: RobotWifiSetupScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="caption"
                    sx={{
                        color: 'accent-medium',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        display: 'block',
                        mb: 1
                    }}
                >
                    étape 2
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Connexion au réseau Wifi
                </Typography>
            </Box>

            <Stack spacing={3} sx={{ mb: 6 }}>
                <Box>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>
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
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>
                        Mot de passe Wifi
                    </Typography>
                    <TextField
                        type="password"
                        placeholder="Entrez votre mot de passe"
                        fullWidth
                    />
                </Box>
            </Stack>

            <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2 }}>
                Suivant
            </Button>
        </ScreenLayout>
    );
};
