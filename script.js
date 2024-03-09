let display = document.querySelector('#display');

function showDisplay(value){
    display.value += value;
}

function clearAll(){
    display.value = '';
}

function clearLast(){
    display.value = display.value.substring(0, display.value.length - 1);
}

function result(){
    let equacao = eval(display.value);

    display.value = equacao;

    if(display.value == 'undefined'){
        display.value = ''
    }
}