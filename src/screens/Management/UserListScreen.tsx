import { Box, Typography, Paper, IconButton, Avatar, Stack } from '@mui/material';
import { ManagementLayout } from '../../components/Management/ManagementLayout';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FilterListIcon from '@mui/icons-material/FilterList';
import { BackButton } from '../../components/BackButton';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    robotsCount: number;
    initial: string;
    avatarColor?: string;
}


interface UserListScreenProps {
    users: User[];
    onAddUser: () => void;
    onViewUser: (userId: string) => void;
    onBack: () => void;
}

export const UserListScreen = ({
    users,
    onAddUser,
    onViewUser,
    onBack
}: UserListScreenProps) => {
    return (
        <ManagementLayout>
            <Box sx={{ mb: 4 }}>
                <Box sx={{ mb: 4 }}>
                    <BackButton onClick={onBack} />
                </Box>
                <Typography variant="h1" sx={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'neutral.noir',
                    mb: 1,
                    fontFamily: 'Satoshi'
                }}>
                    Utilisateurs
                </Typography>
                <Typography sx={{
                    fontSize: '16px',
                    color: 'neutral.noir',
                    opacity: 0.8,
                    mb: 4,
                    fontFamily: 'Satoshi'
                }}>
                    Voici la liste des utilisateurs qui font partie de votre organisation Wedding.
                </Typography>

                <Button onClick={onAddUser} fullWidth sx={{ mb: 4 }}>
                    Ajouter un utilisateur
                </Button>

            </Box>

            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, mb: 2 }}>
                    <Typography sx={{ fontWeight: 500, color: 'neutral.noir' }}>
                        {users.length} utilisateurs
                    </Typography>
                    <IconButton size="small">
                        <FilterListIcon sx={{ color: 'accent.dark' }} />
                    </IconButton>
                </Box>

                <Stack spacing={2} sx={{ mb: 4 }}>
                    {users.map((user) => (
                        <UserListItem
                            key={user.id}
                            user={user}
                            onClick={() => onViewUser(user.id)}
                        />
                    ))}
                </Stack>

                <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, py: 2 }}>
                    <IconButton size="small" disabled>
                        <ChevronLeftIcon />
                    </IconButton>
                    <Typography sx={{ fontSize: '14px', color: 'neutral.noir' }}>
                        Page 1 sur 1
                    </Typography>
                    <IconButton size="small" disabled>
                        <ChevronRightIcon />
                    </IconButton>
                </Box>
            </Box>
        </ManagementLayout>
    );
};

const UserListItem = ({ user, onClick }: { user: User; onClick: () => void }) => (
    <Paper
        elevation={0}
        onClick={onClick}
        sx={{
            p: 2,
            borderRadius: '12px',
            bgcolor: 'white',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'transform 0.1s',
            '&:hover': {
                transform: 'translateY(-2px)'
            }
        }}
    >
        <Avatar sx={{
            width: 48,
            height: 48,
            bgcolor: user.avatarColor || 'var(--color-accent-light)',
            color: 'white',
            fontWeight: 700,
            fontSize: '20px',
            borderRadius: '12px',
            mr: 2
        }}>

            {user.initial}
        </Avatar>
        <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '16px', color: 'neutral.noir' }}>
                {user.name}
            </Typography>
            <Typography sx={{ fontSize: '14px', color: 'neutral.noir', opacity: 0.6, mb: 1 }}>
                {user.email}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Badge label={user.role} />
                <Typography sx={{ fontSize: '12px', color: 'neutral.noir', opacity: 0.8 }}>
                    {user.robotsCount} robot{user.robotsCount > 1 ? 's' : ''} attribué{user.robotsCount > 1 ? 's' : ''}
                </Typography>
            </Box>
        </Box>
        <ChevronRightIcon sx={{ color: 'accent.dark' }} />
    </Paper>
);
