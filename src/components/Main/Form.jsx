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
import { dateToString, isValidDate, stringToDate } from '../../utils/common';
import { useTransactionContext } from '../../context/transaction';
import { typeCategoryMap } from '../../constants/categories';
import { useSpeechContext } from '@speechly/react-client';
import { parseSegment } from '../../utils/speech';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: new Date(),
};

export const Form = () => {
    const { addTransaction } = useTransactionContext();
    const [formData, setFormData] = useState(initialState);
    const [speechDone, setSpeechDone] = useState(false);
    const categories = typeCategoryMap[formData.type];
    const { segment } = useSpeechContext();

    const resetForm = () => setFormData(initialState);

    const createTransaction = () => {
        // validation
        if (!formData.category || formData.category === '') return;
        if (isNaN(formData.amount) || formData.amount <= 0) return;
        if (!isValidDate(formData.date)) return;

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
        // check final segment
        if (segment?.isFinal) {
            // extract intent from segment
            const { intent } = segment.intent;

            // check intent
            if (intent === 'create_transaction') {
                return createTransaction();
            } else if (intent === 'cancel_transaction') {
                return resetForm();
            }

            // parse data from segment
            const data = parseSegment(segment);
            setFormData((old) => ({ ...old, ...data }));
            setSpeechDone(true);
        }
    }, [segment]);

    /**
     * Speech callback to update form data
     * workaround: useState setter does not update the state immediately
     * so we cannot use it inside the first useEffect which has no dependency of formData
     * which causes formData state inside createTransaction to be the previous state.
     * 
     * Herefore we us second useEffect with additional state speechDone to update formData
     * after the speech is done in first useEffect.
     */
    useEffect(() => {
        if (!speechDone) return;

        // create transaction automatically
        if (
            formData.type &&
            formData.category &&
            formData.amount &&
            formData.date
        ) {
            createTransaction();
        }

        setSpeechDone(false);
    }, [speechDone, formData]);

    return (
        <Grid container spacing={2}>
            {/* <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    {segment && segment.words.map((w) => w.value).join(' ')}
                </Typography>
            </Grid> */}

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
