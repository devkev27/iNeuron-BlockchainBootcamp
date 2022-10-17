// TODO - program which accepts a number as input in the function parameter and insert dashes(-) betwen each two even numbers

// function computeDash(n) {
//     let transform = Array.from(n.toString())
//     let result = transform.map((val,i,arr) => {
//         if (val[0] % 2 === 0 && arr[i+1] % 2 === 0) {
//             return val[0] += '-'
//         } else {
//             return val
//         }
//         return val
//     })
//     console.log(result.join(''));
// }
// computeDash("025468")

function computeDash(num) {
    let insertDash = '';
    for (let i=0;i<num.length;i++) {
        if (num[i]%2===0 && num[i+1]%2===0) {
            insertDash += `${num[i]}-`;
        } else {
            insertDash += num[i];
        }
    }
    return insertDash;
}
console.log(computeDash('025468')); // 0-254-6-8