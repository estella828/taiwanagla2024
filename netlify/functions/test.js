exports.handler = async (event) => {
    try {
        console.log('Test function called');
        console.log('Event:', event);
        console.log('Environment variables:', {
            LINE_BOT_CHANNEL_SECRET: !!process.env.LINE_BOT_CHANNEL_SECRET,
            LINE_BOT_CHANNEL_ACCESS_TOKEN: !!process.env.LINE_BOT_CHANNEL_ACCESS_TOKEN,
            LINE_USER_ID: !!process.env.LINE_USER_ID
        });

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
            body: JSON.stringify({ 
                message: 'Test function working',
                environment: {
                    LINE_BOT_CHANNEL_SECRET: !!process.env.LINE_BOT_CHANNEL_SECRET,
                    LINE_BOT_CHANNEL_ACCESS_TOKEN: !!process.env.LINE_BOT_CHANNEL_ACCESS_TOKEN,
                    LINE_USER_ID: !!process.env.LINE_USER_ID
                },
                timestamp: new Date().toISOString()
            })
        };
    } catch (error) {
        console.error('Error in test function:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
            body: JSON.stringify({ 
                message: 'Error in test function',
                error: error.message,
                stack: error.stack
            })
        };
    }
};
