import { Box, Typography, Paper, Stack } from '@mui/material';
import { ManagementLayout } from '../../components/Management/ManagementLayout';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { Badge } from '../../components/Badge';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import SettingsIcon from '@mui/icons-material/Settings';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

interface RobotDetailScreenProps {
    robot: {
        id: string;
        name: string;
        model: string;
        status: string;
        battery: number;
        wifi: string;
        lastConnected: string;
    };
    onDelete: () => void;
    onBack: () => void;
}

export const RobotDetailScreen = ({ robot, onDelete, onBack }: RobotDetailScreenProps) => {
    return (
        <ManagementLayout>
            <Box sx={{ mb: 4 }}>
                <BackButton onClick={onBack} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6 }}>
                <Box sx={{
                    width: 104,
                    height: 104,
                    bgcolor: 'white',
                    borderRadius: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    mb: 3
                }}>
                    <Box component="img" src="/robot-icon.png" sx={{ width: 52, height: 52, filter: 'invert(16%) sepia(50%) saturate(1633%) hue-rotate(313deg) brightness(91%) contrast(92%)' }} />
                </Box>

                <Typography variant="h2" sx={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'neutral.noir',
                    mb: 0.5,
                    fontFamily: 'Satoshi'
                }}>
                    {robot.name}
                </Typography>

                <Typography sx={{
                    fontSize: '16px',
                    color: 'neutral.noir',
                    opacity: 0.6,
                    mb: 3,
                    fontFamily: 'Satoshi'
                }}>
                    Modèle : {robot.model}
                </Typography>

                <Badge label={robot.status} />
            </Box>

            <Stack spacing={2} sx={{ mb: 6 }}>
                <InfoCard
                    label="Niveau de batterie"
                    value={`${robot.battery}%`}
                    icon={<BatteryChargingFullIcon sx={{ color: 'accent.dark' }} />}
                />
                <InfoCard
                    label="Réseau WiFi actuel"
                    value={robot.wifi}
                    icon={<SignalCellularAltIcon sx={{ color: 'accent.dark' }} />}
                />
                <InfoCard
                    label="Dernière connexion"
                    value={robot.lastConnected}
                    icon={<SettingsIcon sx={{ color: 'accent.dark' }} />}
                />
            </Stack>

            <Stack spacing={2} sx={{ mt: 'auto' }}>
                <Button designVariant="secondary" onClick={onDelete} sx={{ color: '#FF335C', borderColor: '#FF335C' }}>
                    Supprimer ce robot
                </Button>
                <Button onClick={onBack}>
                    Retour
                </Button>
            </Stack>
        </ManagementLayout>
    );
};

const InfoCard = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
    <Paper elevation={0} sx={{
        p: 2,
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        border: '1px solid rgba(0,0,0,0.05)'
    }}>
        <Box sx={{
            width: 40,
            height: 40,
            borderRadius: '10px',
            bgcolor: 'var(--color-accent-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {icon}
        </Box>
        <Box>
            <Typography sx={{ fontSize: '12px', color: 'neutral.noir', opacity: 0.6 }}>{label}</Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 700, color: 'neutral.noir' }}>{value}</Typography>
        </Box>
    </Paper>
);
