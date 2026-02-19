import { Box, Typography, Paper } from '@mui/material';
import { ManagementLayout } from '../ManagementLayout';
import { Button } from '../../Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PeopleIcon from '@mui/icons-material/People';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import EventNoteIcon from '@mui/icons-material/EventNote';

interface DashboardScreenProps {
    userName: string;
    orgName: string;
    onManageUsers: () => void;
    onManageRobots: () => void;
    onManageSessions: () => void;
    onLogout: () => void;
}

export const DashboardScreen = ({
    userName,
    orgName,
    onManageUsers,
    onManageRobots,
    onManageSessions,
    onLogout
}: DashboardScreenProps) => {
    return (
        <ManagementLayout>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h1" sx={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'neutral.noir',
                    lineHeight: 1.3,
                    mb: 2,
                    fontFamily: 'Satoshi'
                }}>
                    Bienvenue sur votre tableau de bord {userName} !
                </Typography>
                <Typography sx={{
                    fontSize: '18px',
                    color: 'neutral.noir',
                    opacity: 0.8,
                    lineHeight: 1.5,
                    fontFamily: 'Satoshi'
                }}>
                    Voici la liste des utilisateurs qui font partie de votre organisation {orgName}.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 6 }}>
                <StatCard
                    title="3 utilisateurs"
                    subtitle="Gérer les utilisateurs"
                    icon={<PeopleIcon sx={{ color: 'accent.dark' }} />}
                    onClick={onManageUsers}
                />
                <StatCard
                    title="6 robots"
                    subtitle="Gérer les robots"
                    icon={<SmartToyIcon sx={{ color: 'accent.dark' }} />}
                    onClick={onManageRobots}
                />
                <StatCard
                    title="1 session"
                    subtitle="Gérer les sessions"
                    icon={<EventNoteIcon sx={{ color: 'accent.dark' }} />}
                    onClick={onManageSessions}
                />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 'auto' }}>
                <Button onClick={onLogout}>
                    Déconnexion
                </Button>
                <Button designVariant="secondary">
                    Gérer mon compte
                </Button>
            </Box>
        </ManagementLayout>
    );
};

interface StatCardProps {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    onClick: () => void;
}

const StatCard = ({ title, subtitle, icon, onClick }: StatCardProps) => (
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
            transition: 'transform 0.2s',
            '&:hover': {
                transform: 'scale(1.02)'
            }
        }}
    >
        <Box sx={{
            width: 48,
            height: 48,
            borderRadius: '10px',
            bgcolor: 'var(--color-accent-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2
        }}>
            {icon}
        </Box>
        <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '18px', color: 'neutral.noir' }}>
                {title}
            </Typography>
            <Typography sx={{ fontSize: '14px', color: 'accent.dark', opacity: 0.8 }}>
                {subtitle}
            </Typography>
        </Box>
        <ChevronRightIcon sx={{ color: 'accent.dark' }} />
    </Paper>
);
