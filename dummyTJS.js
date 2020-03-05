const listFoods = [
    {
        "GOOD_ID": "21580026",
        "PRICE": "750000",
        "QUANTITY": "0",
        "RATE": "1000010692",
        "ADD_PRICE": "0",
        "NAME": "سبزي پلو با ماهي"
    },
    {
        "GOOD_ID": "21590001",
        "PRICE": "1450000",
        "QUANTITY": "2",
        "RATE": "5654583",
        "ADD_PRICE": "0",
        "NAME": "کباب برگ مخصوص "
    },
    {
        "GOOD_ID": "21590002",
        "PRICE": "1450000",
        "QUANTITY": "26",
        "RATE": "1000011960",
        "ADD_PRICE": "0",
        "NAME": "شيشليک مخصوص شانديز"
    },
    {
        "GOOD_ID": "21590003",
        "PRICE": "1500000",
        "QUANTITY": "2",
        "RATE": "1000011961",
        "ADD_PRICE": "0",
        "NAME": "ماهيچه مخصوص"
    },
    {
        "GOOD_ID": "21590004",
        "PRICE": "250000",
        "QUANTITY": "61",
        "RATE": "5654598",
        "ADD_PRICE": "0",
        "NAME": "سرويس اضافه"
    },
    {
        "GOOD_ID": "21590005",
        "PRICE": "100000",
        "QUANTITY": "61",
        "RATE": "5654600",
        "ADD_PRICE": "0",
        "NAME": "برنج اضافه"
    },
    {
        "GOOD_ID": "21590006",
        "PRICE": "1450000",
        "QUANTITY": "4",
        "RATE": "5654584",
        "ADD_PRICE": "0",
        "NAME": "فيله گوسفندي"
    },
    {
        "GOOD_ID": "21590007",
        "PRICE": "1200000",
        "QUANTITY": "100",
        "RATE": "1000009298",
        "ADD_PRICE": "0",
        "NAME": "چلو گوشت مخصوص"
    },
    {
        "GOOD_ID": "21590008",
        "PRICE": "800000",
        "QUANTITY": "4",
        "RATE": "5707347",
        "ADD_PRICE": "0",
        "NAME": "کباب بختياري"
    },
    {
        "GOOD_ID": "21590009",
        "PRICE": "550000",
        "QUANTITY": "30",
        "RATE": "1000009302",
        "ADD_PRICE": "0",
        "NAME": "جوجه کباب با استخوان"
    },
    {
        "GOOD_ID": "21590010",
        "PRICE": "650000",
        "QUANTITY": "8",
        "RATE": "1000009300",
        "ADD_PRICE": "0",
        "NAME": "فيله جوجه کباب مخصوص تخت جمشيد"
    },
    {
        "GOOD_ID": "21590011",
        "PRICE": "650000",
        "QUANTITY": "3",
        "RATE": "1000009303",
        "ADD_PRICE": "0",
        "NAME": "کباب لقمه مخصوص"
    },
    {
        "GOOD_ID": "21590015",
        "PRICE": "550000",
        "QUANTITY": "24",
        "RATE": "5675857",
        "ADD_PRICE": "0",
        "NAME": "جوجه شانديزي"
    },
    {
        "GOOD_ID": "21590021",
        "PRICE": "300000",
        "QUANTITY": "81",
        "RATE": "5675943",
        "ADD_PRICE": "0",
        "NAME": "سرويس بدون غذا"
    },
    {
        "GOOD_ID": "21590043",
        "PRICE": "150000",
        "QUANTITY": "0",
        "RATE": "1000013775",
        "ADD_PRICE": "0",
        "NAME": "خورشت قيمه"
    },
    {
        "GOOD_ID": "21590045",
        "PRICE": "150000",
        "QUANTITY": "0",
        "RATE": "1000014823",
        "ADD_PRICE": "9",
        "NAME": "خورشت فسنجان"
    },
    {
        "GOOD_ID": "21590085",
        "PRICE": "1000000",
        "QUANTITY": "1",
        "RATE": "5822863",
        "ADD_PRICE": "0",
        "NAME": "چلو گوشت 400 گرمي"
    },
    {
        "GOOD_ID": "21590117",
        "PRICE": "35000",
        "QUANTITY": "41",
        "RATE": "5663502",
        "ADD_PRICE": "0",
        "NAME": "نوشابه قوطي کوکا"
    },
    {
        "GOOD_ID": "21590122",
        "PRICE": "40000",
        "QUANTITY": "54",
        "RATE": "5663505",
        "ADD_PRICE": "0",
        "NAME": "دلستر قوطي"
    },
    {
        "GOOD_ID": "21590123",
        "PRICE": "10000",
        "QUANTITY": "6",
        "RATE": "5663506",
        "ADD_PRICE": "0",
        "NAME": "آب معدني کوچک"
    },
    {
        "GOOD_ID": "21590124",
        "PRICE": "20000",
        "QUANTITY": "7",
        "RATE": "5663507",
        "ADD_PRICE": "0",
        "NAME": "دوغ کوچک"
    },
    {
        "GOOD_ID": "21590136",
        "PRICE": "450000",
        "QUANTITY": "0",
        "RATE": "1000013776",
        "ADD_PRICE": "0",
        "NAME": "زرشک پلو با مرغ (سرويس کامل بوفه)"
    },
    {
        "GOOD_ID": "21590139",
        "PRICE": "950000",
        "QUANTITY": "0",
        "RATE": "5654605",
        "ADD_PRICE": "0",
        "NAME": "چلو گوشت + فسنجان"
    }
];



const express = require('express');
const app = express();


app.use(express.json());



app.get('/api/v1/foods', (req, res) => {
    res.status(200).send(listFoods);
});



app.listen(5000, () => {
    console.log(`server running on port 5000`);
});




