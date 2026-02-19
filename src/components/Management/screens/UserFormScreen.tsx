import { Box, Typography, Stack } from '@mui/material';
import { ManagementLayout } from '../ManagementLayout';
import { Button } from '../../Button';
import { TextField } from '../../TextField';
import { BackButton } from '../../BackButton';

interface UserFormScreenProps {
    onSave: (data: any) => void;
    onBack: () => void;
}

export const UserFormScreen = ({ onSave, onBack }: UserFormScreenProps) => {
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
                    Remplissez tous les champs requis.
                </Typography>
            </Box>

            <Stack spacing={4} sx={{ mb: 6 }}>
                <Box>
                    <Typography sx={{ fontWeight: 500, mb: 1.5, color: 'neutral.noir' }}>
                        Adresse email*
                    </Typography>
                    <TextField placeholder="Ex: thomas.dupont@gmail.com" />
                </Box>

                <Box>
                    <Typography sx={{ fontWeight: 500, mb: 1.5, color: 'neutral.noir' }}>
                        Saisissez votre rôle*
                    </Typography>
                    <TextField placeholder="Ex: Responsable" />
                </Box>

                <Box>
                    <Typography sx={{ fontWeight: 500, mb: 1.5, color: 'neutral.noir' }}>
                        Ajoutez une photo de profil
                    </Typography>
                    <Box sx={{
                        height: 100,
                        border: '2px dashed #6D213C',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'accent.dark',
                        opacity: 0.6,
                        bgcolor: 'white'
                    }}>
                        <Typography variant="body2">Glisser-déposer ou cliquer pour uploader</Typography>
                    </Box>
                </Box>

                <Box>
                    <Typography sx={{ fontWeight: 500, mb: 1.5, color: 'neutral.noir' }}>
                        Attribuez des robots*
                    </Typography>
                    <TextField placeholder="Sélectionnez un ou plusieurs robots" />
                </Box>
            </Stack>

            <Box sx={{ mt: 'auto' }}>
                <Typography sx={{ fontSize: '14px', color: 'neutral.noir', textAlign: 'center', mb: 2 }}>
                    Un email de confirmation va vous être envoyé.
                </Typography>
                <Button fullWidth onClick={() => onSave({})}>
                    Ajouter l'utilisateur
                </Button>
            </Box>
        </ManagementLayout>
    );
};
