const axios = require('axios');

// Replace these with your actual Daraja API credentials
const consumerKey = 'your_consumer_key';
const consumerSecret = 'your_consumer_secret';
const lipaNaMpesaOnlineShortcode = 'your_lipa_na_mpesa_online_shortcode';
const lipaNaMpesaOnlinePasskey = 'your_lipa_na_mpesa_online_passkey';

// Daraja API authentication endpoint
const authEndpoint = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

// Function to obtain Daraja API access token
async function getAccessToken() {
    const authString = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
    const headers = {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios.get(authEndpoint, { headers });
        const accessToken = response.data.access_token;
        return accessToken;
    } catch (error) {
        console.error('Error obtaining access token:', error.message);
        throw error;
    }
}

// Example usage of the getAccessToken function
getAccessToken()
    .then((accessToken) => {
        console.log('Access Token:', accessToken);
        // Use the obtained access token to make authenticated requests to Daraja API
        // You will include the access token in the Authorization header of your subsequent requests
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
