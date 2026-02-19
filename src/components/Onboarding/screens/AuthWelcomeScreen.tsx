import { Typography, Stack, Box } from '@mui/material';
import { Button } from '../../Button';
import { ScreenLayout } from '../ScreenLayout';

interface AuthWelcomeScreenProps {
    onNext: () => void;
    onLogin: () => void;
    onBack: () => void;
}

export const AuthWelcomeScreen = ({ onNext, onLogin, onBack }: AuthWelcomeScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    L’équipe Awabot vous souhaite la bienvenue !
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(37, 37, 37, 0.6)', fontSize: '1.25rem' }}>
                    Avez-vous déjà un compte Awabot ?
                </Typography>
            </Box>

            <Stack spacing={2} sx={{ width: '100%' }}>
                <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2 }}>
                    Non, je crée mon compte
                </Button>
                <Button designVariant="secondary" onClick={onLogin} fullWidth sx={{ py: 2 }}>
                    Oui, je me connecte
                </Button>
            </Stack>
        </ScreenLayout>
    );
};
