import { Typography, Stack, Box } from '@mui/material';
import { Button } from '../../Button';
import { ScreenLayout } from '../ScreenLayout';

interface AuthSuccessScreenProps {
    onOrg: () => void;
    onRobot: () => void;
    onBack: () => void;
}

export const AuthSuccessScreen = ({ onOrg, onRobot, onBack }: AuthSuccessScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Votre compte a bien été créé !
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(37, 37, 37, 0.6)', fontSize: '1.25rem' }}>
                    Êtes-vous une organisation ?
                </Typography>
            </Box>

            <Stack spacing={2} sx={{ width: '100%' }}>
                <Button designVariant="gradient" onClick={onOrg} fullWidth sx={{ py: 2 }}>
                    Oui, créer mon organisation
                </Button>
                <Button designVariant="secondary" onClick={onRobot} fullWidth sx={{ py: 2 }}>
                    Non, connecter un robot
                </Button>
            </Stack>
        </ScreenLayout>
    );
};
