import { Button as MuiButton, type ButtonProps as MuiButtonProps, styled } from '@mui/material';

interface CustomButtonProps extends MuiButtonProps {
    variant?: 'contained' | 'outlined' | 'text';
    designVariant?: 'gradient' | 'secondary';
}

const StyledButton = styled(MuiButton)<CustomButtonProps>(({ designVariant }) => ({
    textTransform: 'none',
    borderRadius: '10px',
    padding: '12px 16px',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.5,
    ...(designVariant === 'gradient' && {
        background: 'linear-gradient(82.6deg, #6D213C 1.56%, #FF335C 98.98%)',
        color: '#FFFFFF',
        border: 'none',
        '&:hover': {
            background: 'linear-gradient(82.6deg, #8A2B4C 1.56%, #FF4D70 98.98%)',
        },
    }),
    ...(designVariant === 'secondary' && {
        background: 'rgba(255, 51, 92, 0.1)',
        color: '#6D213C',
        border: '1px solid #6D213C',
        '&:hover': {
            background: 'rgba(255, 51, 92, 0.15)',
        },
    }),
}));

export const Button = ({ designVariant = 'gradient', children, ...props }: CustomButtonProps) => {
    return (
        <StyledButton designVariant={designVariant} {...props}>
            {children}
        </StyledButton>
    );
};
