import emailjs from '@emailjs/browser';
import { Button, Grid, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import ChristmasTheme from "../Theme";
import EmailList from "../components/EmailList";
import EmailReader from "../components/EmailReader";
import Info from '../components/Info';

const PUBLIC_KEY = ""; // YOUR PUBLIC KEY HERE
const SERVICE_ID = ""; // YOUR SERVICE ID HERE
const TEMPLATE_ID = ""; // YOUR TEMPLATE ID HERE

window.addEventListener("load", function () {
    emailjs.init(PUBLIC_KEY);
});

function assignSecretSanta(emails: string[]) {
    const shuffledEmails: string[] = [];

    let randomPermutation = Math.floor(Math.random() * emails.length);
    if (randomPermutation % emails.length == 0) randomPermutation += 1;
    for (let i = 0; i < emails.length; i++) {
        let index = (i + randomPermutation) % emails.length;
        shuffledEmails.push(emails[index]);
    }

    const secretSantaPairs: { [email: string]: string } = {};
    for (let i = 0; i < emails.length; i++) {
        secretSantaPairs[emails[i]] = shuffledEmails[i];
    }

    return secretSantaPairs;
}

function App() {
    const [emails, setEmails] = useState<string[]>([]);

    const sendEmails = () => {
        if (emails.length < 2) {
            alert("More people needed.");
            return;
        }
        const secretSantaPairs = assignSecretSanta(emails);
        for (let i = 0; i < emails.length; i++) {
            setTimeout(function () {
                let email = emails[i];
                console.log(email);
                emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                    email: secretSantaPairs[email],
                    name: email,
                }).then((result) => {
                    console.log(result.text);
                });
            }, i * 1000);
        }
    }
    return (
        <ThemeProvider theme={ChristmasTheme}>
            <Grid container spacing={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <img src="https://pngimg.com/d/santa_claus_PNG38508.png" height="200vh" width="auto" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h1">Santa's List</Typography>
                </Grid>
                <Grid item xs={8} md={4}>
                    <EmailReader setEmails={setEmails} emails={emails} />
                </Grid>
                <Grid item xs={12}>
                    <EmailList emails={emails} setEmails={setEmails} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary" onClick={(e) => {
                        e.preventDefault();
                        sendEmails();
                    }}>
                        Send Emails
                    </Button>
                </Grid>
                <Grid item xs={8} md={4}>
                    <Info />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default App;