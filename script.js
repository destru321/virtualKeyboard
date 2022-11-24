const buttons = document.querySelectorAll('.keyBoardButton');
let containers = document.querySelectorAll('.main__outputText');
let capsActive = false;
let row = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch(button.innerText) {
            case '↩':
                row += 1;
                let newOutput = document.createElement('p');
                newOutput.classList = "main__outputText";
                document.querySelector('.main__output').appendChild(newOutput)
                containers = document.querySelectorAll('.main__outputText');
                break;

            case '🢁':
                if(!capsActive) {
                    buttons.forEach(btn => {
                        btn.innerText = btn.innerText.toUpperCase();
                    })

                    capsActive = true;
                } else {
                    buttons.forEach(btn => {
                        btn.innerText = btn.innerText.toLowerCase();
                    })

                    capsActive = false;
                }
                break;

            case '⌴':
                containers[row].innerHTML += ' ';
                break;

            case '🠔':
                if(containers[row].innerHTML != '') {
                    containers[row].innerHTML = containers[row].innerText.slice(0, containers[row].innerText.length -1)
                } else {
                    if(row != 0) {
                        document.querySelector('.main__output').removeChild(containers[row])
                        row -= 1;
                        containers = document.querySelectorAll('.main__outputText');
                    }
                }
                break;

            default:
                containers[row].innerHTML += button.innerText;
                break;
        }
    })
})