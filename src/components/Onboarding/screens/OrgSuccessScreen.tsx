import { Typography, Stack, Box } from '@mui/material';
import { Button } from '../../Button';
import { ScreenLayout } from '../ScreenLayout';

interface OrgSuccessScreenProps {
    onConnect: () => void;
    onLater: () => void;
    onBack: () => void;
}

export const OrgSuccessScreen = ({ onConnect, onLater, onBack }: OrgSuccessScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Votre organisation a bien été créée !
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(37, 37, 37, 0.6)', fontSize: '1.25rem' }}>
                    Voulez-vous connecter un robot Beam ?
                </Typography>
            </Box>

            <Stack spacing={2} sx={{ width: '100%' }}>
                <Button designVariant="gradient" onClick={onConnect} fullWidth sx={{ py: 2 }}>
                    Oui, connecter un robot
                </Button>
                <Button designVariant="secondary" onClick={onLater} fullWidth sx={{ py: 2 }}>
                    Plus tard
                </Button>
            </Stack>
        </ScreenLayout>
    );
};
