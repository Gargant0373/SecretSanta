import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

function Info() {
    return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel-content"
                    id="panel-header"
                >
                    <Typography variant="h3">How does it work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" textAlign="justify">Enter your email address and click "Add" to add to the list. Afterwards the client will send out emails to everyone with whom they have to gift something to.</Typography>
                </AccordionDetails>
            </Accordion>
    );
}

export default Info;
