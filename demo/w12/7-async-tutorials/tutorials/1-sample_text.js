const xhr = new XMLHttpRequest();

xhr.open('GET', './api/sample.txt');

xhr.onreadystatechange = function () {
    console.log('xhr', xhr);
    if (xhr.readyState ===4 && xhr.status === 200) {
        const text = document.createElement('p');
        console.log('p', text);
        text.textContent = xhr.responseText;
        document.body.appendChild(text);
    } else {
        console.log({
            status: xhr.status,
            text: xhr.status,
            status: xhr.readyState
        });
    }
}

xhr.send();





const btn = document.querySelector('.btn');

const url = './api/people.json';

btn.addEventListener('click', () => {
    getData(url);
});

const getData = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './api/sample.txt');

    xhr.onreadystatechange = function () {
    console.log('xhr', xhr);
    if (xhr.readyState ===4 && xhr.status === 200) {
        const text = document.createElement('p');
        console.log('p', text);
        text.textContent = xhr.responseText;
        document.body.appendChild(text);
    } else {
        console.log({
            status: xhr.status,
            text: xhr.status,
            status: xhr.readyState
        });
    }
}

xhr.send();
}