const showClassDemo = (week) => {
    const showDemo = document.querySelector('.demo-section');
    switch(week){
        case 'w1':
            showDemo.innerHTML = `<iframe src='./demo/w01/index.html' width="100%" height="100vh" />`
            break;
        case 'w2':
            showDemo.innerHTML = `<iframe src='./demo/w02-tictaktoe/index.html' width="100%" height="100vh" />`
            break;
    }
}