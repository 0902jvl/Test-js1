
function calculateVolumeAndArea() {
    let side = +prompt("введите длину стороны куба", "");
    let v = side * side * side;
    let s = (side * side) * 6;
    return { v: v, s: s };
}

console.log(calculateVolumeAndArea());