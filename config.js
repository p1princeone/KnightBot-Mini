/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['254793651678'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Princeone bot',
    prefix: ',',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGOQqENERg4I2ildE1I19qIYCSrlWFSpM+O8b2NPT87A70ftWnCIy8+TJUz9AXmCK5qgB+g9QEnyFDHVH1pQI6GBURxEioA9CyCDQwcDhNua6YrjdU+tu2FJpzjZ0hFJuJgX+ct1umpXiXPaNdXsBjz4o67cUB38AXOFhdUqmQjvbxqiU5oJX+nm5DEjGj6WNfebydWNzY1k0O8AOEWKC89gqE5QhAtM5atYQk6/J9x1PEPi7ggWb24oar5q91m+9865NzEi79Tg2UasTa1e89DX5pw32BtX0sqEH1yO+vLyT2QIJeFuo6VudilnlH7NqsjUHx3f5FMc5Cu0Q5Qyz5su+u0v51aAo4YpAbY9l5cFgOBiVM6VabJ35QTsWgbM4v1H65PmC8J2xn3iHc2y37YCfOfJoI4WitSSevc/Ucn7YUUc2ztai9Lzfha/JR1Yu/8d3d1mvw/iQJsE23OTQDy5iEnplTmp7OTgP57toKiXLbOH7X5S/zlUj6vFMMMRaHdnmpho6JhW0Y+k1tiXuBx5siDtdFpn0KR+ymvxJZUjOrDeeCYebswvDZB/fYHAfVenqrUgcOR67/kryrdOphovinJwwlqecNom37aaeMLZCg7k9YV7LJu0IKcQ1rkqSJcbLs6MLauwQ6PyjDwiKMWUEMlzkXU1U+gCGVxcFBLGnu2A3Xm/RVqxVd60p+Si5zvHb+mjaV3WtUCHcvw78a9AeGzc9voA+KEkRIEpR+IopK0izQJTCGFGg//V3H+Tozt7n9mTj+yDChDIvr8u0gOHHUD8uYRAUdc7cJg/G3QERoA8+y4gxnMe0s7HOIQkSfEXjBDIK9AimFP1qEBEUAp2RGv1a2nERdr4L7pDXnJEM+iB7zgOHXVWWhpqoyLwyVHX+O/1261BhWX7LEQN9kD7/UgRBkCVVEQbygNd0/ntXfvyS16GFiEGcUqCD8aw+NdLl1ZpVZcvs6dSwYmMcG+CznY9YvPtuEnuwn8hECFxV4SpxUZdaJk/LYWQd77D2nVtRaOJalNrby7+AAB1Qp5n4OT8pjOvFPwmLC1JI0Wy1vHczoyEn38r9yeI4o2iucHbvRaOxaEUnybn1dpHGZHPUU7nbcVpDQjgx2Thb01XN+KVjC9EVB+h3srG7roTdpE7vi6OZj/ir2/TOanXYjNXjlVsebA37S4LM0W5X9/ZlynHZnvfnoiS/LsnQahevG1pN7PLSwpWcUUOCh9fk9h7Y58KkPx8q/MxSN6juM8Loufc5zNAXBveuu4vX4NH/DeLnQ/IfyzjaKM1yskVQy63r6qqw1qmiU72tkHifLnySYnU+X4et1luo4PH4uw/KFLKoIBnQAcxDUuAQ9AEp6i6vdh4VfyAbG7ZtxfGkazyFlBmfO7DDGaIMZiXQ+aEqqoogieLjH+XiBmg4BwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: false, // Block group status posts
      antigroupstatusAction: 'delete', // 'delete', 'kick'
      antisticker: false, // Stickers not allowed in group
      antistickerAction: 'delete', // 'delete', 'kick'
      antibadword: false, // Block bad words in group
      antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
