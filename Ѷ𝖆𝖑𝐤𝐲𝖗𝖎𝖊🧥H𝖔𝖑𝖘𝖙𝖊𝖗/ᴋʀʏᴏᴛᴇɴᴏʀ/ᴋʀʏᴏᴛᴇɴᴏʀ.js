("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
let fs = require(`fs`);
let chalk = require(`chalk`);
let FFmpeg = require(`fluent-ffmpeg`);
const { TenorMaker } = require(`./TenorMaker`);
let { DownloaderHelper } = require("node-downloader-helper");
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
exports.ᴋʀʏᴏᴛᴇɴᴏʀ = async (ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, ɮօɖʏ) => {
async function CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ) {
let DL = new DownloaderHelper(ᴀɴɪᴍᴇʟɪɴᴋ, "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕", {
fileName: `${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`,
retry: true,
});
await DL.on("end", async () => {
await FFmpeg(ɢᴏᴛꜰɪʟᴇ)
.outputOptions([
"-pix_fmt yuv420p",
"-c:v libx264",
"-movflags +faststart",
"-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
])
.save(ɢɪᴠᴇꜰɪʟᴇ)
.on("end", async () => {
await ӄ𝖚𝖓𝖆𝖎
.sendMessage(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
{
video: fs.readFileSync(ɢɪᴠᴇꜰɪʟᴇ),
gifPlayback: true,
mentions: [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender],
caption: `*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*


╔══「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐏𝐫𝐨𝐭𝐨® 」
║*❣️ ꜰᴏʀ:* @${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.split(`@`)[0] || ""}
╚═══════╝

ᴀᴜᴛᴏ ᴀɪ ɢɪꜰ
ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ`,
},
{ quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 }
)
.then(fs.unlinkSync(ɢɪᴠᴇꜰɪʟᴇ, ɢᴏᴛꜰɪʟᴇ))
.catch((𝕰𝖗𝖗𝖔𝖗) => console.log(chalk.red(𝕰𝖗𝖗𝖔𝖗)));
return;
});
});
await DL.on("error", (𝕰𝖗𝖗𝖔𝖗) => {
return console.log(chalk.red(𝕰𝖗𝖗𝖔𝖗));
});
await DL.start().catch((𝕰𝖗𝖗𝖔𝖗) => {
return console.log(chalk.red(𝕰𝖗𝖗𝖔𝖗));
});
}
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
if (ɮօɖʏ.includes("angry")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("angry");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("baka")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("baka");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("bonk")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("bonk");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("bully")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("bully");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("bye")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("bye");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("chase")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("chase");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("cheer")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("cheer");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("cringe")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("cringe");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("dab")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("dab");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("dance")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("dance");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("die")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("die");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("facepalm")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("facepalm");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("palm")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("facepalm");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("face")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("facepalm");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("feed")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("feed");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("food")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("food");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("glomp")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("glomp");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("hate")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("hate");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("hold")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("hold");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("kill")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("kill");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("death")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("kill");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("lick")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("lick");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("love")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("love");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("lurk")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("lurk");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("nervous")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("nervous");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("nom")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("nom");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("nope")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("nope");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("no")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("nope");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("nuzzle")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("nuzzle");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("panic")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("panic");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("peck")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("peck");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("pout")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("pout");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("run")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("run");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("shoot")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("shoot");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("shrug")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("shrug");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("sip")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("sip");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("drink")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("sip");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("sleep")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("sleep");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("sleepy")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("sleep");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("sleept")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("sleep");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("dream")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("sleep");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("smug")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("smug");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("stab")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("stab");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("knife")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("stab");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("stare")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("stare");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("look")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("stare");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("tease")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("tease");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("thumbsup")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("thumbsup");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("thumbs")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("thumbsup");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("thumb")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("thumbsup");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("tickle")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("tickle");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("fingers")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("tickle");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("finger")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("tickle");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
("|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|");
} else if (ɮօɖʏ.includes("wag")) {
let ᴀɴɪᴍᴇʟɪɴᴋ = TenorMaker("wag");
let ɢᴏᴛꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.gif`;
let ɢɪᴠᴇꜰɪʟᴇ = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊⚠️𝕿𝖊𝖒𝖕/${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp4`;
console.log(chalk.green("Sending AI Gif"));
return await CreateFile(ᴀɴɪᴍᴇʟɪɴᴋ, ɢᴏᴛꜰɪʟᴇ, ɢɪᴠᴇꜰɪʟᴇ);
}
};
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
