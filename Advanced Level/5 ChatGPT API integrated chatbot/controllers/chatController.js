const openaiClient = require('../utils/openaiClient');

async function chatWithGPT(req, res, next) {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ success: false, message: 'Mesaj gerekli' });
        }

        const response = await openaiClient.post('/chat/completions', {
            model: 'gpt-4o-mini',
            messages: [
                { role: 'user', content: message }
            ],
            max_tokens: 150,
            temperature: 0.7,
        });

        const botReply = response.data.choices[0].message.content;
        res.json({ success: true, reply: botReply });
    } catch (error) {
        next(error);
    }
}

module.exports = { chatWithGPT };