const set = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace'], ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'], ['CapsLk', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'], ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#8593', 'Shift'], ['Ctrl', 'Fn', 'Win', 'Alt', 'Space', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl']];
let name = document.createElement('h1');
name.classList.add('h1');
name.innerHTML = 'RSS Виртуальная клавиатура'
document.body.append(name)

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboard.classList.add('keyboard')
document.body.append(keyboard)

let textPlace = document.createElement('textarea');
textPlace.className = 'textPlace';
textPlace.classList.add('text-place');
keyboard.append(textPlace)

set.forEach(elem => {
   let row = document.createElement('div')
   row.classList.add('row')
   keyboard.append(row)
    elem.forEach(el => {
        let button = document.createElement('button');
    button.className = 'symbol';
    button.innerHTML = el;
    row.append(button);

    if (button.innerHTML === 'Backspace' || button.innerHTML === 'Tab' || button.innerHTML === 'CapsLk' || button.innerHTML === 'Enter' || button.innerHTML === 'Shift') {
        button.classList.add('special')
    } else if (button.innerHTML === 'Space') {
        button.classList.add('space')        
    } else {
        button.classList.add('letter')
    }
})

});







let comment = document.createElement('h2');
comment.classList.add('h2');
comment.innerHTML = 'Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe ctrl + alt';
document.body.append(comment)
