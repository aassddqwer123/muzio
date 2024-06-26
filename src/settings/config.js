require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "BOTTOKEN", // <==== PASTE YOU TOKEN
    prefix: process.env.PREFIX || "f?", // <==== SET YOU PRERIX BOT [ OWNER COMMANDS ]
    color: process.env.EMBED_COLOR || "#c50632", // <==== YOU EMBEDED HEX COLOR
    owner: process.env.OWNER_ID || "788519608428134443", // <==== BOTS OWNER ID
    guildLogs: process.env.GUILD_LOGS || "1223798168467013634", // <==== YOUR SERVER JOIN LEFT LOGS CHANNEL ID
    leaveTimeout: process.env.LEAVE_TIMEOUT || "20000", // <==== SET LEAVE TIMEOUT WHEN BOT WAS ALONE || 1000 = 1sec
    disableYouTube: parseBoolean(process.env.DISABLE_YOUTUBE || "false"), // <==== SET "TRUE OR FALSE" | ENABLE/DISABLE YOUTUBE FEATURES. DISABLING THIS WILL MAKE "AUTOPLAY" COMMANDS USELESS!!!

    // ⬇⬇⬇ PORU DETAILS
    playSource: process.env.PLAY_SOURCE || "ytsearch", // <==== SET YOUR PLAY SOURCE || "ytsearch","ytmsearch","scsearch"
    poruOptions: {
        defaultPlatform: process.env.DEFAULT_SOURCE || "ytsearch", // <==== SET DEFAULT SOURCE || "ytsearch","ytmsearch","scsearch"
        clientID: process.env.SPOTIFY_ID || "828d591a845d4e439a5d79fe1c32bd1f", // <==== SPOTIFY CLIENT ID
        clientSecret: process.env.SPOTIFY_SECRET || "ba54b365d7934431ae241d14fc81797f", // <==== SPOTIFY CLIENT SECRET
        reconnectTries: 5, // <==== TOTAL ATTEMPS TO TRY IF RECONNECT FAILED. YOU CAN CHANGE IT TO "Infinity" FOR UNLIMITED ATTEMPS.
        playlistLimit: 2, // <==== 1 = 100 TRACKS
        albumLimit: 2, // <==== 1 = 50 TRACKS
        artistLimit: 2, // <==== 1 = 50 TRACKS
        searchMarket: "us",
    },
    nodes: [
        {
            name: process.env.NODE_NAME1 || "Node 1", // lavalink node name (anything you want)
            host: process.env.NODE_HOST1 || "lavalink.ddns.net", // <==== LAVALINK NAME HOST
            port: parseInt(process.env.NODE_PORT1 || "2433"), // <==== LAVALINK PORT
            password: process.env.NODE_PASSWORD1 || "discord.gg/FqEQtEtUc9", // <==== PASSWORD/AUTH
            secure: parseBoolean(process.env.NODE_SECURE1 || "false"), // <==== LAVALINK SECURE "true/false"
            regions: process.env.NODE_REGIONS1 || ["singapore"], // <==== AVAILABLE LAVALINK REGIONS [ "singapore","indonesian","japan"," ]
        },
        {
            name: process.env.NODE_NAME2 || "Node 2", // lavalink node name (anything you want)
            host: process.env.NODE_HOST2 || "lavalink3.alfari.id", // <==== LAVALINK NAME HOST
            port: parseInt(process.env.NODE_PORT2 || "80"), // <==== LAVALINK PORT
            password: process.env.NODE_PASSWORD2 || "catfein", // <==== PASSWORD/AUTH
            secure: parseBoolean(process.env.NODE_SECURE2 || "false"), // <==== LAVALINK SECURE "true/false"
            regions: process.env.NODE_REGIONS2 || ["singapore"], // <==== AVAILABLE LAVALINK REGIONS [ "singapore","indonesian","japan"," ]
        }
    ],

    // ⬇⬇⬇ LINK BOTS DETAILS
    mongoUri: process.env.MONGO_URI || "mongodb+srv://pfcjcvifchy:OuWaf9gAfv3MEIyk@cluster0.yaizyfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", // <==== YOUR MONGODB LINK
    supportUrl: process.env.SUPPORT_URL || "https://discord.gg/mo-n", // <==== YOUR SUPPORT SERVER LINK
    voteUrl: process.env.VOTE_URL || "https://www.gearhost.my.id/", // <==== YOUR VOTE URL
    inviteUrl: process.env.INVITE_URL || "https://discord.com/api/oauth2/authorize?client_id=1122883732303511583&permissions=8&scope=bot+applications.commands", // <==== YOUR BOT INVITE LINK
    imageUrl: process.env.IMAGE_URL || "https://i.imgur.com/HB32QqX.png", // <==== YOUR IMAGE LINK 
};

function parseBoolean(value) {
    if (typeof value === "string") {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}


/**
 * @INFO
 * Bot Coded by Science Gear | https://www.youtube.com/c/ScienceGearYT
 * @INFO
 *  Muzio Bot | https://dsc.gg/sciencegear
 * @INFO
 * Don't Remove Credits
 * @INFO
 */
