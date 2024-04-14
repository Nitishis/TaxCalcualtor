document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taxForm');
    const incomeInput = document.getElementById('income');
    const extraIncomeInput = document.getElementById('extraIncome');
    const ageInput = document.getElementById('age');
    const deductionInput = document.getElementById('deductions');
    const errorIcons = document.querySelectorAll('.tooltip-icon');
    const modal = document.getElementById('resultModal');
    const closeButton = document.querySelector('.close');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors();
        if (validateForm()) {
            calculateTax();
            modal.style.display = 'block';
        }
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    function clearErrors() {
        errorIcons.forEach(icon => icon.style.display = 'none');
    }

    function validateForm() {
        let valid = true;
        const income = incomeInput.value;
        const extraIncome = extraIncomeInput.value;
        const age = ageInput.value;

        if (!income || isNaN(income)) {
            showError(incomeInput, 'Please enter valid gross annual income');
            valid = false;
        }

        if (!age || isNaN(age)) {
            showError(ageInput, 'Please enter valid age group');
            valid = false;
        }

        return valid;
    }

    function showError(inputElement, message) {
        const errorIcon = inputElement.nextElementSibling.querySelector('.tooltip-icon');
        errorIcon.style.display = 'block';
        errorIcon.title = message;
    }

    function calculateTax() {
        const income = parseFloat(incomeInput.value);
        const extraIncome = parseFloat(extraIncomeInput.value) || 0;
        const deductions = parseFloat(deductionInput.value) || 0 ;
        const age = parseInt(ageInput.value);

        let tax = 0;

        const totalIncome = income + extraIncome - deductions;

        if (totalIncome <= 800000) {
            tax = 0;
        } else {
            const taxableAmount = totalIncome - 800000;
            if (age < 40) {
                tax = 0.3 * taxableAmount;
            } else if (age >= 40 && age < 60) {
                tax = 0.4 * taxableAmount;
            } else if (age >= 60) {
                tax = 0.1 * taxableAmount;
            }
        }

        resultDiv.innerHTML = `Tax calculated: ${tax.toFixed(2)} Lakhs`;
    }
});
