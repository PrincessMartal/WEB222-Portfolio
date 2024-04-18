function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {

  function toggleRateInput() {
    var inquiryType = document.querySelector('input[name="inquiry"]:checked').value;
    var rateInput = document.getElementById('rate');
    if (inquiryType === 'Hiring') {
      rateInput.classList.remove('hidden');
    } else {
      rateInput.classList.add('hidden');
    }
  }

  var radioButtons = document.querySelectorAll('input[name="inquiry"]');
  radioButtons.forEach(function(radio) {
    radio.addEventListener('change', toggleRateInput);
  });

  toggleRateInput();
});

