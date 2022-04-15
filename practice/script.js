// if (4 == 4) {
//     console.log('ok')
// } else {
//     console.log("error")
// }

// const num = 50;

// if (num < 49) {
//     console.log("error");
// } else if (num > 100) {
//     console.log('Mnogo');
// } else {
//     console.log("ok ");
// }

// (num === 50) ? console.log("ok ") : console.log("error");

const num = 50;

switch (num) {
    case 49:
        console.log("Error")
        break;
    case 100: 
        console.log('Erorr')
        break;
    case 50:
        console.log('Ok')
        break;
    default: 
        console.log("NOt this time")
        break;
}
