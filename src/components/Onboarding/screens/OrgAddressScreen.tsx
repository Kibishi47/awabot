import { Typography, Box, Stack } from '@mui/material';
import { Button } from '../../Button';
import { TextField } from '../../TextField';
import { ScreenLayout } from '../ScreenLayout';

interface OrgAddressScreenProps {
    onNext: () => void;
    onBack: () => void;
}

export const OrgAddressScreen = ({ onNext, onBack }: OrgAddressScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Où se situe votre siège social ?
                </Typography>
            </Box>

            <Stack spacing={3} sx={{ mb: 6 }}>
                <Box>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>Adresse</Typography>
                    <TextField placeholder="123 Rue de la Paix" />
                </Box>
                <Stack direction="row" spacing={2}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>Code postal</Typography>
                        <TextField placeholder="75000" />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>Ville</Typography>
                        <TextField placeholder="Paris" />
                    </Box>
                </Stack>
            </Stack>

            <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2 }}>
                Suivant
            </Button>
        </ScreenLayout>
    );
};
