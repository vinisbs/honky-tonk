  function register(){

      username = document.getElementById('username').value
      email = document.getElementById('email').value
      password = document.getElementById('password').value

    if(validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is not correct')
        return
    }
    if(validate_field(username) == false){
        alert('You need to insert a Username')
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
        var user = userCredential.user;

        var database_ref = database.ref('users/' + user.uid);

        var user_data = {
            email: email,
            username: username,
            last_login: Date.now()
        };

        database_ref.set(user_data)
            .then(function() {
                
            })
            .catch(function(error) {
                alert('Error saving user data: ' + error.message);
            });
            window.location.href = "index.html";
    })
    .catch(function(error) {
        alert('Error creating user: ' + error.message);
    });

  }

  function login(){
    email = document.getElementById('username').value
    password = document.getElementById('password').value

    if(validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is not correct')
        return
    }

    auth.signInWithEmailAndPassword(email, password)
    .then(function(){
        var user = auth.currentUser

        var database_ref = database.ref()

        var user_data = {
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).update(user_data)

        window.location.href = "index.html";
    })
    .catch(function(error){
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
    })

  }

  function validate_email (email){
      expression = /^[^@]+@\w+(\.\w+)+\w$/
      if(expression.test(email) == true){
          return true
      } else {
          return false
      }
  }

  function validate_password (password){
      if (password < 6) {
          return false
      } else {
          return true
      }
  }

  function validate_field (field){
      if (field == null) {
          return false
      }

      if(field.length <= 0){
          return false
      } else {
          return true
      }
  }



  


  // Smooth scroll to the target section
  document.querySelector('a[href="#about-us"]').addEventListener('click', function (e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });