let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let cont = document.querySelector('.container');

btn.addEventListener('click', start);

function start() {
    let n = Number(inp.value);
    if ( n < 1 || n > 20 ) return;
    let strHtml = "";
    for (let i=1; i<=n; i++) {
        strHtml += `<div class="item" id="item${i}">
                        *
                    </div>`;
    }
    cont.innerHTML = strHtml;
    let arr = [];
    for (let i=1; i<=n; i++) {
        arr[i] = document.querySelector(`#item${i}`);
        arr[i].addEventListener('click', change);
    }
}

function change(ev) {
    if (ev.target.innerHTML.trim() === "*") {
        ev.target.innerHTML = ev.target.id.slice(4);   
    }  else {
         ev.target.innerHTML = "*";  
    }
}


