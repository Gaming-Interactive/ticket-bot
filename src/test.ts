import {Client,GatewayIntentBits} from "npm:discord.js@latest"

const cl:Client = new Client({intents: [
    GatewayIntentBits.Guilds
]});

cl.on("ready",() => {
    console.log("Logging in as" + cl.user?.tag)
})


