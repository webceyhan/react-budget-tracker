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
import { formatDate } from '../../utils/common';

export const List = () => {
    const { transactions, deleteTransaction } = useTransactionContext();

    return (
        <MUIList dense={false} sx={{ maxHeight: 220, overflow: 'auto' }}>
            {transactions.map((tx) => (
                <Slide
                    direction="down"
                    in
                    mountOnEnter
                    unmountOnExit
                    key={tx.id}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                sx={{
                                    color: 'white',
                                    bgcolor:
                                        tx.type === 'Income'
                                            ? 'success.main'
                                            : 'error.main',
                                }}
                            >
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText
                            primary={tx.category}
                            secondary={`${tx.amount} on ${formatDate(tx.date)}`}
                        />
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => deleteTransaction(tx.id)}
                            >
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    );
};
