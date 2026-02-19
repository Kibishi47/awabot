import { Box, Typography, Stack, MenuItem, Select, FormControl } from '@mui/material';
import { ManagementLayout } from '../../components/Management/ManagementLayout';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';
import { BackButton } from '../../components/BackButton';
import { useState } from 'react';

interface UserFormScreenProps {
    onSave: (data: any) => void;
    onBack: () => void;
}

export const UserFormScreen = ({ onSave, onBack }: UserFormScreenProps) => {
    const [role, setRole] = useState('Utilisateur');

    return (
        <ManagementLayout>
            <Box sx={{ mb: 4 }}>
                <BackButton onClick={onBack} />
                <Typography variant="h1" sx={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'neutral.noir',
                    mb: 1,
                    fontFamily: 'Satoshi'
                }}>
                    Ajouter un utilisateur
                </Typography>
                <Typography sx={{
                    fontSize: '16px',
                    color: 'neutral.noir',
                    opacity: 0.8,
                    fontFamily: 'Satoshi'
                }}>
                    Remplissez tous les champs requis pour inviter un nouveau membre.
                </Typography>
            </Box>

            <Stack spacing={4} sx={{ mb: 6 }}>
                <Box>
                    <Typography sx={{ fontWeight: 500, mb: 1.5, color: 'neutral.noir' }}>
                        Adresse email*
                    </Typography>
                    <TextField placeholder="Ex: thomas.dupont@gmail.com" fullWidth />
                </Box>

                <Box>
                    <Typography sx={{ fontWeight: 500, mb: 1.5, color: 'neutral.noir' }}>
                        Choisir un rôle*
                    </Typography>
                    <FormControl fullWidth>
                        <Select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            sx={{
                                borderRadius: '12px',
                                bgcolor: 'white',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'rgba(0,0,0,0.1)',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'accent.dark',
                                }
                            }}
                        >
                            <MenuItem value="Administrateur">Administrateur</MenuItem>
                            <MenuItem value="Responsable">Responsable</MenuItem>
                            <MenuItem value="Utilisateur">Utilisateur</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box>
                    <Typography sx={{ fontWeight: 500, mb: 1.5, color: 'neutral.noir' }}>
                        Photo de profil (Optionnel)
                    </Typography>
                    <Box sx={{
                        height: 120,
                        border: '2px dashed #6D213C',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'accent.dark',
                        opacity: 0.6,
                        bgcolor: 'white',
                        cursor: 'pointer',
                        transition: '0.2s',
                        '&:hover': { opacity: 0.8, bgcolor: 'rgba(109, 33, 60, 0.05)' }
                    }}>
                        <Typography variant="body2">Glisser-déposer ou cliquer pour uploader</Typography>
                    </Box>
                </Box>
            </Stack>

            <Box sx={{ mt: 'auto' }}>
                <Typography sx={{ fontSize: '14px', color: 'neutral.noir', textAlign: 'center', mb: 2, opacity: 0.6 }}>
                    Un email de confirmation sera envoyé à l'utilisateur.
                </Typography>
                <Button fullWidth onClick={() => onSave({ role })}>
                    Ajouter l'utilisateur
                </Button>
            </Box>
        </ManagementLayout>
    );
};
