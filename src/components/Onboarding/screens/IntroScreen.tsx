import { Box } from '@mui/material';
import { Logo } from '../../Logo';
import { useEffect } from 'react';

interface IntroScreenProps {
    onNext: () => void;
}

export const IntroScreen = ({ onNext }: IntroScreenProps) => {
    useEffect(() => {
        const timer = setTimeout(onNext, 2000);
        return () => clearTimeout(timer);
    }, [onNext]);

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--background-image-gradient-primary)'
            }}
            onClick={onNext}
        >
            <Logo size="large" variant="light" />
        </Box>
    );
};
