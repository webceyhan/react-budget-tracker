import { v4 as uuid } from 'uuid';
import { useState } from 'react';
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
import { useTransactionContext } from '../../context/transaction';

// helpers for date-input
const dateToString = (date) => date.toISOString().substring(0, 10);
const stringToDate = (date) => new Date(date);

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: new Date(),
};

export const Form = () => {
    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useTransactionContext();

    const createTransaction = () => {
        const transaction = {
            ...formData, // extract form data
            amount: Number(formData.amount), // cast to number
            id: uuid(), // generate unique id
        };

        // update context
        addTransaction(transaction);

        // reset form
        setFormData(initialState);
    };

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
                    <Select
                        id="type"
                        labelId="type-label"
                        value={formData.type}
                        onChange={(e) =>
                            setFormData({ ...formData, type: e.target.value })
                        }
                    >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        id="category"
                        labelId="category-label"
                        value={formData.category}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                category: e.target.value,
                            })
                        }
                    >
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
                    value={formData.amount}
                    onChange={(e) =>
                        setFormData({ ...formData, amount: e.target.value })
                    }
                />
            </Grid>

            <Grid item xs={6}>
                <TextField
                    variant="standard"
                    type="date"
                    label="Date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={dateToString(formData.date)}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            date: stringToDate(e.target.value),
                        })
                    }
                />
            </Grid>

            <Grid item xs={12}>
                <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onClick={createTransaction}
                >
                    Create
                </Button>
            </Grid>
        </Grid>
    );
};
