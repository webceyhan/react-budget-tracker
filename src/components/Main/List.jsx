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

export const List = () => {
    const transactions = [
        {
            id: 1,
            type: 'Income',
            category: 'Salary',
            amount: 100,
            date: '2020-01-01',
        },
        {
            id: 2,
            type: 'Expense',
            category: 'Rent',
            amount: 100,
            date: '2020-01-01',
        },
        {
            id: 3,
            type: 'Expense',
            category: 'Food',
            amount: 100,
            date: '2020-01-01',
        },
    ];

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
