import emailjs from '@emailjs/browser';
import { Box, Button, Container, Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import ChristmasTheme from "../Theme";
import EmailList from "../components/EmailList";
import EmailReader from "../components/EmailReader";
import Info from '../components/Info';
import Footer from '../components/Footer';
import { Participant } from '../types';

const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;

window.addEventListener("load", function () {
    emailjs.init(PUBLIC_KEY);
});

function assignSecretSanta(participants: Participant[]) {
    const shuffledParticipants: Participant[] = [];

    let randomPermutation = Math.floor(Math.random() * participants.length);
    if (randomPermutation % participants.length == 0) randomPermutation += 1;
    for (let i = 0; i < participants.length; i++) {
        let index = (i + randomPermutation) % participants.length;
        shuffledParticipants.push(participants[index]);
    }

    const secretSantaPairs: { [email: string]: Participant } = {};
    for (let i = 0; i < participants.length; i++) {
        secretSantaPairs[participants[i].email] = shuffledParticipants[i];
    }

    return secretSantaPairs;
}

function App() {
    const [participants, setParticipants] = useState<Participant[]>([]);

    const sendEmails = () => {
        if (participants.length < 2) {
            alert("More people needed.");
            return;
        }
        const secretSantaPairs = assignSecretSanta(participants);
        for (let i = 0; i < participants.length; i++) {
            setTimeout(function () {
                let participant = participants[i];
                let target = secretSantaPairs[participant.email];
                console.log(`Sending to ${participant.email}`);
                emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                    santa_name: participant.name,
                    santa_email: participant.email,
                    target_name: target.name,
                    target_email: target.email,
                    to_name: participant.name,
                    to_email: participant.email,
                    email: participant.email,
                    reply_to: participant.email,
                }, PUBLIC_KEY).then((result) => {
                    console.log(result.text);
                }).catch((error) => {
                    console.error("EmailJS Error:", error);
                    alert(`Failed to send email to ${participant.name}. Check console for details.`);
                });
            }, i * 1000);
        }
    }
    return (
        <ThemeProvider theme={ChristmasTheme}>
            <Box sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default',
                py: 4,
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Container maxWidth="lg">
                    <Paper elevation={1} sx={{ p: { xs: 2, md: 4 }, position: 'relative', overflow: 'hidden' }}>
                        <Box sx={{ position: 'absolute', top: -20, right: -20, opacity: 0.05, transform: 'rotate(15deg)', pointerEvents: 'none' }}>
                             <img src="https://pngimg.com/d/santa_claus_PNG38508.png" height="300" alt="" />
                        </Box>

                        <Grid container spacing={4} alignItems="center" justifyContent="center">
                            <Grid item xs={12} textAlign="center">
                                <img src="https://pngimg.com/d/santa_claus_PNG38508.png" height="120" style={{marginBottom: '1rem'}} alt="Santa" />
                                <Typography variant="h1" gutterBottom>Secret Santa</Typography>
                                <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                                    Spread the joy of giving! 🎁
                                </Typography>
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                                <Paper variant="outlined" sx={{ p: 3, height: '100%', borderColor: 'divider' }}>
                                    <Typography variant="h6" gutterBottom color="primary" fontWeight="bold">Add Participants</Typography>
                                    <EmailReader setParticipants={setParticipants} participants={participants} />
                                </Paper>
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                                <Paper variant="outlined" sx={{ p: 3, height: '100%', minHeight: 300, display: 'flex', flexDirection: 'column', borderColor: 'divider' }}>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                        <Typography variant="h6" color="secondary" fontWeight="bold">The List</Typography>
                                        <Typography variant="caption" sx={{ bgcolor: 'secondary.main', color: 'white', px: 1, py: 0.5, borderRadius: 1 }}>
                                            {participants.length} Elves
                                        </Typography>
                                    </Box>
                                    <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                                        <EmailList participants={participants} setParticipants={setParticipants} />
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} textAlign="center" sx={{ mt: 2 }}>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    size="large"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        sendEmails();
                                    }}
                                    sx={{ px: 6, py: 1.5, fontSize: '1.2rem' }}
                                >
                                    🎅 Send Emails 🎄
                                </Button>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Info />
                            </Grid>
                        </Grid>
                    </Paper>
                    <Footer />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;