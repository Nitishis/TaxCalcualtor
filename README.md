#Tax Calculator
This project is a simple web-based tax calculator that calculates taxes based on user input of gross annual income, extra income, age group, and applicable deductions. The tax calculation follows specific rules based on the provided criteria.

#Installation
1. Clone the repository to your local machine:
"git clone https://github.com/your-username/tax-calculator.git"
2. Navigate to the project directory:
"cd tax-calculator"
3. Open the index.html file in your web browser to view the Tax Calculator:
"open index.html"

#Usage
1. Enter the gross annual income, extra income, age group, and applicable deductions in the respective input fields.
2. Click the "Submit" button to calculate the tax.
3. View the calculated tax result in the modal window.

#Tax Calculation Formula
The tax calculation works based on the following formula:

. Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
. Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at:
    .30% for people with age < 40
    .40% for people with age ≥ 40 but < 60
    .10% for people with age ≥ 60
    
#Error Handling
. Error icons are displayed next to the input fields if incorrect values are entered.
. Hovering over the error icon shows the error message as a tooltip.

#Age Group Options
The age dropdown field offers three options:

  . <40
  . ≥ 40 & < 60
  . ≥ 60
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change
