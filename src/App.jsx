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

            <BigTranscript placement="top" />
            <PushToTalkButtonContainer>
                <PushToTalkButton placement="bottom" captureKey=" " />
                <ErrorPanel />
            </PushToTalkButtonContainer>
            <IntroPopup />
        </Container>
    );
};
