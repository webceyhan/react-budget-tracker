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

export const Main = () => {
    return (
        <Card>
            <CardHeader
                title="Expense Tracker"
                subheader="Powered by Speechly"
            />
            <CardContent>
                <Typography align="center" variant="h5">
                    Total Balance $100
                </Typography>
                <Typography variant="subtitle1" mt={5}>
                    {/* InfoCard */}
                    try saying: add income for $100 in category salary for
                    monday ...
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent sx={{ pt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
