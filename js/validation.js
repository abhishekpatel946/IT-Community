
    function loginValidate() {
        var username = document.getElementsByName("email").value;
        var password = document.getElementsByName("password").value;
  
            if (userid == null || userid == "") {
                  alert("Please enter the username.");
                  return false;
            }

            if (pswrd == null || pswrd == "") {
                  alert("Please enter the password");
                  return false;
            }
                          // alert('Login successful');                      
    } 

  
          function signupValidate() {
  
              var name = document.getElementsByName("name").value;
              var password = document.getElementsByName("password").value;
              var email = document.getElementsByName("email").value;
              var ucategory = document.getElementsByName("category").value;
              var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
              
              if (name == null || name == "") {
                  alert("Please enter the Name");
                  return false;
              }
              if (email == null || email == "") {
                  alert("Please enter the Email");
                  return false;
              }
              if (password == null || password == "") {
                  alert("Please enter the password");
                  return false;
              }
               if(password.match(pass)){ 
                  return true;
              }
              else
              { 
                  alert('Password must contain at least one lowercase letter, one uppercase letter, numeric digit and a special character with minimum length of 8 characters');
                  return false;
              }
              
              // alert('Login successful');
              
          } 