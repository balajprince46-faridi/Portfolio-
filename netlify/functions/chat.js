// Netlify Function: chat
// Placeholder implementation for an AI helper. To enable real AI responses,
// set OPENAI_API_KEY (or another provider key) in your Netlify environment and
// implement the request to the provider below.

exports.handler = async function(event, context) {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    const body = JSON.parse(event.body || '{}');
    const message = (body.message || '').toString().trim();

    if (!message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'No message provided' }) };
    }

    // Example: If you want to forward to OpenAI, implement here. Example pseudocode:
    // const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    // if (OPENAI_API_KEY) {
    //   // call OpenAI and return its reply
    // }

    // Fallback canned response for now
    const reply = `AI helper placeholder — received: "${message.slice(0,200)}"\n\nTo enable real responses, set process.env.OPENAI_API_KEY and update netlify/functions/chat.js to call your preferred LLM API.`;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply })
    };

  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message || 'Server error' }) };
  }
};
