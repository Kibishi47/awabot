import { Typography, Box, MenuItem } from '@mui/material';
import { Button } from '../../Button';
import { TextField } from '../../TextField';
import { ScreenLayout } from '../ScreenLayout';

interface LanguageScreenProps {
    onNext: () => void;
    onBack: () => void;
}

export const LanguageScreen = ({ onNext, onBack }: LanguageScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Séléctionnez votre langue
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <TextField
                    select
                    label="Langue"
                    defaultValue="fr"
                >
                    <MenuItem value="fr">Français</MenuItem>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Español</MenuItem>
                </TextField>
            </Box>

            <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2 }}>
                Suivant
            </Button>
        </ScreenLayout>
    );
};
