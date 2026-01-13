const express = require('express');
const cors = require('cors');
const https = require('https');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Serve static files
app.use(express.static('.'));

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Coffee Tracker API is running' });
});

// Main API endpoint
app.post('/api/analyze', async (req, res) => {
    try {
        const { model, max_tokens, messages } = req.body;

        // Use server's API key from environment variable
        const apiKey = process.env.CLAUDE_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: { message: 'Server configuration error: API key not set' }
            });
        }

        console.log('Processing PDF analysis request...');

        // Prepare request to Claude API
        const requestData = JSON.stringify({
            model: model || 'claude-sonnet-4-20250514',
            max_tokens: max_tokens || 4096,
            messages: messages
        });

        const options = {
            hostname: 'api.anthropic.com',
            path: '/v1/messages',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'Content-Length': Buffer.byteLength(requestData)
            }
        };

        // Forward request to Anthropic API
        const proxyReq = https.request(options, (proxyRes) => {
            let responseBody = '';

            proxyRes.on('data', (chunk) => {
                responseBody += chunk;
            });

            proxyRes.on('end', () => {
                console.log('Claude API response received');
                res.status(proxyRes.statusCode).json(JSON.parse(responseBody));
            });
        });

        proxyReq.on('error', (error) => {
            console.error('Proxy request error:', error);
            res.status(500).json({
                error: { message: 'Failed to connect to Claude API: ' + error.message }
            });
        });

        proxyReq.write(requestData);
        proxyReq.end();

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({
            error: { message: 'Server error: ' + error.message }
        });
    }
});

app.listen(PORT, () => {
    console.log(`\n✅ Coffee Spending Tracker Server Running!`);
    console.log(`📡 Local: http://localhost:${PORT}`);
    console.log(`🔑 API Key: ${process.env.CLAUDE_API_KEY ? 'Configured ✓' : 'NOT SET ⚠️'}`);
    console.log(`\n🚀 Ready to analyze coffee spending!\n`);
});
