import { Box, Typography } from '@mui/material';

interface LogoProps {
    variant?: 'light' | 'dark';
    className?: string;
}

export const Logo = ({ variant = 'dark', className }: LogoProps) => {
    const isDark = variant === 'dark';

    return (
        <Box className={`flex items-center gap-1 ${className}`}>
            <Typography
                variant="h4"
                component="div"
                sx={{
                    fontWeight: 800,
                    color: isDark ? 'accent-dark' : 'white',
                    letterSpacing: '-1px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                awa
                <Typography
                    component="span"
                    variant="h4"
                    sx={{
                        fontWeight: 800,
                        color: isDark ? 'accent-medium' : 'white',
                    }}
                >
                    bot
                </Typography>
            </Typography>
        </Box>
    );
};
