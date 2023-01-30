import * as DC from "npm:discord.js"
export class Trick {
    private bot:DC.Client

    constructor(client:DC.Client) {
        this.bot = client
    }

    deattach() {
        if (!this.bot) {
            return
        }

        // deattach me

    }

}