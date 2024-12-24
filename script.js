let string = "";
let memory = 0; // Memory variable for M+, M-, MC
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === '=') {
      try {
        string = eval(string); // Calculate the result
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = "Error";
        string = ""; // Reset if error occurs
      }
    } else if (value === 'C') {
      string = ""; // Clear the input
      document.querySelector('input').value = string;
    } else if (value === 'M+') {
      memory += parseFloat(document.querySelector('input').value) || 0; // Add to memory
    } else if (value === 'M-') {
      memory -= parseFloat(document.querySelector('input').value) || 0; // Subtract from memory
    } else if (value === 'MC') {
      memory = 0; // Clear memory
    } else {
      string += value; // Append to string
      document.querySelector('input').value = string;
    }
  });
});
