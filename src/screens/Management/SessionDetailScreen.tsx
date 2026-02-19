import { Box, Typography, Paper, Stack } from '@mui/material';
import { ManagementLayout } from '../../components/Management/ManagementLayout';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { Badge } from '../../components/Badge';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import type { Session } from './SessionListScreen';

interface SessionDetailScreenProps {
    session: Session;
    onEndSession: (sessionId: string) => void;
    onBack: () => void;
}

export const SessionDetailScreen = ({ session, onEndSession, onBack }: SessionDetailScreenProps) => {
    return (
        <ManagementLayout>
            <Box sx={{ mb: 4 }}>
                <BackButton onClick={onBack} />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                    <Typography variant="h1" sx={{ fontSize: '32px', fontWeight: 700, color: 'neutral.noir', fontFamily: 'Satoshi' }}>
                        Détails Session
                    </Typography>
                    <Badge label={session.status} />
                </Box>
            </Box>

            <Stack spacing={2} sx={{ mb: 6 }}>
                <InfoCard
                    label="Robot utilisé"
                    value={session.robotName}
                    icon={<SmartToyIcon sx={{ color: 'accent.dark' }} />}
                />
                <InfoCard
                    label="Responsable"
                    value={session.responsibleUser}
                    icon={<PersonIcon sx={{ color: 'accent.dark' }} />}
                />
                <InfoCard
                    label="Email d'invitation"
                    value={session.email}
                    icon={<MailOutlineIcon sx={{ color: 'accent.dark' }} />}
                />
                <InfoCard
                    label="Période"
                    value={`${session.startDate} au ${session.endDate}`}
                    icon={<CalendarTodayIcon sx={{ color: 'accent.dark' }} />}
                />
                <InfoCard
                    label="Localisation"
                    value={`${session.location.lat}, ${session.location.lng}`}
                    subValue={session.location.address}
                    icon={<LocationOnIcon sx={{ color: 'accent.dark' }} />}
                />
            </Stack>

            {session.status === 'Ouverte' && (
                <Button
                    fullWidth
                    onClick={() => onEndSession(session.id)}
                    sx={{
                        mb: 2,
                    }}
                >
                    Terminer la session
                </Button>
            )}

            <Button designVariant="secondary" fullWidth onClick={onBack}>
                Retour
            </Button>
        </ManagementLayout>
    );
};

const InfoCard = ({ label, value, subValue, icon }: { label: string; value: string; subValue?: string; icon: React.ReactNode }) => (
    <Paper elevation={0} sx={{ p: 2, borderRadius: '12px', bgcolor: 'white', border: '1px solid rgba(0,0,0,0.05)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box sx={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                bgcolor: 'var(--color-accent-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 1.5
            }}>
                {icon}
            </Box>
            <Typography sx={{ fontSize: '14px', fontWeight: 500, color: 'neutral.noir', opacity: 0.6 }}>
                {label}
            </Typography>
        </Box>
        <Typography sx={{ fontSize: '18px', fontWeight: 700, color: 'neutral.noir', ml: 6 }}>
            {value}
        </Typography>
        {subValue && (
            <Typography sx={{ fontSize: '14px', color: 'neutral.noir', opacity: 0.5, ml: 6, mt: 0.5 }}>
                {subValue}
            </Typography>
        )}
    </Paper>
);
