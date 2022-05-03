import {
    TextField,
    Typography,
    Grid,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';

export const Form = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel id="type-label">Type</InputLabel>
                    <Select id="type" labelId="type-label">
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select id="category" labelId="category-label">
                        <MenuItem value="Salary">Salary</MenuItem>
                        <MenuItem value="Rent">Rent</MenuItem>
                        <MenuItem value="Food">Food</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <TextField
                    variant="standard"
                    type="number"
                    label="Amount"
                    fullWidth
                />
            </Grid>

            <Grid item xs={6}>
                <TextField
                    variant="standard"
                    type="date"
                    label="Date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>

            <Grid item xs={12}>
                <Button fullWidth variant="outlined" color="primary">
                    Create
                </Button>
            </Grid>
        </Grid>
    );
};
