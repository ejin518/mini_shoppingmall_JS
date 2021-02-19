'use strict';

// json에 있는 데이터를 받아오는 함수
// Fetch the items from the JSON file
// Fetch를 사용하면 data를 받아올 수 있다.
// fetch를 호출하면 브라우저는 요청을 보내고 promise객체를 반환한다.
//요청이 완료되면 promise가 resolved 되어 response 객체가 반환된다.
//response객체는 응답에 대한 정보를 담고있다.

function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json()) //여기서 response는 fetch해서 불러온 data의 정보. response의 body를 json의 object로 변환. response의 이름은 아무거나 해도 상관없다. 
    .then(json => json.items); //여기서 json은 response의 body를 json의 object로 변환한 것.
}

function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createdHTMLString(item)).join('');
}

function createdHTMLString(item) {
    return `
        <li class="item">
            <img src="${item.image}" class="item_thumbnail" />
            <span class="item_description">${item.gender}, ${item.size}</span>
        </li>
    `;
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return;
    }

    const  filteredItem = items.filter(item => item[key] === value); //item[key]로 쓰는 이유. 여기서 key는 items의 Obect의 key와 value 중 key를 의미함. object 참조.
    displayItems(filteredItem);

}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const button = document.querySelector('.buttons');
    logo.addEventListener("click", () => displayItems(items));
    button.addEventListener("click", event => onButtonClick(event, items));
}

// Main
//json에 있는 items들을 받아오는데 시간이 걸리기 때문에
//promise를 이용해서 item들이 받아지면 displayItems 함수로 items들을 html에 보여주도록 하고
//setEventListeners 함수로 버튼 이벤트 함수를 만든다.
loadItems()
    .then(items => {
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log)
