import { Card, CardHeader, CardContent, Typography } from '@mui/material';
// import { Doughnut } from 'react-chartjs-2';

import * as styles from './styles';

export const Details = ({ title }) => {
    return (
        <Card sx={title === 'Income' ? styles.income : styles.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">$50,000</Typography>
                {/* <Doughnut data="DATA" /> */}
            </CardContent>
        </Card>
    );
};
