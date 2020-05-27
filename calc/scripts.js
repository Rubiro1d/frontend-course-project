calc.one.addEventListener('click', function(){
    calc.board.value+='1';
}, false)

calc.two.addEventListener('click', function(){
    calc.board.value+='2';
}, false)

calc.three.addEventListener('click', function(){
    calc.board.value+='3';
}, false)

calc.four.addEventListener('click', function(){
    calc.board.value+='4';
}, false)

calc.five.addEventListener('click', function(){
    calc.board.value+='5';
}, false)

calc.six.addEventListener('click', function(){
    calc.board.value+='6';
}, false)

calc.seven.addEventListener('click', function(){
    calc.board.value+='7';
}, false)

calc.eight.addEventListener('click', function(){
    calc.board.value+='8';
}, false)

calc.nine.addEventListener('click', function(){
    calc.board.value+='9';
}, false)

calc.zero.addEventListener('click', function(){
    calc.board.value+='0';
}, false)

calc.equal.addEventListener('click', function(){
    calc.board.value = eval(calc.board.value);
}, false)

calc.add.addEventListener('click', function(){
    calc.board.value+='+';
}, false)

calc.sub.addEventListener('click', function(){
    calc.board.value+='-';
}, false)

calc.mult.addEventListener('click', function(){
    calc.board.value+='*';
}, false)

calc.div.addEventListener('click', function(){
    calc.board.value+='/';
}, false)

calc.remove.addEventListener('click', function(){
    calc.board.value = '';
}, false)