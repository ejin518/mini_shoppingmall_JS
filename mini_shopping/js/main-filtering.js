'use strict';
// 1. fetch를 이용하여 data에 있는 JSON file을 가져오는 함수
// 2. ul안에 li을 생성하여 item을 스크린상에 보여주도록 하는 함수
// 3. button을 클릭했을 때 나오는 이벤트 함수. 여기서 dataset을 이용하여 만든다.

function loadItems() {
    return fetch('../data/data.json')
    .then(response => response.json())
    .then(json => json.itemsss);
}

function displayItems(items) {
    const img = document.createElement('img');
    const span = document.createElement('span');
    const li = document.createElement('li');
    img.setAttribute('class', 'thumbnail');
    img.setAttribute('src', `${items.image}`);
    span.setAttribute('class', 'description');
    span.innerText = `${items.gender}, ${items.size} size`;
    li.setAttribute('class', 'item');
    li.setAttribute('data-type', items.type);
    li.setAttribute('data-color', items.color);
    li.append(img);
    li.append(span);
    return li;
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.keys;
    const value = dataset.values;
    items.forEach(elements => {
        if(elements.dataset[key] === value) {
            elements.classList.remove('invisible');
        } else {
            elements.classList.add('invisible');
        }
    });
    

}

function showAll(elements) {
    elements.forEach(items => {
        if(items) {
            items.classList.remove('invisible');
        } 
    })
}

loadItems()
.then(items => {
    const elements = items.map(displayItems)
    const ul = document.querySelector('.items')
    const logo = document.querySelector('.logo')
    const btn = document.querySelector('.buttons')
    ul.append(...elements)
    logo.addEventListener('click', () => showAll(elements))
    btn.addEventListener('click', event => onButtonClick(event, elements))
});