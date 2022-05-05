import { Snackbar, Alert } from '@mui/material';

export const CustomSnackbar = ({ open, setOpen }) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    elevation={6}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Transaction created successfully.
                </Alert>
            </Snackbar>
        </div>
    );
};
