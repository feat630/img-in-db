const express = require('express');
const router = express.Router();
const db = require('../dbconnection');


router.get('/getData', (req,res) => {
    res.send("susecess")
})

router.get('/getTest', (req,res) => {
    db.query("select seq, title, DATE_FORMAT(date, '%Y-%m-%d %H:%i:%s') as date from post", (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error: ${err}`);
            res.send(err);
        }
    })
})

router.get('/getOne/:idx', (req, res) => {
    const keyValue = req.params.idx;
    db.query("select * from post where seq = ? ", [keyValue], (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error: ${err}`);
            res.send(err);
        }
    })
})

router.post('/postData', (req, res) => {
    const title = req.body.data.data[0];
    const value = req.body.data.data[1];

    console.log(title)
    console.log(value)

    db.query("insert into post(title, content) values(?, ?)", [title, value], (err, rows) => {
        if(!err) {
            // res.send(rows);
            console.log('success')
        } else {
            console.log(`query error: ${err}`);
            res.send(err);
        }
    })
})

// router.post('/insertPatient', (req, res) => {
//     const keyValue = req.body.data.data[0];
//     const name = req.body.data.data[1];
//     const gender = req.body.data.data[2];
//     const age = req.body.data.data[3];

//     console.log(keyValue)
//     console.log(name)
//     console.log(gender)
//     console.log(age)

//     db.query("insert into patient_list(key_value, name, gender, age) values(?, ?, ?, ?)", [keyValue, name, gender, age], (err, rows) => {
//         if(!err) {
//             // res.send(rows);
//             console.log('success')
//         } else {
//             console.log(`query error: ${err}`);
//             res.send(err);
//         }
//     })
// })

// router.post('/insertRecord', (req, res) => {
//     const keyValue = req.body.data.data[0];
//     const medicalRecord = req.body.data.data[1];
//     const etc = req.body.data.data[2];

//     console.log(keyValue)
//     console.log(medicalRecord)
//     console.log(etc)

//     db.query("insert into patient_detail(key_value, medical_record, etc) values(?, ?, ?)", [keyValue, medicalRecord, etc], (err, rows) => {
//         if(!err) {
//             // res.send(rows);
//             console.log('success')
//         } else {
//             console.log(`query error: ${err}`);
//             res.send(err);
//         }
//     })
// })

// router.post('/insertRecord', (req, res) => {
//     const keyValue = req.body.data.data[0];
//     const medicalRecord = req.body.data.data[1];
//     const etc = req.body.data.data[2];

//     console.log(keyValue)
//     console.log(medicalRecord)
//     console.log(etc)

//     db.query("insert into patient_detail(key_value, medical_record, etc) values(?, ?, ?)", [keyValue, medicalRecord, etc], (err, rows) => {
//         if(!err) {
//             // res.send(rows);
//             console.log('success')
//         } else {
//             console.log(`query error: ${err}`);
//             res.send(err);
//         }
//     })
// })

// router.delete('/deleteData', (req, res) => {
//     const name = req.body.data.data[0];
//     const age = req.body.data.data[1];
//     const add = req.body.data.data[2];

//     console.log(name)
//     console.log(age)
//     console.log(add)

//     db.query("delete from test where name = ? and age = ? and test_data = ?", [name, age, add], (err, rows) => {
//         if(!err) {
//             // res.send(rows);
//             console.log('success')
//         } else {
//             console.log(`query error: ${err}`);
//             res.send(err);
//         }
//     })
// })

module.exports =router;