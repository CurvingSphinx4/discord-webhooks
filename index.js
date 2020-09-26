module.exports = async function(channel, message, options) {
    const init = new Promise(async resolve  => {
        async function sendHook(hook, message, options) {

            if (typeof message !== 'string' && ['RichEmbed', 'MessageEmbed'].includes(message.constructor.name)) {
                options.embeds = [message];
                message = null;
            }

            let callback = await hook.send(message, {
                username: options.name,
                avatarURL: options.icon,
                embeds: options.embeds
            });

            resolve(callback)
        }

        async function fallback(channel, message, timer) {

            channel = channel.channel || channel;

            let callback = await channel.send(message)

            if (timer) callback.delete({
                timeout: timer
            })
      
            resolve(callback);
        }

        if (!channel) return console.log('WEBHOOKS: Please read the NPM page for documentation.')

        channel = channel.channel || channel;

        if (!channel.send || !channel.fetchWebhooks) return console.log('WEBHOOKS: Invalid Channel.');
        if (!message) return console.log('WEBHOOKS: Invalid Message.');

        if (!options) options = {};
        options = {
            delete: options.delete || false,
            color: options.color || null,
            name: options.name || 'Message',
            icon: options.icon || undefined
        };

        if (isNaN(options.delete)) options.delete = false;

        let sent = false;
        let webhooks = await channel.fetchWebhooks().catch(err => {
            sent = true;
            fallback(channel, message, options.delete)
        });
        if(sent) return;

        let hook = webhooks.find(w => w.name === 'discord-webhooks')
        if (!hook) {
            try {
                hook = await channel.createWebhook('discord-webhooks', {
                    avatar: 'https://cdn.discordapp.com/embed/avatars/4.png'
                })
            } catch (err) {
                hook = await channel.createWebhook('discord-webhooks', 'https://cdn.discordapp.com/embed/avatars/4.png');
            }
            return sendHook(hook, message, options)
        }
        sendHook(hook, message, options);
    })
    return init;
}