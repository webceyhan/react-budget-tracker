import { Grid, Container } from '@mui/material';
import { Main } from './components/Main.jsx';
import { Details } from './components/Details.jsx';

export const App = () => {
    return (
        <Container>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{ height: '100vh' }}
            >
                <Grid item xs={12} sm={4}>
                    <Details title="Income" />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Main />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Details title="Expense" />
                </Grid>
            </Grid>
        </Container>
    );
};
