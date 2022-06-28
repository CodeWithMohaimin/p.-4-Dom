let btn = document.getElementById('btn');

// btn.onclick = function (e) {
//     console.log(e);
// }


// btn.addEventListener('click', function (e) {
//     alert ('hello programmer mohaimin')
// })
let list = document.getElementById('list');

btn.addEventListener('click', function () {
    let least = list.lastElementChild.cloneNode(true)
    least.innerHTML = `That's a new item`
    list.appendChild(least)
})






let box = document.getElementById('box');

box.addEventListener('mousemove', function (e) {
    // document.getElementById('x-value').innerHTML = e.clientX;
    // document.getElementById('y-value').innerHTML = e.clientY;
    document.getElementById('x-value').innerHTML = e.offsetX;
    document.getElementById('y-value').innerHTML = e.offsetY;

    if (e.offsetX === 70 && e.offsetY) {
        alert('70 70')
    }
})
