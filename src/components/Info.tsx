import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";

function Info() {
    return (
        <Box>
            <Accordion sx={{ borderRadius: '12px !important', '&:before': { display: 'none' }, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', mb: 2 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel-content"
                    id="panel-header"
                >
                    <Typography variant="h6" color="primary" fontWeight="bold">How does it work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" textAlign="justify" color="text.secondary">
                        Enter the name and email address of each participant and click "Add Elf" to add them to the list. 
                        Once everyone is on the list, click "Send Emails". The system will randomly assign a Secret Santa to each person 
                        and send them an email with their assignment. No one (not even you!) will know who has whom until the gifts are exchanged! 🎁
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: '12px !important', '&:before': { display: 'none' }, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel-content-json"
                    id="panel-header-json"
                >
                    <Typography variant="h6" color="primary" fontWeight="bold">JSON Import Format</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" textAlign="justify" color="text.secondary" paragraph>
                        You can upload a list of participants using a .json file. The file should contain an array of objects with "name" and "email" properties:
                    </Typography>
                    <Box component="pre" sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 2, overflowX: 'auto', fontSize: '0.85rem', color: 'text.primary' }}>
{`[
  {
    "name": "Santa Claus",
    "email": "santa@northpole.com"
  },
  {
    "name": "Rudolph",
    "email": "rudolph@northpole.com"
  }
]`}
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default Info;
