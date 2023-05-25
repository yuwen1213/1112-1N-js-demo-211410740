const showClassDemo = (week) => {
  const showDemo = document.querySelector('.banner-section');
  switch (week) {
    case 'w1':
      showDemo.innerHTML = `<iframe src='./demo/w01/index.html' width="100%" height="100%" />`;
      break;
    case 'w1-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w01/w01_40.html' width="100%" height="100%" />`;
      break;
    case 'w2':
      showDemo.innerHTML = `<iframe src='./demo/w02-tictactoe/tictactoe_40.html' width="100%" height="100%" />`;
      break;
    case 'w2-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w02/w02_40.html' width="100%" height="100%" />`;
      break;
    case 'w3':
      showDemo.innerHTML = `<iframe src='./demo/w03_review/index.html' width="100%" height="100%" />`;
      break;
    case 'w3-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w03/w03_40.html' width="100%" height="100%" />`;
      break;
    case 'w4':
      showDemo.innerHTML = `<iframe src='./demo/w04-menu/index.html' width="100%" height="100%" />`;
      break;
    case 'w4-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w04/w04_40.html' width="100%" height="100%" />`;
      break;
    case 'w5':
      showDemo.innerHTML = `<iframe src='./demo/w05-menu/index.html' width="100%" height="100%" />`;
      break;
    case 'w5-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w05/w05_40.html' width="100%" height="100%" />`;
      break;
    case 'w6':
      showDemo.innerHTML = `<iframe src='./demo/w05-modal/index.html' width="100%" height="100%" />`;
      break;
    case 'w6-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w06/w06_40.html' width="100%" height="100%" />`;
      break;
    case 'w7':
      showDemo.innerHTML = `<iframe src='./demo/w06-array/p3_40/p3_40.html' width="100%" height="100%" />`;
      break;
    case 'w7-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w07/w07_40.html' width="100%" height="100%" />`;
      break;
    case 'w11':
      showDemo.innerHTML = `<iframe src='./demo/w06-array/p3_40/p3_40.html' width="100%" height="100%" />`;
      break;
    case 'w11-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w07/w07_40.html' width="100%" height="100%" />`;
      break;
    case 'w12':
      showDemo.innerHTML = `<iframe src='./demo/w06-array/p3_40/p3_40.html' width="100%" height="100%" />`;
      break;
    case 'w12-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w07/w07_40.html' width="100%" height="100%" />`;
      break;
    case 'w13':
      showDemo.innerHTML = `<iframe src='./demo/w06-array/p3_40/p3_40.html' width="100%" height="100%" />`;
      break;
    case 'w13-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w07/w07_40.html' width="100%" height="100%" />`;
      break;
    case 'w14':
      showDemo.innerHTML = `<iframe src='./demo/w06-array/p3_40/p3_40.html' width="100%" height="100%" />`;
      break;
    case 'w714-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w07/w07_40.html' width="100%" height="100%" />`;
      break;
    case 'w15':
      showDemo.innerHTML = `<iframe src='./demo/w15-stoe-product/index.html' width="100%" height="100%" />`;
      break;
    case 'w15-md':
      showDemo.innerHTML = `<iframe src='./demo/md/w15/index.html' width="100%" height="100%" />`;
      break;
  }
};

const showClassDemo2 = (midprep) => {
  const showDemo = document.querySelector('.banner-section');
  switch (midprep) {
    case 'w1':
      showDemo.innerHTML = `<iframe src='./demo/w09-midprep/p1_bmi_40/p1_40.html' width="100%" height="100%" />`;
      break;
    case 'w2':
      showDemo.innerHTML = `<iframe src='./demo/w09-midprep/p2_counter_40/index.html' width="100%" height="100%" />`;
      break;
    case 'w3':
      showDemo.innerHTML = `<iframe src='./demo/w09-midprep/p3_tour_40/index.html' width="100%" height="100%" />`;
      break;
  }
};

const showClassDemo3 = (mid) => {
  const showDemo = document.querySelector('.banner-section');
  switch (mid) {
    case 'P1':
      showDemo.innerHTML = `<iframe src='./demo/w11/p1_40/p1_md_40.html' width="100%" height="100%" />`;
      break;
    case 'P2':
      showDemo.innerHTML = `<iframe src='./demo/w11/p2_40/p2_40.html' width="100%" height="100%" />`;
      break;
    case 'P3':
      showDemo.innerHTML = `<iframe src='./demo/w11/p3_40/p3_40.html' width="100%" height="100%" />`;
      break;
  }
};
