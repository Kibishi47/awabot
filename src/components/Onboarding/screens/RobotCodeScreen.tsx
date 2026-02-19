import { Typography, Box } from '@mui/material';
import { Button } from '../../Button';
import { TextField } from '../../TextField';
import { ScreenLayout } from '../ScreenLayout';

interface RobotCodeScreenProps {
    onNext: () => void;
    onBack: () => void;
}

export const RobotCodeScreen = ({ onNext, onBack }: RobotCodeScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Rentrez le code qui apparaît sur votre robot Beam
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'neutral-noir' }}>
                    Code
                </Typography>
                <TextField placeholder="123456" />
            </Box>

            <Box sx={{
                height: '200px',
                bgcolor: 'var(--color-accent-light)',
                borderRadius: '20px',
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant="caption" sx={{ color: 'accent-dark', opacity: 0.5 }}>IMAGE DU ROBOT AVEC CODE</Typography>
            </Box>

            <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2 }}>
                Suivant
            </Button>
        </ScreenLayout>
    );
};
