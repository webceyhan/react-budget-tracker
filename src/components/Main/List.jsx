import {
    Avatar,
    IconButton,
    List as MUIList,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Slide,
} from '@mui/material';
import { Delete, MoneyOff } from '@mui/icons-material';
import { useTransactionContext } from '../../context/transaction';

export const List = () => {
    const { transactions } = useTransactionContext();

    return (
        <MUIList dense={false} sx={{ maxHeight: 220, overflow: 'auto' }}>
            {transactions.map((transaction) => (
                <Slide
                    direction="down"
                    in
                    mountOnEnter
                    unmountOnExit
                    key={transaction.id}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                sx={{
                                    color: 'white',
                                    bgcolor:
                                        transaction.type === 'Income'
                                            ? 'success.main'
                                            : 'error.main',
                                }}
                            >
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText
                            primary={transaction.category}
                            secondary={`${transaction.amount} on ${transaction.date}`}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    );
};
