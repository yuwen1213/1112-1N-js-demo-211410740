// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc

boilWater(100000);
console.log(`chop carrot`);

function boilWater(time) {
  console.log('boiling...');
  setTimeout((time)=>{
    console.log('done');
    console.log('add carrots');
    setTimeout(()=>{
      console.log('carrots done');
      console.log('add onion');
      setTimeout(()=>{
        console.log('onion done');
      })
    }, 1000);
    console.log('chop onion');
  }, 2000)
}
