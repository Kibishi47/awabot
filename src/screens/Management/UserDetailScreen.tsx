import { Box, Typography, Avatar, Stack, Paper, IconButton } from '@mui/material';
import { ManagementLayout } from '../../components/Management/ManagementLayout';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { Badge } from '../../components/Badge';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface UserDetailScreenProps {
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
        initial: string;
        robotsCount: number;
    };
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
                    borderRadius: '24px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    mb: 3
                }}>
                    {user.initial}
                </Avatar>

                <Typography variant="h2" sx={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'neutral.noir',
                    mb: 0.5,
                    fontFamily: 'Satoshi'
                }}>
                    {user.name}
                </Typography>

                <Typography sx={{
                    fontSize: '16px',
                    color: 'neutral.noir',
                    opacity: 0.6,
                    mb: 3,
                    fontFamily: 'Satoshi'
                }}>
                    {user.email}
                </Typography>

                <Badge label={user.role} />
            </Box>

            {/* Robot Assignment Section */}
            <Box sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Typography sx={{ fontWeight: 700, color: 'neutral.noir' }}>
                        Robots assignés ({user.robotsCount})
                    </Typography>
                    <Button
                        designVariant="secondary"
                        size="small"
                        sx={{ minWidth: 'auto', p: 0.5, borderRadius: '8px' }}
                        onClick={() => console.log('Assign robot')}
                    >
                        <AddIcon fontSize="small" />
                    </Button>
                </Box>

                <Stack spacing={1.5}>
                    {user.robotsCount > 0 ? (
                        Array.from({ length: user.robotsCount }).map((_, i) => (
                            <Paper key={i} elevation={0} sx={{
                                p: 1.5,
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Beam-Robot-00{i + 1}</Typography>
                                <IconButton size="small" color="error">
                                    <DeleteOutlineIcon fontSize="small" />
                                </IconButton>
                            </Paper>
                        ))
                    ) : (
                        <Typography sx={{ fontSize: '14px', color: 'neutral.noir', opacity: 0.5, textAlign: 'center', py: 2 }}>
                            Aucun robot assigné à cet utilisateur.
                        </Typography>
                    )}
                </Stack>
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
