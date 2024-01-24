let actionText = document.querySelectorAll(".action");
let button = document.querySelectorAll('.but');
let input = document.querySelector('#input');
let mustClean = false;
let isFirstAC = true;


const switchButton = document.querySelector('.switch-bg');

switchButton.addEventListener('click', toggleBackground);

function toggleBackground() {
  document.body.classList.toggle('white-bg');
}


button.forEach(element => {
    element.addEventListener('click', (e) => {
        const {target} = e;
        if (mustClean) {
            if (target.textContent === 'AC') {
                input.textContent = '';
                mustClean = false;
                return;
            }
            input.textContent = '';
            input.textContent = target.textContent;
            mustClean = false;
            isFirstAC = false;
        } else {
            const buttonText = target.textContent;
            const currentInput = input.textContent;
            
            switch(buttonText) {
                case 'AC':                    
                    input.textContent = '';
                    break;                            
                case '=':
                    input.textContent = eval(input.textContent);
                    mustClean = true;
                    break;
                case '-':
                    if (currentInput.endsWith('-') || 
                        currentInput.endsWith('+') ||
                        currentInput.endsWith('*') ||
                        currentInput.endsWith('/') || 
                        currentInput.endsWith('/') ||
                        currentInput === '')
                        break;
                case '+':
                    if (currentInput.endsWith('-') || 
                        currentInput.endsWith('+') ||
                        currentInput.endsWith('*') ||
                        currentInput.endsWith('/') || 
                        currentInput === '')
                        break;
                case '*':
                    if (currentInput.endsWith('-') || 
                        currentInput.endsWith('+') ||
                        currentInput.endsWith('*') ||
                        currentInput.endsWith('/') || 
                        currentInput === '')
                        break;
                case '/':
                    if (currentInput.endsWith('-') || 
                        currentInput.endsWith('+') ||
                        currentInput.endsWith('*') ||
                        currentInput.endsWith('/') || 
                        currentInput === '')
                        break;
                default:
                    input.textContent = currentInput.concat(buttonText);
                    mustClean = false;
            }
        }
    })
});
