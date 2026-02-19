import { Box, Container } from '@mui/material';
import { Logo } from '../Logo';

interface ManagementLayoutProps {
    children: React.ReactNode;
}

export const ManagementLayout = ({ children }: ManagementLayoutProps) => {
    return (
        <Box sx={{ bgcolor: 'var(--color-accent-light)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Container maxWidth="sm" sx={{ py: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 6 }}>
                    <Logo size="small" />
                </Box>

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {children}
                </Box>
            </Container>
        </Box>
    );
};
