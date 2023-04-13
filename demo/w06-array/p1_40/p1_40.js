let c, f;

c = Number (prompt("Enter a temperature in C: ")).toFixed(2); //prompt是字串輸入

f = ( c * 9 / 5 + 32).toFixed(2);

console.log(`${c} C = ${f} F`);