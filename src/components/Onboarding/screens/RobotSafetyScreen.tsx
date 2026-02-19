import { Typography, Box, Checkbox, FormControlLabel } from '@mui/material';
import { Button } from '../../Button';
import { ScreenLayout } from '../ScreenLayout';
import { useState } from 'react';

interface RobotSafetyScreenProps {
    onNext: () => void;
    onBack: () => void;
}

export const RobotSafetyScreen = ({ onNext, onBack }: RobotSafetyScreenProps) => {
    const [accepted, setAccepted] = useState(false);

    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Vous avez presque fini...
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(37, 37, 37, 0.6)', fontSize: '1.1rem' }}>
                    Regardez la vidéo relative à la sécurité avant d’utiliser le robot.
                </Typography>
            </Box>

            <Box sx={{
                height: '220px',
                bgcolor: 'black',
                borderRadius: '20px',
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box sx={{ color: 'white', fontSize: '3rem' }}>▶</Box>
            </Box>

            <Box sx={{ mb: 4 }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={accepted}
                            onChange={(e) => setAccepted(e.target.checked)}
                            sx={{ color: 'accent-medium', '&.Mui-checked': { color: 'accent-medium' } }}
                        />
                    }
                    label={
                        <Typography variant="body2" sx={{ color: 'neutral-noir' }}>
                            J’accepte les risques et les responsabilités associés à l’utilisation du robot Beam.
                        </Typography>
                    }
                />
            </Box>

            <Button
                designVariant="gradient"
                onClick={onNext}
                fullWidth
                disabled={!accepted}
                sx={{ py: 2 }}
            >
                Suivant
            </Button>
        </ScreenLayout>
    );
};
