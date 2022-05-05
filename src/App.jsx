import { Grid, Container } from '@mui/material';
import { Main } from './components/Main/Main.jsx';
import { Details } from './components/Details.jsx';
import {
    BigTranscript,
    ErrorPanel,
    IntroPopup,
    PushToTalkButton,
    PushToTalkButtonContainer,
} from '@speechly/react-ui';

// response grid styles
const sxGrid1 = { order: { xs: 2, sm: 1 } };
const sxGrid2 = { order: { xs: 1, sm: 2 } };
const sxGrid3 = { order: { xs: 3, sm: 3 } };

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
                <Grid item xs={12} sm={4} sx={sxGrid1}>
                    <Details title="Income" />
                </Grid>

                <Grid item xs={12} sm={4} sx={sxGrid2}>
                    <Main />
                </Grid>

                <Grid item xs={12} sm={4} sx={sxGrid3}>
                    <Details title="Expense" />
                </Grid>
            </Grid>

            <BigTranscript placement="top" />
            <PushToTalkButtonContainer>
                <PushToTalkButton placement="bottom" captureKey=" " />
                <ErrorPanel />
            </PushToTalkButtonContainer>
            <IntroPopup />
        </Container>
    );
};
