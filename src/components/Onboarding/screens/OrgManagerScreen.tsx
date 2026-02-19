import { Typography, Box, MenuItem } from '@mui/material';
import { Button } from '../../Button';
import { TextField } from '../../TextField';
import { ScreenLayout } from '../ScreenLayout';

interface OrgManagerScreenProps {
    onNext: () => void;
    onBack: () => void;
}

export const OrgManagerScreen = ({ onNext, onBack }: OrgManagerScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Qui est le responsable de cette organisation ?
                </Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>
                    Séléctionnez un reponsable
                </Typography>
                <TextField
                    select
                    defaultValue=""
                >
                    <MenuItem value="1">L'utilisateur actuel</MenuItem>
                    <MenuItem value="2">Un autre membre</MenuItem>
                </TextField>
            </Box>

            <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2 }}>
                Suivant
            </Button>
        </ScreenLayout>
    );
};
