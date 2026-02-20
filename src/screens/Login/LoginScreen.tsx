import { Box, Typography, Link, Stack } from '@mui/material';
import { TextField } from '../../components/TextField';
import { Button } from '../../components/Button';
import { ScreenLayout } from '../../components/Onboarding/ScreenLayout';

interface LoginScreenProps {
    onLogin: () => void;
}

export const LoginScreen = ({ onLogin }: LoginScreenProps) => {
    return (
        <ScreenLayout hideBack>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h1" sx={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'neutral.noir',
                    mb: 1,
                    fontFamily: 'Satoshi'
                }}>
                    Connectez-vous à votre compte Awabot
                </Typography>
            </Box>

            <Stack spacing={3} sx={{ mb: 4 }}>
                <Box>
                    <Typography sx={{ fontWeight: 500, mb: 1.5, color: 'neutral.noir' }}>
                        Adresse email
                    </Typography>
                    <TextField placeholder="thomas.dupont@gmail.com" type="email" />
                </Box>

                <Box>
                    <Typography sx={{ fontWeight: 500, mb: 1.5, color: 'neutral.noir' }}>
                        Mot de passe
                    </Typography>
                    <TextField placeholder="••••••••••••" type="password" />
                </Box>
            </Stack>

            <Button fullWidth onClick={onLogin} sx={{ mb: 3 }}>
                Je me connecte
            </Button>

            <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '14px', color: 'neutral.noir' }}>
                    Pas de compte ?{' '}
                    <Link
                        href="https://awabot.com/signup"
                        target="_blank"
                        sx={{
                            color: 'accent.dark',
                            fontWeight: 700,
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' }
                        }}
                    >
                        Créer mon compte
                    </Link>
                </Typography>
            </Box>
        </ScreenLayout>
    );
};
