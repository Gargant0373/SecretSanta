import CloseIcon from '@mui/icons-material/Close';
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Participant } from "../types";

function EmailList(props: { participants: Participant[], setParticipants: (participants: Participant[]) => void }) {
    const handleRemoveParticipant = (indexToRemove: number) => {
        const updatedParticipants = props.participants.filter((_, index) => index !== indexToRemove);
        props.setParticipants(updatedParticipants);
    };

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper', overflowY: 'auto', maxHeight: 300 }}>
            {props.participants.map((participant, index) => (
                <ListItem
                    key={index}
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveParticipant(index)} color="error">
                            <CloseIcon />
                        </IconButton>
                    }
                    sx={{ 
                        mb: 1, 
                        borderRadius: 2, 
                        bgcolor: 'grey.50',
                        '&:hover': { bgcolor: 'grey.100' }
                    }}
                >
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'secondary.main' }}>
                            {participant.name.charAt(0).toUpperCase()}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                        primary={<Typography variant="subtitle1" fontWeight="bold">{participant.name}</Typography>}
                        secondary={participant.email} 
                    />
                </ListItem>
            ))}
            {props.participants.length === 0 && (
                <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ py: 4 }}>
                    No participants yet. Add some elves! 🧝
                </Typography>
            )}
        </List>
    );
}

export default EmailList;
