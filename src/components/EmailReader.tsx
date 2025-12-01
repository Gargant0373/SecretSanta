import { Button, Grid, TextField, InputAdornment } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useState } from "react";
import { Participant } from "../types";

function EmailReader(props: { setParticipants: (participants: Participant[]) => void, participants: Participant[] }) {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidEmail = (input: string): boolean => {
        return emailRegex.test(input);
    };

    const handleAddParticipant = () => {
        if (!name.trim()) {
            alert("Please enter a name");
            return;
        }
        if (props.participants.some(p => p.email === email)) {
            setEmail("");
            setName("");
            return;
        }
        if (isValidEmail(email)) {
            props.setParticipants([...props.participants, { name: name.trim(), email: email.trim() }]);
            setEmail("");
            setName("");
            return;
        }
        alert("Please enter a valid email address");
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result as string;
                if (file.name.toLowerCase().endsWith('.json')) {
                    try {
                        const parsedData = JSON.parse(content);
                        if (Array.isArray(parsedData) && parsedData.every(item => 
                            typeof item === 'object' && 
                            item !== null && 
                            typeof item.name === 'string' && 
                            typeof item.email === 'string' && 
                            isValidEmail(item.email)
                        )) {
                            // Filter out duplicates that are already in the list
                            const newParticipants = parsedData.filter((p: Participant) => !props.participants.some(existing => existing.email === p.email));
                            props.setParticipants([...props.participants, ...newParticipants]);
                        } else {
                            alert("Invalid JSON format. Expected an array of objects with 'name' and 'email' properties.");
                        }
                    } catch (error) {
                        alert("Error parsing JSON file.");
                    }
                } else if (file.name.toLowerCase().endsWith('.csv')) {
                    try {
                        const lines = content.split(/\r?\n/);
                        const newParticipants: Participant[] = [];
                        for (const line of lines) {
                            // Simple CSV split, assumes no commas in name
                            const parts = line.split(',');
                            if (parts.length >= 2) {
                                const name = parts[0].trim();
                                const email = parts[1].trim();
                                if (name && email && isValidEmail(email)) {
                                    if (!props.participants.some(p => p.email === email) && !newParticipants.some(p => p.email === email)) {
                                        newParticipants.push({ name, email });
                                    }
                                }
                            }
                        }
                        if (newParticipants.length > 0) {
                            props.setParticipants([...props.participants, ...newParticipants]);
                        } else {
                            alert("No valid participants found in CSV. Format should be: name,email");
                        }
                    } catch (error) {
                        alert("Error parsing CSV file.");
                    }
                } else {
                    alert("Unsupported file type. Please upload a .json or .csv file.");
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Name"
                    placeholder="e.g. Santa Claus"
                    variant="outlined"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><PersonIcon color="action" /></InputAdornment>,
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField id="textField"
                    fullWidth
                    label="Email"
                    placeholder="santa@northpole.com"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddParticipant();
                        }
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><EmailIcon color="action" /></InputAdornment>,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    startIcon={<AddIcon />}
                    onClick={handleAddParticipant}
                >
                    Add Elf
                </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button
                    fullWidth
                    variant="outlined"
                    component="label"
                    startIcon={<UploadFileIcon />}
                    sx={{ whiteSpace: 'nowrap' }}
                >
                    Load File
                    <input
                        type="file"
                        hidden
                        accept=".json,.csv"
                        onChange={handleFileUpload}
                    />
                </Button>
            </Grid>
        </Grid>
    );
}

export default EmailReader;
