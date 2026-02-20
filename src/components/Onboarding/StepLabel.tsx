import { Box, Typography } from '@mui/material';

interface StepLabelProps {
    step: number;
}

export const StepLabel = ({ step }: StepLabelProps) => {
    return (
        <Box
            sx={{
                bgcolor: 'primary.light',
                color: 'primary.dark',
                borderRadius: '100px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1,
            }}

        >
            <Typography
                variant="caption"
                sx={{
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '1.8px',
                    fontSize: '18px',
                    lineHeight: '150%',
                }}
            >
                étape {step}
            </Typography>
        </Box>

    );
};
