import { Typography, Box } from '@mui/material';
import { Button } from '../../Button';
import { TextField } from '../../TextField';
import { ScreenLayout } from '../ScreenLayout';

interface OrgNameScreenProps {
    onNext: () => void;
    onBack: () => void;
}

export const OrgNameScreen = ({ onNext, onBack }: OrgNameScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Créez votre organisation
                </Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>
                    Nom de l’organisation
                </Typography>
                <TextField placeholder="Ex: Awabot" />
            </Box>

            <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2 }}>
                Suivant
            </Button>
        </ScreenLayout>
    );
};
