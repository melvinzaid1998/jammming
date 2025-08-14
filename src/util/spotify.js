const clientId = 'd88c1efd55034d5ea7d6a8e10305cbf4';
const redirectUri = 'http://127.0.0.1:3000/';

let accessToken = ''; 
const scope = 'playlist-modify-public';

var authUrl = 'https://accounts.spotify.com/authorize'; 
authUrl += '?response_type=token'; 
authUrl += '&client_id=' + encodeURIComponent(clientId);
authUrl += '&scope=' + encodeURIComponent(scope); 
authUrl += '&redirect_uri=' + encodeURIComponent(redirectUri); 



const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
    
        const sessionToken = sessionStorage.getItem('accessToken');
        if (sessionToken) {
            accessToken = sessionToken;
            return accessToken;
        }
    
        const params = new URLSearchParams(window.location.hash.substring(1));
        const token = params.get('access_token');
        const expires_in = Number(params.get('expires_in'));
    
        if (token && expires_in) {
            accessToken = token;
            sessionStorage.setItem('accessToken', token);
            window.setTimeout(() => {
                accessToken = '';
                sessionStorage.removeItem('accessToken');
            }, expires_in * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }
    
        // Redirect only if no token found anywhere
        window.location = authUrl;
    }, 



}; 

export default Spotify;