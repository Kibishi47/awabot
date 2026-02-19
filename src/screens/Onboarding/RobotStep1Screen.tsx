import { Typography, Box } from '@mui/material';
import { Button } from '../../components/Button';
import { ScreenLayout } from '../../components/Onboarding/ScreenLayout';

interface RobotStep1ScreenProps {
    onNext: () => void;
    onBack?: () => void;
}

export const RobotStep1Screen = ({ onNext, onBack }: RobotStep1ScreenProps) => {
    return (
        <ScreenLayout onBack={onBack}>
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="caption"
                    sx={{
                        color: 'accent.medium',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        display: 'block',
                        mb: 1
                    }}
                >
                    étape 1
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral.noir' }}>
                    Allumez le robot en le positionnant sur sa base.
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(37, 37, 37, 0.6)', fontSize: '1.25rem' }}>
                    Une led bleue doit s’allumer.
                </Typography>
            </Box>

            <Box sx={{
                height: '220px',
                bgcolor: 'var(--color-accent-light)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '220px',
                mb: 6
            }}>
                {/* Image placeholder */}
                <Box component="span" sx={{ color: 'accent.dark', opacity: 0.5 }}>IMAGE DU ROBOT</Box>
            </Box>

            <Button designVariant="gradient" onClick={onNext} fullWidth sx={{ py: 2 }}>
                Suivant
            </Button>
        </ScreenLayout>
    );
};
