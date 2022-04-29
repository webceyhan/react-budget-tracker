import { Grid } from '@mui/material';
import { Details } from './components/Details.jsx';

export const App = () => {
    return (
        <div>
            <Grid
                container
                spacing={0}
                alignItems="center"
                justifyContent="center"
                style={{ height: '100vh' }}
            >
                <Grid item xs={12} sm={4}>
                    <Details />
                </Grid>

                <Grid item xs={12} sm={4}>
                    main
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Details />
                </Grid>
            </Grid>
        </div>
    );
};
