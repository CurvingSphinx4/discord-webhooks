# Discord Webhooks Manager 

<div align="center">
    <p>
        <a href="https://discord.gg//ReNGph5"><img src="https://discordapp.com/api/guilds/727924797895606303/embed.png" alt="Discord" /></a>
    </p>
</div>

<div align='center'>
    <p>
        <img src="https://discord.c99.nl/widget/theme-2/511511769034784768.png"/>
    </p>
</div>

<div align='center'>
    <p>
        <img src="https://discord.c99.nl/widget/theme-1/100690330336129024.png"/>
    </p>
</div>

This package creates an easy way to send webhooks, *as well as providing fallbacks if the Discord Client does not have the proper permissions*.

*If the Discord Client does not have the permission `Manage Webhooks`, it simply sends a normal message instead, causing no issues and working seamlessly*

## Documentation

---
Param | Type | Optional | Default | Description
--- | --- | --- | --- | ---
channel | `textChannel` | false | *none* | The channel to send the webhook to
message | `string` **or** `embed` | false | *none* | The message or embed to send
options | `object` | true | *none* | The options for the webhook
options.name | `string` | true | Package Name | The title of the webhook
options.icon | `iconURL` | true | *Webhook Icon* | The icon of the webhook

## Example: Code

---

Normal Message

```js
    let hook = require('@picklerickdev/discord-webhooks')
    hook(message.channel, 'Hello', {
        name: 'Discord Webhook',
        icon: 'https://i.imgur.com/X9eAmHm.png'
    })
```

Embed

```js
    let hook = require('@picklerickdev/discord-webhooks')
    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Discord Webhook')
        .setDescription('This is a Discord Webhook')

    hook(message.channel, embed, {
        name: 'Discord Webhook',
        icon: 'https://i.imgur.com/X9eAmHm.png'
    })
```

## Example: Results
---
Message Webhook

<div align='left'>
    <img src='https://cdn.picklerick.tk/webhooks/message.png' alt='message-webhook'/>
</div>

Embed Webhook

<div align='left'>
    <img src='https://cdn.picklerick.tk/webhooks/embed.png' alt='message-webhook'/>
</div>
