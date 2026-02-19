import { Typography, Stack, Box } from '@mui/material';
import { Button } from '../../Button';
import { ScreenLayout } from '../ScreenLayout';

interface LoginDecisionScreenProps {
    onTutorial: () => void;
    onManage: () => void;
}

export const LoginDecisionScreen = ({ onTutorial, onManage }: LoginDecisionScreenProps) => {
    return (
        <ScreenLayout>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'neutral-noir' }}>
                    Content de vous revoir
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(37, 37, 37, 0.6)', fontSize: '1.25rem' }}>
                    Que voulez-vous faire ?
                </Typography>
            </Box>

            <Stack spacing={2} sx={{ width: '100%' }}>
                <Button designVariant="gradient" onClick={onTutorial} fullWidth sx={{ py: 2 }}>
                    Je fais le tutoriel d'installation
                </Button>
                <Button designVariant="secondary" onClick={onManage} fullWidth sx={{ py: 2 }}>
                    Je gère mon organisation
                </Button>
            </Stack>
        </ScreenLayout>
    );
};
