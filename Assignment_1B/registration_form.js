document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const hobbies = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
      hobbies.push(checkbox.value);
    });
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
  
    // Create object with form data
    const formData = {
      name: name,
      age: age,
      email: email,
      gender: gender,
      hobbies: hobbies,
      dob: dob,
      address: address
    };
  
    // Stringify object
    const formDataString = JSON.stringify(formData);
  
    // Store data in local storage
    localStorage.setItem('formData', formDataString);
  
    // Redirect to other page
    window.location.href = 'display_form_data.html';
  });
  