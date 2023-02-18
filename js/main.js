
let inp = document.querySelector('.inp');
let btn_add = document.querySelector('.btn_add');
let btn_clear = document.querySelector('.btn_clear');
let div_select = document.querySelector('.div_select');
let cont = document.querySelector('.container');

const professionList = [
    {profession: "Вчитель", picture: "./img/teacher.jpg"},
    {profession: "Лікар", picture: "./img/doctor.jpg"},
    {profession: "Будівельник", picture: "./img/worker.jpg"},
    {profession: "Інженер", picture: "./img/ingener.jpg"},
    {profession: "Програміст", picture: "./img/programmer.jpg"},
    {profession: "Кухар", picture: "./img/cooker.jpg"},
    {profession: "Військовий", picture: "./img/soldat.jpg"},
    {profession: "Безробітний", picture: "./img/unemployed.jpg"}
];

let users = [];
let btn = [];

// формування контейнера
const render = () => {
    let contHTML = "";
    for (let i=0; i<users.length; i++) {
        contHTML += `
            <div class="item">
                <div class="number">
                    ${(i+1)}
                </div>
                <div class="name">
                    ${users[i].name}
                </div>
                <div class="profession">
                    ${users[i].profession}
                </div>
                <div class="picture">
                    <img src="${users[i].picture}" alt="prof" height="100">
                </div>
                <div class="div_btn">
                    <button class="btn_item" ><img src="./img/basket.png" width="60" id="btn${i}"></button> 
                </div>
            </div>
            `;

    }
    cont.innerHTML = contHTML;
    for (let i=0; i<users.length; i++) {
        btn[i] = document.querySelector(`#btn${i}`);
        btn[i].addEventListener('click', removeItem);
    }    
};

// Видалення елемента
const removeItem = (ev) => {
    let n = Number(ev.target.id.slice(3));
    console.log(n);
    users.splice(n,1);
    render();
};

// Формування select
let selectHTML = `<select name="select" class="select">`;
for (let i=0; i<professionList.length; i++) {
    selectHTML += `<option value="item${i}">${professionList[i].profession}</option>`;
}   
selectHTML += `</select>`;
div_select.innerHTML = selectHTML;
let select = document.querySelector('.select');

// Додавання користувача
btn_add.addEventListener('click', () => {
    let userName = inp.value;
    if (!userName) return;
    let selectNumber = Number(select.value.slice(4));
    let profession = professionList[selectNumber].profession;
    let picture = professionList[selectNumber].picture;
    users.push({name: userName, profession: profession, picture: picture});
    inp.value = "";
    render();
    
});

// повна очистка списка і контейнера
btn_clear.addEventListener('click', () => {
    users = [];
    btn = [];
    cont.innerHTML = "";
});
