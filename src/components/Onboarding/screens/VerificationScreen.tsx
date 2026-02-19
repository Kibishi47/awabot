import { Typography, Stack, Box } from '@mui/material';
import { Button } from '../../Button';
import { ScreenLayout } from '../ScreenLayout';

interface VerificationScreenProps {
    onNext: () => void;
    onBack: () => void;
}

export const VerificationScreen = ({ onNext, onBack }: VerificationScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir', lineHeight: 1.2 }}>
                    Veuillez vérifier votre adresse email !
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(37, 37, 37, 0.6)', fontSize: '1.25rem' }}>
                    Cliquez sur le lien envoyé par mail.
                </Typography>
            </Box>

            <Stack spacing={2} sx={{ width: '100%' }}>
                <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2 }}>
                    J'ai cliqué sur le lien
                </Button>
                <Button designVariant="secondary" fullWidth sx={{ py: 2 }}>
                    Renvoyer le mail
                </Button>
            </Stack>
        </ScreenLayout>
    );
};
