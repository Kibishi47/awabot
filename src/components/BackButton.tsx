import { Typography, Link } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface BackButtonProps {
    label?: string;
    href?: string;
    onClick?: () => void;
    className?: string;
}

export const BackButton = ({ label = 'Retour', href = '#', onClick, className }: BackButtonProps) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                color: 'accent-dark',
                textDecoration: 'none',
                '&:hover': {
                    color: 'accent-medium',
                },
            }}
            className={className}
        >
            <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {label}
            </Typography>
        </Link>
    );
};
