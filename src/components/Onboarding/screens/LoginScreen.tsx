import { Typography, Box, Stack } from '@mui/material';
import { Button } from '../../Button';
import { TextField } from '../../TextField';
import { ScreenLayout } from '../ScreenLayout';

interface LoginScreenProps {
    onNext: () => void;
    onBack: () => void;
}

export const LoginScreen = ({ onNext, onBack }: LoginScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Connectez-vous à votre compte Awabot
                </Typography>
            </Box>

            <Stack spacing={3} sx={{ mb: 6 }}>
                <Box>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>Adresse email</Typography>
                    <TextField placeholder="jean.dupont@exemple.com" />
                </Box>
                <Box>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>Mot de passe</Typography>
                    <TextField type="password" placeholder="••••••••" />
                </Box>
            </Stack>

            <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2 }}>
                Suivant
            </Button>
        </ScreenLayout>
    );
};
