import CloseIcon from '@mui/icons-material/Close';
import { IconButton, List, ListItem, ListItemText, Paper } from "@mui/material";

function EmailList(props: { emails: string[], setEmails: (emails: string[]) => void }) {
    const handleRemoveEmail = (indexToRemove: number) => {
        const updatedEmails = props.emails.filter((_, index) => index !== indexToRemove);
        props.setEmails(updatedEmails);
    };

    return (
        <Paper style={{ maxHeight: '250px', overflowY: 'auto', width: '300px' }}>
            <List>
                {props.emails.map((email, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={email} />
                        <IconButton
                            edge="end"
                            aria-label="remove"
                            onClick={() => handleRemoveEmail(index)}
                        >
                            <CloseIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default EmailList;
