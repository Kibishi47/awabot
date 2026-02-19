import { Box, Container } from '@mui/material';
import { Logo } from '../Logo';
import { BackButton } from '../BackButton';

interface ScreenLayoutProps {
    children: React.ReactNode;
    showLogo?: boolean;
    onBack?: () => void;
}

export const ScreenLayout = ({ children, showLogo = true, onBack }: ScreenLayoutProps) => {
    return (
        <Box sx={{ bgcolor: 'var(--color-accent-light)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Container maxWidth="sm" sx={{ py: 6, flex: 1, display: 'flex', flexDirection: 'column' }}>
                {showLogo && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
                        <Logo size="small" />
                    </Box>
                )}

                {onBack && (
                    <Box sx={{ mb: 4 }}>
                        <BackButton onClick={onBack} />
                    </Box>
                )}

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {children}
                </Box>
            </Container>
        </Box>
    );
};
