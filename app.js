let btn = document.getElementById('btn');
let list = document.getElementById('list');
let box = document.getElementById('box');
let listItem  = document.getElementsByTagName('li');

btn.addEventListener('click', function () {
    let least = list.lastElementChild.cloneNode(true)
    least.innerHTML = `That's a new item`
    list.appendChild(least)
})

//counting 
let listItems = [...listItem]
listItems.forEach((li, num) => {
    let text = li.innerHTML
    li.innerHTML = `${num + 1}. ${text}`
})




box.addEventListener('mousemove', function (e) {
    // document.getElementById('x-value').innerHTML = e.clientX;
    // document.getElementById('y-value').innerHTML = e.clientY;
    document.getElementById('x-value').innerHTML = e.offsetX;
    document.getElementById('y-value').innerHTML = e.offsetY;

    if (e.offsetX === 70 && e.offsetY) {
        alert('70 70')
    }
})
