`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const ꜰᴜᴄᴋ = require(`./oShit`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
const cleanRF = require(`./cleanRF`);
const vers = require(`../package.json`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = speed() - Timestamp;
const Ping = Pong.toFixed(4);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
exports.mainMizukigif = async (ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, 𝓜𝖎𝖟𝖚ӄ𝖎Text) => {
  try {
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var personreceived = Receiver.substring(0, Receiver.length - 15);
      var 𝓜𝖎𝖟𝖚ӄ𝖎ID = chat.message.extendedTextMessage.contextInfo.stanzaId;
    } else {
      var 𝓜𝖎𝖟𝖚ӄ𝖎ID = chat.key.id;
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    }

    const downloader = await new Downloader({
      url: `https://i.postimg.cc/zvmqDTF7/ezgif-com-gif-maker.gif`,
      directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
      fileName: `𝓜𝖎𝖟𝖚ӄ𝖎_${ꜱᴇɴᴅᴇʀɪᴅ}_${𝓜𝖎𝖟𝖚ӄ𝖎ID}.gif`,
      cloneFiles: false,
    });
    try {
      await downloader.download();
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
    }

    await ffmpeg(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/𝓜𝖎𝖟𝖚ӄ𝖎_${ꜱᴇɴᴅᴇʀɪᴅ}_${𝓜𝖎𝖟𝖚ӄ𝖎ID}.gif`)
      .outputOptions([
        `-pix_fmt yuv420p`,
        `-c:v libx264`,
        `-movflags +faststart`,
        `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
      ])
      .save(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/𝓜𝖎𝖟𝖚ӄ𝖎_${ꜱᴇɴᴅᴇʀɪᴅ}_${𝓜𝖎𝖟𝖚ӄ𝖎ID}.mp4`)
      .on(`end`, async () => {
        const media = await ӄʀǟӄɨռʐ
          .prepareMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            fs.readFileSync(
              `./ʍɨʐʊӄɨ🗑️ȶɛʍք/𝓜𝖎𝖟𝖚ӄ𝖎_${ꜱᴇɴᴅᴇʀɪᴅ}_${𝓜𝖎𝖟𝖚ӄ𝖎ID}.mp4`
            ),
            MessageType.video,
            {
              mimetype: Mimetype.gif,
            }
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              contentText: `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, @${ꜱᴇɴᴅᴇʀeceived},
              
              
====<⚡>${𝓜𝖎𝖟𝖚ӄ𝖎Text}`,
              footerText: `(ƈ)𝐌𝐢𝐳𝐮𝐤𝐢🍹𝐁𝐨𝐭 _${vers.vers}_\n📅ᴅᴀᴛᴇ: _${Clock}_`,
              buttons: [
                {
                  buttonId: `${ᴋᴇɪ}menu`,
                  buttonText: { displayText: `${ᴋᴇɪ}menu` },
                  type: 1,
                },
              ],
              headerType: 5,
              videoMessage: media.message.videoMessage,
            },
            MessageType.buttonsMessage,
            {
              quoted: chat,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
            }
          )
          .then(
            cleanRF.cleanRF(
              `./ʍɨʐʊӄɨ🗑️ȶɛʍք/𝓜𝖎𝖟𝖚ӄ𝖎_${ꜱᴇɴᴅᴇʀɪᴅ}_${𝓜𝖎𝖟𝖚ӄ𝖎ID}.mp4`,
              `./ʍɨʐʊӄɨ🗑️ȶɛʍք/𝓜𝖎𝖟𝖚ӄ𝖎_${ꜱᴇɴᴅᴇʀɪᴅ}_${𝓜𝖎𝖟𝖚ӄ𝖎ID}.gif`
            )
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
      })
      .on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
        console.log(ℓαвєяяσя);
      });
  } catch (ℓαвєяяσя) {
    await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
    console.log(
      `⬡==========================⬡    🍁 ` +
        ℓαвєяяσя +
        `🍁    ⬡==========================⬡`
    );
  }
};
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
