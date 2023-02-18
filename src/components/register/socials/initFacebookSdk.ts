const facebookAppId =
  process.env.REACT_APP_FACEBOOK_LOGIN_ID || 588354778429797;

export function initFacebookSdk() {
  return new Promise((resolve) => {
    // wait for facebook sdk to initialize before starting the react app
    //@ts-ignore
    window.fbAsyncInit = function () {
      //@ts-ignore
      window.FB.init({
        appId: facebookAppId,
        cookie: true,
        xfbml: true,
        version: "v8.0",
      });
    };

    // load facebook sdk script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      //@ts-ignore
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs?.parentNode?.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
}
