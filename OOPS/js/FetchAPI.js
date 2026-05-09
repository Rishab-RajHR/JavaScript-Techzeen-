function getData(){
    url = './file.txt';
    fetch(url).then((response) => {
        return response.test();
    }).then((data) => {
        console.log(data);
    })
}

getData();