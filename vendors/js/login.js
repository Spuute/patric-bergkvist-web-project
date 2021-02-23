const oktaSignIn = new OktaSignIn({
  baseUrl: "https://dev-54117136.okta.com",
  clientId: "0oa7se7mmYHFlw8wb5d6",
  authParams: {
    issuer: "https://dev-54117136.okta.com/oauth2/default",
  },
  redirectUri: "http://127.0.0.1:5501/",
});

oktaSignIn.authClient.token.getUserInfo().then(
  function (user) {
    document.getElementById("messageBox").innerHTML = "Hello, " + user.email + "! You are *still* logged in! :)";
    document.getElementById("logout").style.display = "block";
  },
  function (error) {
    oktaSignIn
      .showSignInToGetTokens({
        el: "#okta-login-container",
      })
      .then(function (tokens) {
        oktaSignIn.authClient.tokenManager.setTokens(tokens);
        oktaSignIn.remove();

        const idToken = tokens.idToken;
        document.getElementById("messageBox").innerHTML = "Hej, " + idToken.claims.email + "! du loggade just in! :)";
        document.getElementById("logout").style.display = "block";
        window.open("weather.html", "_self");
      })
      .catch(function (err) {
        console.error(err);
      });
  }
);

function logout() {
  oktaSignIn.authClient.signOut();
  location.reload();
  window.open("index.html", "_self");
}
