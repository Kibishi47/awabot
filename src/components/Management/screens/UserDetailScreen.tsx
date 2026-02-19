import { Box, Typography, Avatar, Stack } from '@mui/material';
import { ManagementLayout } from '../ManagementLayout';
import { Button } from '../../Button';
import { BackButton } from '../../BackButton';

interface UserDetailScreenProps {
    user: {
        name: string;
        email: string;
        role: string;
        initial: string;
    };
    onEdit: () => void;
    onDelete: () => void;
    onBack: () => void;
}

export const UserDetailScreen = ({ user, onDelete, onBack }: UserDetailScreenProps) => {
    return (
        <ManagementLayout>
            <Box sx={{ mb: 4 }}>
                <BackButton onClick={onBack} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6 }}>
                <Avatar sx={{
                    width: 104,
                    height: 104,
                    bgcolor: 'white',
                    color: 'accent.dark',
                    fontWeight: 700,
                    fontSize: '40px',
                    borderRadius: '20px',
                    border: '1px solid var(--color-accent-light)',
                    mb: 3
                }}>
                    {user.initial}
                </Avatar>

                <Typography variant="h2" sx={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'neutral.noir',
                    mb: 1,
                    fontFamily: 'Satoshi'
                }}>
                    {user.name}
                </Typography>

                <Typography sx={{
                    fontSize: '16px',
                    color: 'neutral.noir',
                    opacity: 0.6,
                    mb: 4,
                    fontFamily: 'Satoshi'
                }}>
                    {user.email}
                </Typography>

                <Box sx={{
                    px: 3,
                    py: 1,
                    bgcolor: 'rgba(255,51,92,0.1)',
                    borderRadius: '30px',
                    border: '1px solid var(--color-accent-dark)'
                }}>
                    <Typography sx={{ fontWeight: 500, color: 'neutral.noir' }}>
                        {user.role}
                    </Typography>
                </Box>
            </Box>

            <Stack spacing={2} sx={{ mt: 'auto' }}>
                <Button designVariant="secondary" onClick={onDelete} sx={{ color: '#FF335C', borderColor: '#FF335C' }}>
                    Supprimer cet utilisateur
                </Button>
                <Button onClick={onBack}>
                    Retour
                </Button>
            </Stack>
        </ManagementLayout>
    );
};
