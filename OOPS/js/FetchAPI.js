// function getData(){
//     url = './file.txt';
//     console.log("getData Started")
//     fetch(url).then((response) => {
//       console.log("In first .then")
//         return response.text();
//     }).then((data) => {
//         console.log("In second .then")
//         console.log(data);
//     })
// }

// console.log("Before running getData")
// getData();
// console.log("After running getData")

function getData(){
    url = 'https://jsonplaceholder.typicode.com/user';
    console.log("getData Started")
    fetch(url).then((response) => {
        console.log("In first .then")
        return response.text();
    }).then((data) => {
        console.log("In second .then")
        console.log(data);
    })
}