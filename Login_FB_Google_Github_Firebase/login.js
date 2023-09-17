// Google Login
function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        var user = result.user;
        console.log(user);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  // Facebook Login
  function facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        var user = result.user;
        console.log(user);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  // GitHub Login
  function githubLogin() {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        var user = result.user;
        console.log(user);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  