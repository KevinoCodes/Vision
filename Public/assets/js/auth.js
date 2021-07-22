function registerAccount() {
    firebase.auth().createUserWithEmailAndPassword($('#email').val(), $('#password').val())
    .then(async (userCredential) => {
  
      await firebase.auth().currentUser.updateProfile({
        displayName: $('#name').val(),
      })
  
      window.setTimeout(() => {
        window.location.replace('dashboard.html')
      }, 700)  })
    .catch((error) => {
      alert(error.message)
    });
    alert("hello")
  }