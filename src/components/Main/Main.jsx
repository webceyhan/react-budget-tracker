import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Divider,
    Grid,
} from '@mui/material';

import * as classes from './styles';

export const Main = () => {
    return (
        <Card sx={classes.root}>
            <CardHeader
                title="Expense Tracker"
                subheader="Powered by Speechly"
            />
            <CardContent>
                <Typography align="center" variant="h5">
                    Total Balance $100
                </Typography>
                <Typography
                    variant="subtitle1"
                    style={{ lineHeight: '1.5em', marginTop: '20px' }}
                >
                    {/* InfoCard */}
                    try saying: add income for $100 in category salary for
                    monday ...
                </Typography>
                <Divider />
                {/* Form */}
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* <List/> */}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
