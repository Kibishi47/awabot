import { Typography, Box, Stack } from '@mui/material';
import { Button } from '../../Button';
import { ScreenLayout } from '../ScreenLayout';

interface RobotSuccessScreenProps {
    onFinish: () => void;
}

export const RobotSuccessScreen = ({ onFinish }: RobotSuccessScreenProps) => {
    return (
        <ScreenLayout>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Votre robot est connecté !
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(37, 37, 37, 0.6)', fontSize: '1.25rem', lineHeight: 1.4 }}>
                    Vous pouvez lancer un session maintenant ou plus tard depuis la plateforme de votre organisation.
                </Typography>
            </Box>

            <Stack spacing={2} sx={{ width: '100%' }}>
                <Button designVariant="gradient" onClick={onFinish} fullWidth sx={{ py: 2 }}>
                    Lancer une session
                </Button>
                <Button designVariant="secondary" onClick={onFinish} fullWidth sx={{ py: 2 }}>
                    Plus tard
                </Button>
            </Stack>
        </ScreenLayout>
    );
};
