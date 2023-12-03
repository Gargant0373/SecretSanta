import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function EmailList(props: { emails: string[], setEmails: (emails: string[]) => void }) {
    const handleRemoveEmail = (indexToRemove: number) => {
        const updatedEmails = props.emails.filter((_, index) => index !== indexToRemove);
        props.setEmails(updatedEmails);
    };

    return (
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
    );
}

export default EmailList;
