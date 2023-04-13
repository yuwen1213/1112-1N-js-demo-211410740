const showClassDemo = (week) => {
    const showDemo = document.querySelector('.banner-section');
    switch(week){
        case 'w1':
            showDemo.innerHTML = `<iframe src='./demo/w01/index.html' width="100%" height="100%" />`
            break;
        case 'w2':
            showDemo.innerHTML = `<iframe src='./demo/w02-tictactoe/tictactoe_40.html' width="100%" height="100%" />`
            break;
        // case 'w3':
        //     showDemo.innerHTML = `<iframe src='./demo/w03_review/index.html' width="100%" height="100%" />`
        //     break;
        // case 'w4':
        //     showDemo.innerHTML = `<iframe src='./demo/w04-menu/index.html' width="100%" height="100%" />`
        //     break;
        // case 'w5':
        //     showDemo.innerHTML = `<iframe src='./demo/w05-menu/index.html' width="100%" height="100%" />`
        //     break;
    }
}