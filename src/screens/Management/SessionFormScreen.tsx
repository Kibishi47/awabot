import { useState } from 'react';
import { Box, Typography, Stack, MenuItem, FormControl, Select } from '@mui/material';
import { ManagementLayout } from '../../components/Management/ManagementLayout';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';
import { BackButton } from '../../components/BackButton';

interface SessionFormScreenProps {
    onSave: () => void;
    onBack: () => void;
    robots: { id: string, name: string }[];
    users: { id: string, name: string }[];
}

export const SessionFormScreen = ({ onSave, onBack, robots, users }: SessionFormScreenProps) => {
    const [robotId, setRobotId] = useState('');
    const [userId, setUserId] = useState('');

    return (
        <ManagementLayout>
            <Box sx={{ mb: 4 }}>
                <BackButton onClick={onBack} />
                <Typography variant="h1" sx={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'neutral.noir',
                    mt: 2,
                    fontFamily: 'Satoshi'
                }}>
                    Ouvrir une session
                </Typography>
            </Box>

            <Stack spacing={4} sx={{ mb: 6 }}>
                <Box>
                    <Typography sx={{ fontWeight: 500, mb: 1.5, color: 'neutral.noir' }}>
                        Robot à assigner*
                    </Typography>
                    <FormControl fullWidth>
                        <Select
                            value={robotId}
                            onChange={(e) => setRobotId(e.target.value)}
                            displayEmpty
                            sx={{
                                borderRadius: '12px',
                                bgcolor: 'white',
                                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0,0,0,0.1)' }
                            }}
                        >
                            <MenuItem value="" disabled>Sélectionner un robot</MenuItem>
                            {robots.map(r => <MenuItem key={r.id} value={r.id}>{r.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Box>

                <Box>
                    <Typography sx={{ fontWeight: 500, mb: 1.5, color: 'neutral.noir' }}>
                        Responsable*
                    </Typography>
                    <FormControl fullWidth>
                        <Select
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            displayEmpty
                            sx={{
                                borderRadius: '12px',
                                bgcolor: 'white',
                                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0,0,0,0.1)' }
                            }}
                        >
                            <MenuItem value="" disabled>Sélectionner un utilisateur</MenuItem>
                            {users.map(u => <MenuItem key={u.id} value={u.id}>{u.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Box>

                <TextField
                    label="Email d'invitation*"
                    placeholder="exemple@email.com"
                    fullWidth
                />

                <Stack direction="row" spacing={2}>
                    <TextField
                        label="Date de début"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Date de fin"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />
                </Stack>

                <Stack direction="row" spacing={2}>
                    <TextField
                        label="Latitude"
                        placeholder="45.7640"
                        fullWidth
                    />
                    <TextField
                        label="Longitude"
                        placeholder="4.8357"
                        fullWidth
                    />
                </Stack>
            </Stack>

            <Button designVariant="gradient" fullWidth onClick={onSave} sx={{ mb: 2 }}>
                Ouvrir la session
            </Button>
            <Button designVariant="secondary" fullWidth onClick={onBack}>
                Annuler
            </Button>
        </ManagementLayout>
    );
};
