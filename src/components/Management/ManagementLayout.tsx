import { Box, Container, IconButton } from '@mui/material';
import { Logo } from '../Logo';
import MenuIcon from '@mui/icons-material/Menu';

interface ManagementLayoutProps {
    children: React.ReactNode;
}

export const ManagementLayout = ({ children }: ManagementLayoutProps) => {
    return (
        <Box sx={{ bgcolor: 'var(--color-accent-light)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Container maxWidth="sm" sx={{ py: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', mb: 6 }}>
                    <IconButton
                        sx={{ position: 'absolute', left: 0, color: 'accent.dark' }}
                        onClick={() => console.log('Toggle menu')}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo size="small" />
                </Box>

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {children}
                </Box>
            </Container>
        </Box>
    );
};
