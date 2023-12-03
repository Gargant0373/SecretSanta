## Secret Santa
### About
The project can be found at santa.gargant.dev. I made it for our group of friends so that we would have a random way of assigning secret Santas. You start by adding all email addresses on the website and then clicking Send Emails. Each email address gets another email that they have to gift something to. 

### Stack
SecretSanta is fully frontend; email sending is done with EmailJS. Since no server exists, I do not keep track of any data that users might input. 
The project is written in TypeScript, with React powering it all.

### Running the project
If you want to run your own instance of SecretSanta, you must start by cloning the repository. Afterwards, you can fill out your data in App.tsx with your EmailJS credentials. 

    const PUBLIC_KEY = ""; // YOUR PUBLIC KEY HERE
    const SERVICE_ID = ""; // YOUR SERVICE ID HERE
    const TEMPLATE_ID = ""; // YOUR TEMPLATE ID HERE

Running `npm run build` will output a singlepage website in the `dist` folder.
