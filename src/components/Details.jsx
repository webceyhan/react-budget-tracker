import { Card, CardHeader, CardContent, Typography } from '@mui/material';
// import { Doughnut } from 'react-chartjs-2';

import * as styles from './styles';

export const Details = () => {
    return (
        <Card>
            <CardHeader title="Income" sx={styles.income} />
            <CardContent>
                <Typography variant="h5">$50,000</Typography>
                {/* <Doughnut data="DATA" /> */}
            </CardContent>
        </Card>
    );
};
