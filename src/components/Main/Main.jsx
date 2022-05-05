import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Divider,
    Grid,
} from '@mui/material';
import { Form } from './Form';
import { List } from './List';
import { useTransactionContext } from '../../context/transaction';

export const Main = () => {
    const { balance } = useTransactionContext();

    return (
        <Card>
            <CardHeader
                title="Expense Tracker"
                subheader="Powered by Speechly"
            />
            <CardContent sx={{ py: 0 }}>
                <Typography align="center" variant="h6">
                    Total Balance ${balance}
                </Typography>
                <Typography variant="body2" mt={2} color="GrayText">
                    {/* InfoCard */}
                    try saying: Add income for $100 in category salary for
                    monday ...
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Form />
            </CardContent>
            <CardContent sx={{ py: 0 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
