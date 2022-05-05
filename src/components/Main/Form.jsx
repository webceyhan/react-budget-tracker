import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
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
import { dateToString, parseSegment, stringToDate } from '../../utils';
import { useTransactionContext } from '../../context/transaction';
import { typeCategoryMap } from '../../constants/categories';
import { useSpeechContext } from '@speechly/react-client';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: new Date(),
};

export const Form = () => {
    const { addTransaction } = useTransactionContext();
    const [formData, setFormData] = useState(initialState);
    const { segment } = useSpeechContext();
    const categories = typeCategoryMap[formData.type];

    const resetForm = () => setFormData(initialState);

    const createTransaction = () => {
        const transaction = {
            ...formData, // extract form data
            id: uuid(), // generate unique id
            amount: Number(formData.amount), // cast to number
        };

        // update context
        addTransaction(transaction);
        resetForm();
    };

    useEffect(() => {
        // quit if no segment
        if (segment && segment.isFinal) {
            // extract intent
            const { intent } = segment.intent;

            // check intent
            if (intent === 'create_transaction') {
                return createTransaction();
            } else if (intent === 'cancel_transaction') {
                return resetForm();
            }

            // fill form data
            resetForm();
            const parsedData = parseSegment(segment);
            setFormData({ ...formData, ...parsedData });
        }
    }, [segment]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    {segment && segment.words.map((w) => w.value).join(' ')}
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
                            setFormData({
                                ...formData,
                                category: '', // reset
                                type: e.target.value,
                            })
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
                        {categories.map((c) => (
                            <MenuItem key={c.type} value={c.type}>
                                {c.type}
                            </MenuItem>
                        ))}
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
