import { Typography, Box } from '@mui/material';
import { Button } from '../../Button';
import { TextField } from '../../TextField';
import { ScreenLayout } from '../ScreenLayout';

interface RobotNameScreenProps {
    onNext: () => void;
    onBack: () => void;
}

export const RobotNameScreen = ({ onNext, onBack }: RobotNameScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Donnez un nom à votre Beam
                </Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>
                    Nom du robot
                </Typography>
                <TextField placeholder="Ex: Beam_01" />
            </Box>

            <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2 }}>
                Suivant
            </Button>
        </ScreenLayout>
    );
};
