const showClassDemo = (week) => {
    const showDemo = document.querySelector('.banner-section');
    switch(week){
        case 'w1':
            showDemo.innerHTML = `<iframe src='./demo/w01/index.html' width="100%" height="100%" />`
            break;
        case 'w2':
            showDemo.innerHTML = `<iframe src='./demo/w02-tictactoe/tictactoe_40.html' width="100%" height="100%" />`
            break;
        case 'w3':
            showDemo.innerHTML = `<iframe src='./demo/w03_review/index.html' width="100%" height="100%" />`
            break;
        case 'w4':
            showDemo.innerHTML = `<iframe src='./demo/w04-menu/index.html' width="100%" height="100%" />`
            break;
        case 'w5':
            showDemo.innerHTML = `<iframe src='./demo/w05-menu/index.html' width="100%" height="100%" />`
            break;
        case 'w6':
            showDemo.innerHTML = `<iframe src='./demo/w05-modal/index.html' width="100%" height="100%" />`
            break;
        case 'w7':
            showDemo.innerHTML = `<iframe src='./demo/w06-array/p3_40/p3_40.html' width="100%" height="100%" />`
            break;
    }
}

const showClassDemo2 = (midprep) => {
    const showDemo = document.querySelector('.banner-section');
    switch(midprep){
        case 'w1':
            showDemo.innerHTML = `<iframe src='./demo/w09-midprep/p1_bmi_40/p1_40.html' width="100%" height="100%" />`
            break;
        case 'w2':
            showDemo.innerHTML = `<iframe src='./demo/w09-midprep/p2_counter_40/index.html' width="100%" height="100%" />`
            break;
        case 'w3':
            showDemo.innerHTML = `<iframe src='./demo/w09-midprep/p3_tour_40/index.html' width="100%" height="100%" />`
            break;
    }
}