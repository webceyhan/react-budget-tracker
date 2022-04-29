import { Card, CardHeader, CardContent, Typography } from '@mui/material';

import * as classes from './styles';

export const Main = () => {
    return (
        <Card sx={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
            <CardContent>
                <Typography variant="h5">$50,000</Typography>
            </CardContent>
        </Card>
    );
};
