firebase.auth().onAuthStateChanged((user) => {
  if (user) {

    var uid = user.uid;
    // Change signin/signup button to dashboard
    $('.getstarted').html('Dashboard')
    // ...
  } else {

  }
});

function registerAccount() {


  if ($('#email').val() == '' || $('#password').val() == '' || $('#name').val() == '') {
    alert('Please fill out all the required fields.')
    return;
  }

  firebase.auth().createUserWithEmailAndPassword($('#email').val(), $('#password').val())
  .then(async (userCredential) => {

    await firebase.auth().currentUser.updateProfile({
      displayName: $('#name').val(),
    })

    window.setTimeout(() => {
      window.location.replace('articles.html')
    }, 700)  })
  .catch((error) => {
    alert(error.message)
  });
}

function signin() {
  firebase.auth().signInWithEmailAndPassword($('#email').val(), $('#password').val())
  .then((userCredential) => {
    window.setTimeout(() => {
      window.location.replace('articles.html')
    }, 700)  })
  .catch((error) => {
    alert(error.message)
  });
}

function continueGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    window.setTimeout(() => {
      window.location.replace('articles.html')
    }, 700)
  }).catch((error) => {
    alert(error.message)
  });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {

    var uid = user.uid;
    // Change signin/signup button to dashboard
    $('.getstarted').html('Dashboard')
    $('.getstarted').attr('href', 'articles.html')
    $('#pfpItemRight').removeClass('hidden')
    // ...
  } else {

    $('.getstarted').html('Sign In / Sign Up')
    $('.getstarted').attr('href', 'login.html')
    $('#pfpItemRight').addClass('hidden')
  }
});

function logOut() {
  firebase.auth().signOut()
}