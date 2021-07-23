firebase.auth().onAuthStateChanged((user) => {
    if (user) {
  
      var uid = user.uid;
      // Change signin/signup button to dashboard
      window.user = firebase.auth().currentUser
      $('.nametext').html(user.displayName)
      loadCourses()
      // ...
    } else {
  
      window.location.replace('login.html')
    }
  });