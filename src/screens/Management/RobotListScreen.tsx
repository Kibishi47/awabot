import { Box, Typography, Paper, IconButton, Stack, Avatar } from '@mui/material';
import { ManagementLayout } from '../../components/Management/ManagementLayout';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { Badge } from '../../components/Badge';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FilterListIcon from '@mui/icons-material/FilterList';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';

interface Robot {
    id: string;
    name: string;
    model: string;
    status: 'En ligne' | 'Hors ligne' | 'En session';
    battery: number;
}

interface RobotListScreenProps {
    robots: Robot[];
    onAddRobot: () => void;
    onViewRobot: (robotId: string) => void;
    onBack: () => void;
}

export const RobotListScreen = ({ robots, onAddRobot, onViewRobot, onBack }: RobotListScreenProps) => {
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
                    Mes Robots
                </Typography>
                <Typography sx={{
                    fontSize: '16px',
                    color: 'neutral.noir',
                    opacity: 0.8,
                    mb: 4,
                    fontFamily: 'Satoshi'
                }}>
                    Gérez votre flotte de robots et suivez leur état en temps réel.
                </Typography>

                <Button onClick={onAddRobot} fullWidth sx={{ mb: 4 }}>
                    Ajouter un robot
                </Button>

            </Box>

            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, mb: 2 }}>
                    <Typography sx={{ fontWeight: 500, color: 'neutral.noir' }}>
                        {robots.length} robots
                    </Typography>
                    <IconButton size="small">
                        <FilterListIcon sx={{ color: 'accent.dark' }} />
                    </IconButton>
                </Box>

                <Stack spacing={2} sx={{ mb: 4 }}>
                    {robots.map((robot) => (
                        <RobotListItem
                            key={robot.id}
                            robot={robot}
                            onClick={() => onViewRobot(robot.id)}
                        />
                    ))}
                </Stack>
            </Box>
        </ManagementLayout>
    );
};

const RobotListItem = ({ robot, onClick }: { robot: Robot; onClick: () => void }) => (
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
        <Avatar sx={{
            width: 48,
            height: 48,
            bgcolor: 'var(--color-accent-light)',
            color: 'accent.dark',
            borderRadius: '12px',
            mr: 2
        }}>
            <Box component="img" src="/robot-icon.png" sx={{ width: 24, height: 24, filter: 'invert(16%) sepia(50%) saturate(1633%) hue-rotate(313deg) brightness(91%) contrast(92%)' }} />
        </Avatar>
        <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '16px', color: 'neutral.noir' }}>
                {robot.name}
            </Typography>
            <Typography sx={{ fontSize: '14px', color: 'neutral.noir', opacity: 0.6, mb: 1 }}>
                {robot.model}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Badge label={robot.status} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, opacity: 0.6 }}>
                    <BatteryChargingFullIcon sx={{ fontSize: 16 }} />
                    <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>{robot.battery}%</Typography>
                </Box>
            </Box>
        </Box>
        <ChevronRightIcon sx={{ color: 'accent.dark' }} />
    </Paper>
);
