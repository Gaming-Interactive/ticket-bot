import { Trick } from "./trick/tricks.ts";
import * as DC from "npm:discord.js"

const client = new DC.Client( {
    intents: [
        DC.GatewayIntentBits.Guilds
    ]
})

const myTrick = new Trick(client);