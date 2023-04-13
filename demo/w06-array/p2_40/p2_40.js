import { students, sdata } from './data_40.js';

// for sdata

console.log('sdata original', sdata);
sdata.sort( function(a,b){return b-a});  //sort()排序 + compareFunction function(a,b) {return a-b}(小到大)
console.log(`The hightest score: ${sdata[0]}`);
console.log(`The lowest score: ${sdata[sdata.length-1]}`);


// fot students

console.log('students', students); 

const students2 = students.map((student) => {  //map() 在陣列中新增陣列
    // student.role = 'student';
    return {...student, role: 'student'};
});

console.log('student2 original', students2)

students2.sort(function(a,b){return a.score - b.score }); //sort()排序 + compareFunction function(a,b) {return a-b}(小到大)
console.log('students2 sorted', students2);

console.log(`The lowest score: ${students2[0].score}`);
console.log(`The hightest score: ${students2[students2.length-1].score}`);

console.log('students', students); 
const averageStudents = students.reduce( (total, student, index) => {
    console.log('index total', index, total);
    return total + student.score;
}, 0) / students.length;

console.log('average', averageStudents);

console.log('sdata sorted', sdata);
const averageSdata = sdata.reduce( (total, sdata, index) => {
    console.log('index total', index, total);
    return total + sdata;
}, 0) / sdata.length;
console.log('average', averageSdata);

