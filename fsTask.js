const axios = require('axios');
const fs = require('fs');

//function to fetch the data
const fetchData = async() => {
    try {
        const url = 'http://jsonplaceholder.typicode.com/posts'
        const res = await axios.get(url)
        const result = JSON.stringify(res.data, null, 2);
        fs.writeFile('./result/post.json', result, (err) => {
            if (err) throw err;
            console.log('write data to file completed');
        })

    } catch (error) {
        console.log(error);
    }
}
fetchData()

