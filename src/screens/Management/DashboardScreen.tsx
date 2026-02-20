import { Box, Typography, Paper, ButtonBase } from '@mui/material';
import { ManagementLayout } from '../../components/Management/ManagementLayout';
import { Button } from '../../components/Button';
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
    onCreateSession: () => void;
}


export const DashboardScreen = ({
    userName,
    onManageUsers,
    onManageRobots,
    onManageSessions,
    onCreateSession
}: DashboardScreenProps) => {

    return (
        <ManagementLayout>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h1" sx={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'neutral.noir',
                    lineHeight: 1.3,
                    mb: 2,
                    fontFamily: 'Satoshi'
                }}>
                    Bienvenue sur votre tableau de bord {userName} !
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
                    title="3 robots"
                    subtitle="Gérer les robots"
                    icon={<SmartToyIcon sx={{ color: 'accent.dark' }} />}
                    onClick={onManageRobots}
                />
                <StatCard
                    title="2 sessions"
                    subtitle="Gérer les sessions"
                    icon={<EventNoteIcon sx={{ color: 'accent.dark' }} />}
                    onClick={onManageSessions}
                />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 'auto' }}>
                <Button designVariant="gradient" onClick={onCreateSession} fullWidth sx={{ py: 2 }}>
                    Créer une nouvelle session
                </Button>

                <Button designVariant="secondary">
                    Voir les paramètres de mon organisation
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
    <ButtonBase
        onClick={onClick}
        sx={{
            width: '100%',
            display: 'block',
            textAlign: 'left',
            borderRadius: '12px',
            overflow: 'hidden'
        }}
    >
        <Paper
            elevation={0}
            sx={{
                p: 2,
                borderRadius: '12px',
                bgcolor: 'white',
                display: 'flex',
                alignItems: 'center',
                transition: 'transform 0.2s',
                border: '1px solid rgba(0,0,0,0.05)',
                '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.02)'
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
    </ButtonBase>
);
