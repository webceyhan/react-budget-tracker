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
import { dateToString, stringToDate } from '../../utils/date';
import { useTransactionContext } from '../../context/transaction';
import {
    expenseCategories,
    incomeCategories,
    typeCategoryMap,
} from '../../constants/categories';
import { useSpeechContext } from '@speechly/react-client';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: new Date(),
};

export const Form = () => {
    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useTransactionContext();
    const categories = typeCategoryMap[formData.type];
    const { segment } = useSpeechContext();

    const resetForm = () => setFormData(initialState);

    const createTransaction = () => {
        const transaction = {
            ...formData, // extract form data
            amount: Number(formData.amount), // cast to number
            id: uuid(), // generate unique id
        };

        // update context
        addTransaction(transaction);
        resetForm();
    };

    useEffect(() => {
        // quit if no segment
        if (segment) {
            const { intent } = segment.intent;

            if (intent === 'add_income') {
                setFormData({ ...formData, type: 'Income' });
            } else if (intent === 'add_expense') {
                setFormData({ ...formData, type: 'Expense' });
            } else if (segment.isFinal && intent === 'create_transaction') {
                return createTransaction();
            } else if (segment.isFinal && intent === 'cancel_transaction') {
                return resetForm();
            }

            // update form data
            segment.entities.forEach(({ type, value }) => {
                switch (type) {
                    case 'amount':
                        setFormData({ ...formData, amount: value });
                        break;

                    case 'category': {
                        // value is in capital case, so we should convert to Ucfirst
                        const category =
                            value.charAt(0).toUpperCase() +
                            value.slice(1).toLowerCase();

                        if (incomeCategories.includes(category)) {
                            setFormData({
                                ...formData,
                                type: 'Income',
                                category,
                            });
                        } else if (expenseCategories.includes(category)) {
                            setFormData({
                                ...formData,
                                type: 'Expense',
                                category,
                            });
                        }
                        break;
                    }

                    // case 'date':
                    //     setFormData({ ...formData, date: value });
                    //     break;

                    default:
                        break;
                }
            });
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
