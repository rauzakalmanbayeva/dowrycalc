function calculatePrice() {
    let basePrice = 100;
  
    const education = parseFloat(document.getElementById('education').value);
    const netWorth = parseFloat(document.getElementById('netWorth').value);
    const caste = parseFloat(document.getElementById('caste').value);
    const age = parseFloat(document.querySelector('input[name="age"]:checked').value);
  
    const skillBoxes = document.querySelectorAll('fieldset:nth-of-type(1) input[type="checkbox"]');
    const repBoxes = document.querySelectorAll('fieldset:nth-of-type(2) input[type="checkbox"]');
   
    let total = basePrice * education * netWorth * age;
  
    total += caste;
  
    skillBoxes.forEach(box => {
      if (box.checked) total += parseFloat(box.value);
    });
  
    repBoxes.forEach(box => {
      const type = box.dataset.type;
      if (box.checked) {
        if (type === "coefficient") {
          total *= parseFloat(box.value);
        } else {
          total += parseFloat(box.value);
        }
      }
    });
  
    document.getElementById("result").textContent = `Final Price: $${total.toFixed(2)}`;
  }
  
  