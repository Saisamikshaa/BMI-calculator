const bmiCalculator = (weight, height) => {
  if (height <= 0) return 'Height must be greater than zero';
  let heightSquare = height * height;
  let bmi = weight / heightSquare;
  return bmi.toFixed(2); // Return BMI rounded to 2 decimal places
};

document.getElementById('calculateBtn').addEventListener('click', () => {
  // Get input values
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  // Validate inputs
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('bmiResult').textContent = 'Please enter valid weight and height.';
      return;
  }

  // Calculate BMI
  const bmi = bmiCalculator(weight, height);

  // Display result
  document.getElementById('bmiResult').textContent = `Your BMI is ${bmi}`;
});
