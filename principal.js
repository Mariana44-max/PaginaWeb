let a = true; 
let b = false; 
let c = true; 
let x = 5; 
let y = 10; 
let z = 5; 
let w = 3; 
let m = 8; 
let n = 15; 
let p = 0; 
 
let resultado1 = a && b || c; 
 
let resultado2 = (x < y) && (z === x) || b; 
let resultado3 = !(x === z) || (!a && b); 
 
let resultado4 = (x <= z) && (y > x) && !b; 
 
let resultado5 = (a || b) && !(x !== z) && (y >= x); 
 
let resultado6 = x + y > z ? "mayor" : "menor"; 
 
let resultado7 = a ? x + y : z - w; 
 
let resultado8 = ++x + y-- * z; 
 
let resultado9 = x++ - --z + (y *= 2); 
 
let resultado10 = (x ** y) + (z % w); 
 
let resultado11 = !a ? x : y > z ? m : n; 
 
let resultado12 = x += y *= z /= w; 
 
let resultado13 = (x & y) | (z ^ w); 
 
let resultado14 = x << 2 + y >> 1; 
 
let resultado15 = ~x * -y + +z; 
 
let resultado16 = (p || x) && (y || z) ? m : n; 
 
let resultado17 = x === y ? a && b : c || b; 
 
let resultado18 = (x * y) + (z / w) - (m % n); 
 
let resultado19 = x++ + ++y - z-- + --w; 
 
let resultado20 = ((x > y) && (z < w)) || ((m >= n) && (p <= y)); 
 
let resultado21 = x !== y ? (z === w ? m : n) : (p === y ? w : x); 
 
let resultado22 = (x ** y) % z + (w * m) / n; 
 
let resultado23 = (x & y) | (z ^ w) << m; 
 
let resultado24 = x += y -= z *= w /= m %= n; 
 
let resultado25 = !a && b || c ? x + y : z - w; 
 
console.log("Resultado 1:", resultado1); 
console.log("Resultado 2:", resultado2);

console.log("Resultado 3:", resultado3); 
console.log("Resultado 4:", resultado4); 
console.log("Resultado 5:", resultado5); 
console.log("Resultado 6:", resultado6); 
console.log("Resultado 7:", resultado7); 
console.log("Resultado 8:", resultado8); 
console.log("Resultado 9:", resultado9); 
console.log("Resultado 10:", resultado10); 
console.log("Resultado 11:", resultado11); 
console.log("Resultado 12:", resultado12); 
console.log("Resultado 13:", resultado13); 
console.log("Resultado 14:", resultado14); 
console.log("Resultado 15:", resultado15); 
console.log("Resultado 16:", resultado16); 
console.log("Resultado 17:", resultado17); 
console.log("Resultado 18:", resultado18); 
console.log("Resultado 19:", resultado19); 
console.log("Resultado 20:", resultado20); 
console.log("Resultado 21:", resultado21); 
console.log("Resultado 22:", resultado22); 
console.log("Resultado 23:", resultado23); 
console.log("Resultado 24:", resultado24); 
console.log("Resultado 25:", resultado25);