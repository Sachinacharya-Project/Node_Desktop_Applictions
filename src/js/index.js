// Variable Declarations
const $ = (val)=>{
    return document.querySelector("."+val)
}

const button = document.querySelectorAll('button')

const history = document.querySelector('.history');
const inputField = $('entry_input')
const oprands = document.querySelector('.oprands')

const getFormatedNumber = (num)=>{
    const number = Number(num)
    const output = number.toLocaleString('en')
    return output
}

let hiddenInput = document.querySelector('.hiddenInput');

function printHistory(num){
	history.textContent=num;
}

const getUnformatedNumber = (num)=>{
    return Number(num.replace(/,/g,''))
}

const fillInputFile = (value)=>{
    let output = getUnformatedNumber(getOutput())
    output = output + value + ""
    inputField.innerHTML = getFormatedNumber(output);
}

const getOutput = ()=>{
    return inputField.innerHTML;
}

const getHistory = ()=>{
    return history.textContent
}

const assignValue = (value)=>{
    if (value == '+'){
        oprands.innerHTML = '&plus;'
    }

    if (value == '-'){
        oprands.innerHTML = '&minus;';
    }

    if (value == '*'){
        oprands.innerHTML = '&times;';
    }

    if (value == '/'){
        oprands.innerHTML = '&#xF7;'
    }

    if (value == '%'){
        oprands.innerHTML = '%';
    }

    console.log(value)
}

button.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        if (btn.classList.contains('numbs')){
            let opr = hiddenInput.textContent;
            if (opr == '0'){
                history.innerHTML = ""
                inputField.innerHTML = ""
                inputField.innerHTML = ""
            }
            fillInputFile(btn.value)
        }
        if (btn.classList.contains('operator')){
            if (btn.classList.contains('equals')){
                let newHistory = getUnformatedNumber(getHistory());
                let outputText = getUnformatedNumber(getOutput());
                let opr = hiddenInput.textContent;
                if (opr == ''){
                    opr = '+';
                }
                results = eval(newHistory + opr + outputText);
                inputField.innerHTML = results;
                history.innerHTML = "&equals;"
                hiddenInput.innerHTML = "0"
                oprands.innerHTML = ""
            }else{
                let newHistory = getUnformatedNumber(getHistory());
                let outputText = getUnformatedNumber(getOutput());
                let opr = hiddenInput.textContent;
                if (opr == ''){
                    opr = '+';
                }
                if (opr == '0'){
                    history.innerHTML = inputField.innerHTML;
                    hiddenInput.innerHTML = btn.value;
                    inputField.innerHTML = ""
                    assignValue(btn.value)
                }else{
                    results = eval(newHistory + opr + outputText);
                    history.innerHTML = results;
                    inputField.innerHTML = ""
                    hiddenInput.innerHTML = btn.value;
                    assignValue(btn.value)
                }
            }
        }
    })
})

// const mod = document.querySelector('.mod');
// mod.addEventListener('click', ()=>{
//     hiddenInput.textContent = '%';
//     assignValue('%')
// })

const clearAllScreen = ()=>{
    inputField.innerHTML = ""
    history.innerHTML = ""
    hiddenInput.innerHTML = ""
    oprands.innerHTML = ""
}

const backspace = ()=>{
    let output = getUnformatedNumber(getOutput()).toString();
    if (output != ''){
        output = output.substr(0, output.length - 1)
        inputField.innerHTML = getFormatedNumber(output);
    }
}