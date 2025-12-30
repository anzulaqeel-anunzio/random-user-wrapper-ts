// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

import { RandomUserClient } from './src/index.js';

const client = new RandomUserClient();

async function runExample() {
    try {
        console.log("Fetching a random user...");
        const user = await client.getUser();
        console.log(`User: ${user.name.title} ${user.name.first} ${user.name.last}`);
        console.log(`Email: ${user.email}`);
        console.log(`Picture: ${user.picture.medium}`);
    } catch (error) {
        console.error(error);
    }
}

runExample();

// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel
