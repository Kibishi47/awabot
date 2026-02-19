import { Box, Typography, Paper, IconButton, Stack } from '@mui/material';
import { ManagementLayout } from '../../components/Management/ManagementLayout';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { Badge } from '../../components/Badge';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FilterListIcon from '@mui/icons-material/FilterList';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';

export interface Session {
    id: string;
    robotName: string;
    responsibleUser: string;
    email: string;
    startDate: string;
    endDate: string;
    status: 'Ouverte' | 'Terminée' | 'Programmée';
    location: {
        lat: number;
        lng: number;
        address?: string;
    };
    robotId: string;
}

interface SessionListScreenProps {
    sessions: Session[];
    onAddSession: () => void;
    onViewSession: (sessionId: string) => void;
    onBack: () => void;
}

export const SessionListScreen = ({ sessions, onAddSession, onViewSession, onBack }: SessionListScreenProps) => {
    return (
        <ManagementLayout>
            <Box sx={{ mb: 4 }}>
                <BackButton onClick={onBack} />
                <Typography variant="h1" sx={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'neutral.noir',
                    mb: 1,
                    mt: 2,
                    fontFamily: 'Satoshi'
                }}>
                    Sessions
                </Typography>
                <Typography sx={{
                    fontSize: '16px',
                    color: 'neutral.noir',
                    opacity: 0.8,
                    mb: 4,
                    fontFamily: 'Satoshi'
                }}>
                    Consultez et gérez les sessions d'utilisation des robots.
                </Typography>

                <Button onClick={onAddSession} sx={{ mb: 4 }}>
                    Ouvrir une session
                </Button>
            </Box>

            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, mb: 2 }}>
                    <Typography sx={{ fontWeight: 500, color: 'neutral.noir' }}>
                        {sessions.length} sessions
                    </Typography>
                    <IconButton size="small">
                        <FilterListIcon sx={{ color: 'accent.dark' }} />
                    </IconButton>
                </Box>

                <Stack spacing={2} sx={{ mb: 4 }}>
                    {sessions.map((session) => (
                        <SessionListItem
                            key={session.id}
                            session={session}
                            onClick={() => onViewSession(session.id)}
                        />
                    ))}
                </Stack>
            </Box>
        </ManagementLayout>
    );
};

const SessionListItem = ({ session, onClick }: { session: Session; onClick: () => void }) => (
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
            border: '1px solid rgba(0,0,0,0.05)',
            transition: 'transform 0.1s',
            '&:hover': {
                transform: 'translateY(-2px)'
            }
        }}
    >
        <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '16px', color: 'neutral.noir' }}>
                    {session.robotName}
                </Typography>
                <Badge label={session.status} />
            </Box>

            <Stack spacing={0.5}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, opacity: 0.6 }}>
                    <PersonIcon sx={{ fontSize: 16 }} />
                    <Typography sx={{ fontSize: '13px' }}>{session.responsibleUser}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, opacity: 0.6 }}>
                    <EventIcon sx={{ fontSize: 16 }} />
                    <Typography sx={{ fontSize: '13px' }}>{session.startDate} - {session.endDate}</Typography>
                </Box>
            </Stack>
        </Box>
        <ChevronRightIcon sx={{ color: 'accent.dark', ml: 2 }} />
    </Paper>
);
