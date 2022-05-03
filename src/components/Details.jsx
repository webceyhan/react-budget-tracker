import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { useTransactions } from '../hooks/useTransactions';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Details = ({ title }) => {
    const isIncome = title === 'Income';
    const { total, chartData } = useTransactions(title);

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
                <Typography variant="h5">${total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    );
};
