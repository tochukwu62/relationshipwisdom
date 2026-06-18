// api/auth.js
const axios = require('axios');

// GitHub OAuth config from Vercel environment variables
const config = {
  client: {
    id: process.env.GITHUB_CLIENT_ID,
    secret: process.env.GITHUB_CLIENT_SECRET,
  },
};

function redirectToGitHub(req, res) {
  const state = Math.random().toString(36).substring(7);
  const authorizeUrl = `https://github.com/login/oauth/authorize?client_id=${config.client.id}&state=${state}`;
  res.writeHead(302, { Location: authorizeUrl });
  res.end();
}

async function handleCallback(req, res) {
  const { query } = require('url').parse(req.url, true);
  const { code } = query;
  if (!code) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('No code provided');
    return;
  }
  try {
    const result = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: config.client.id,
        client_secret: config.client.secret,
        code,
      },
      { headers: { Accept: 'application/json' } }
    );
    const accessToken = result.data.access_token;
    const redirectUrl = `/admin/index.html?access_token=${accessToken}`;
    res.writeHead(302, { Location: redirectUrl });
    res.end();
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Authentication failed');
  }
}

module.exports = (req, res) => {
  const { pathname } = require('url').parse(req.url, true);
  if (pathname === '/api/auth') {
    redirectToGitHub(req, res);
  } else if (pathname === '/api/auth/callback') {
    handleCallback(req, res);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
};