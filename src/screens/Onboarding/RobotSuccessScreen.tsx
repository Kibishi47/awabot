import { Typography, Box, Stack } from '@mui/material';
import { Button } from '../../components/Button';
import { ScreenLayout } from '../../components/Onboarding/ScreenLayout';

interface RobotSuccessScreenProps {
    onFinish: () => void;
    onInvite: () => void;
}

export const RobotSuccessScreen = ({ onFinish, onInvite }: RobotSuccessScreenProps) => {
    return (
        <ScreenLayout hideBack>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'neutral.noir', fontSize: '32px', fontFamily: 'Satoshi' }}>
                    L’équipe Awabot vous souhaite la bienvenue !
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(37, 37, 37, 0.6)', fontSize: '1.25rem', lineHeight: 1.4, fontFamily: 'Satoshi' }}>
                    Vous avez assigné un nouveau robot avec succès à votre organisation.
                </Typography>
            </Box>

            <Stack spacing={2} sx={{ width: '100%' }}>
                <Button designVariant="gradient" onClick={onFinish} fullWidth sx={{ py: 2 }}>
                    Rejoindre le tableau de bord
                </Button>
                <Button designVariant="secondary" onClick={onInvite} fullWidth sx={{ py: 2 }}>
                    Inviter maintenant
                </Button>
            </Stack>
        </ScreenLayout>
    );
};
