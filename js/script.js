const paswordInput = document.querySelector('[name="tel"]');
		
paswordInput.addEventListener('invalid', () => {
  paswordInput.setCustomValidity('Please enter a Philippine number ex. 09219685140');
});