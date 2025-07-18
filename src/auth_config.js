const redirectUri = typeof window !== "undefined" ? window.location.origin : "http://localhost:3000";

const auth0Config = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  authorizationParams: {
  redirect_uri: redirectUri,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  scope: "openid profile email update:profile read:profile"
  }
};

export default auth0Config;