import { Typography, Box, Stack } from '@mui/material';
import { Button } from '../../Button';
import { TextField } from '../../TextField';
import { ScreenLayout } from '../ScreenLayout';

interface SignupScreenProps {
    onNext: () => void;
    onBack: () => void;
}

export const SignupScreen = ({ onNext, onBack }: SignupScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Créez votre compte
                </Typography>
            </Box>

            <Stack spacing={2.5} sx={{ mb: 4 }}>
                <Stack direction="row" spacing={2}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>Prénom</Typography>
                        <TextField placeholder="Jean" />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>Nom</Typography>
                        <TextField placeholder="Dupont" />
                    </Box>
                </Stack>

                <Box>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>Adresse email</Typography>
                    <TextField placeholder="jean.dupont@exemple.com" />
                </Box>

                <Box>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>Confirmation email</Typography>
                    <TextField placeholder="jean.dupont@exemple.com" />
                </Box>

                <Box>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>Créez votre mot de passe</Typography>
                    <TextField type="password" placeholder="••••••••" />
                </Box>

                <Box>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>Confirmez votre mot de passe</Typography>
                    <TextField type="password" placeholder="••••••••" />
                </Box>
            </Stack>

            <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2 }}>
                Suivant
            </Button>
        </ScreenLayout>
    );
};
