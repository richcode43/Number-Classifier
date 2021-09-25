let numbers = [1, 4, 5, 6, 9, 10, 13, 16, 18, 19, 30, 35, 65, 50, 70, 100, 200, 500, 900, 1001];

function numClassify(arr) {
    let even = [];
    let odd = [];
    let unit = [];
    let tens = [];
    let hundred = [];
    let other = [];

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        } else if (arr[i] % 2 == 1) {
            odd.push(arr[i]);
        } else if (arr[i] >= 1 || arr[i] < 9) {
            unit.push(arr[i]);
        } else if (arr[i] >= 10 || arr[i] < 99) {
            tens.push(arr[i]);
        } else if (arr[i] >= 100 || arr[i] < 999) {
            hundred.push(arr[i]);
        } else if (arr[i] % 4 == 0) {
            other.push(arr[i]);
        } else {
            return arr;
        }
    }
    const returnObject = {
        odd,
        even,
        unit,
        tens,
        hundred,
        other
    };

    return returnObject;

}
console.log(numClassify(numbers));