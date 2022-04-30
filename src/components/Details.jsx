import { Card, CardHeader, CardContent, Typography } from '@mui/material';
// import { Doughnut } from 'react-chartjs-2';

export const Details = ({ title }) => {
    const isIncome = title === 'Income';

    return (
        <Card
            sx={{
                borderBottomWidth: '10px',
                borderBottomStyle: 'solid',
                borderBottomColor: isIncome ? 'success.light' : 'error.light',
            }}
        >
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">$50,000</Typography>
                {/* <Doughnut data="DATA" /> */}
            </CardContent>
        </Card>
    );
};
