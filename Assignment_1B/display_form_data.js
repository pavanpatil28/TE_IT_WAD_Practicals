document.addEventListener('DOMContentLoaded', function() {
    // Retrieve data from local storage
    const formDataString = localStorage.getItem('formData');
  
    if (formDataString) {
      // Parse string to object
      const formData = JSON.parse(formDataString);
  
      // Display form data
      const formDataDisplay = document.getElementById('formDataDisplay');
      formDataDisplay.innerHTML = `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Age:</strong> ${formData.age}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Gender:</strong> ${formData.gender}</p>
        <p><strong>Hobbies:</strong> ${formData.hobbies.join(', ')}</p>
        <p><strong>Date of Birth:</strong> ${formData.dob}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
      `;
    } else {
      // No data found
      const formDataDisplay = document.getElementById('formDataDisplay');
      formDataDisplay.innerHTML = '<p>No form data found.</p>';
    }
  });
  