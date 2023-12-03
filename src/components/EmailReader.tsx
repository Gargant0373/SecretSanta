import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

function EmailReader(props: { setEmails: (emails: string[]) => void, emails: string[] }) {
    const [email, setEmail] = useState<string>("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidEmail = (input: string): boolean => {
        return emailRegex.test(input);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField id="textField"
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setEmail("");
                        if (props.emails.includes(email)) {
                            setEmail("");
                            return;
                        }
                        if (isValidEmail(email)) {
                            props.setEmails([...props.emails, email]);
                            return;
                        }
                        alert("Please enter a valid email address");
                    }}
                >
                    Add
                </Button>
            </Grid>
        </Grid>
    );
}

export default EmailReader;
