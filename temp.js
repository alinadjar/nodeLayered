const Axios = require('axios');

// const request = Axios.request({
//     method: 'GET',
//     url: 'http://192.168.87.62:5000/api/v1/foods'
// }).then(response => {

//     console.log(response.data);
//     return response.data;
//     //throw new Error('this is a fake error');
// });
// console.log(request);

Axios.request({
    method: 'POST',
    url: 'http://localhost:5000/api/v1/Login',
    data: {
        user: 'asde',
        pass: 1234
    }
})
    .then(res => console.log(res.status))
    .catch(err => console.log(err));