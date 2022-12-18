let a: number = 10;
let m_a: number = 12;
let b: number = 20;
let alfa: number = 1;

function getAreaByHeight(a, m_a): number {
  return a*m_a;
}
function getAreaByAngle(a, b, angle): number {
  return a * b * Math.sin(angle);
}
console.log(getAreaByHeight(a, m_a));
console.log(getAreaByAngle(a, b, alfa));