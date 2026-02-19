import { Box, Typography } from '@mui/material';

interface BadgeProps {
    label: string;
    className?: string;
}

export const Badge = ({ label, className }: BadgeProps) => {
    return (
        <Box
            className={`inline-flex items-center justify-center px-3 py-1 bg-[rgba(255,51,92,0.1)] border border-accent-dark rounded-[30px] ${className}`}
        >
            <Typography
                variant="caption"
                sx={{
                    color: 'neutral-noir',
                    fontWeight: 500,
                    fontSize: '14px',
                }}
            >
                {label}
            </Typography>
        </Box>
    );
};
