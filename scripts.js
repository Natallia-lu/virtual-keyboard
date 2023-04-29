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
        button.classList.add('special');
     } else if (button.innerHTML === 'Space') {
        button.classList.add('space');  
    } else {
        button.classList.add('letter');
    }

    
        //MouseDown 
            button.addEventListener('mousedown', function(){
                button.classList.toggle('active');

                if (button.innerHTML === 'Backspace') {
                    textPlace.innerHTML = textPlace.innerHTML.slice(0, -1)
                } else if (button.innerHTML === 'Tab') {
                    textPlace.innerHTML += '    '
                } else if (button.innerHTML === 'Space') {
                    textPlace.innerHTML += ' '
                } else if (button.innerHTML === 'Enter') {
                    textPlace.innerHTML += '\n'
                } else if (button.innerHTML === 'Shift' || button.innerHTML === 'Ctrl' || button.innerHTML === 'Fn' || button.innerHTML === 'Win' || button.innerHTML === 'Alt' || button.innerHTML === '←' || button.innerHTML === '↑' || button.innerHTML === '→' || button.innerHTML === '↓' || button.innerHTML === 'CapsLk') {
                    textPlace.innerHTML
                } else {
                textPlace.innerHTML += button.innerHTML.toLowerCase()
                }
            })

            button.addEventListener('mouseup', function(){
                button.classList.remove('active');

            })

            
            document.body.addEventListener('keydown', function(index){
               //UpperCase() method returns the value of the string converted to uppercase
                    if(button.innerHTML===index.key.toUpperCase()){
                        button.classList.toggle('active')
                        textPlace.innerHTML += index.key.toLowerCase()
                } else if (index.key === 'Backspace' && button.innerHTML===index.key){
                    button.classList.toggle('active')
                    textPlace.innerHTML = textPlace.innerHTML.slice(0, -1)
                } else if (index.key === 'Tab' && button.innerHTML===index.key) {
                    button.classList.toggle('active')    
                    textPlace.innerHTML += '    '
                } else if (index.key === ' ' && button.innerHTML === 'Space') {
                    button.classList.toggle('active')
                    textPlace.innerHTML += ' '
                } else if (index.key === 'Enter' && button.innerHTML===index.key) {
                    button.classList.toggle('active')
                    textPlace.innerHTML += '\n'
                }
            })
            
            document.body.addEventListener('keyup', function(){
                button.classList.remove('active');
            })

})
});





//keyboard
/*
document.body.addEventListener('keydown' , function(index){
    for (let i=0 ; i <row.length ; i++) {
   //UpperCase() method returns the value of the string converted to uppercase
        if(row[i].innerHTML==index.key.toUpperCase()){
            row[i].classList.toggle('active')
        };
    }
//innerHTML property is part of the Document Object Model
    p.innerHTML+=index.key
    if(index.key=='Backspace'){
        p.innerHTML=p.innerHTML.slice(0 , -10)
    }
})
document.body.addEventListener('keyup' , function(index){
    for(let j=0 ; j<button.length ; j++){
        if(button[j].innerHTML == index.key.toUpperCase()){
            button[j].classList.remove('active')
        }
    }
})
*/


let comment = document.createElement('h2');
comment.classList.add('h2');
comment.innerHTML = 'Клавиатура создана в операционной системе Linux <br> Для переключения языка комбинация: Win + Space';
document.body.append(comment);
