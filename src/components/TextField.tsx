import { TextField as MuiTextField, type TextFieldProps, styled } from '@mui/material';

const StyledTextField = styled(MuiTextField)(() => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        '& fieldset': {
            borderColor: '#6D213C',
        },
        '&:hover fieldset': {
            borderColor: '#FF335C',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#FF335C',
        },
    },
    '& .MuiInputBase-input': {
        color: '#252525',
        fontSize: '15px',
        padding: '12px 16px',
    },
}));

export const TextField = (props: TextFieldProps) => {
    return <StyledTextField variant="outlined" fullWidth {...props} />;
};
