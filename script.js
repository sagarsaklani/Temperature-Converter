function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitResult = document.getElementById('fahrenheit');

    const celsiusValue = parseFloat(celsiusInput.value);

    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        fahrenheitResult.textContent = fahrenheitValue.toFixed(2);
    } else {
        fahrenheitResult.textContent = '-';
        alert('Please enter a valid temperature in Celsius.');
    }
}
