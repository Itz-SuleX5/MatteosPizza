const redirectUri = typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"; // fallback si se ejecuta en Node

const auth0Config = {
  domain: "dev-6a8gx4jqe8ymcodi.us.auth0.com",
  clientId: "qLuU9q4sE8Nj8i4x7ZSMjPH4P7oNtdjy",
  authorizationParams: {
    redirect_uri: redirectUri,
    audience: "https://api.matteos-pizza.com",
    scope: "openid profile email update:profile read:profile"
  }
};

export default auth0Config;
