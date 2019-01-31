const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');

const collegePile = require("./public/colleges.json");
const prettyColleges = require('./public/collegeTrue.json');

const PORT = process.env.PORT || 4040;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api", (req, res) => {

  // let colJson = {
  //   colleges: []
  // };

  // const fetchColleges = url => {
  //   let collegesArr = collegePile;
  //   let colleges = [];

  //   for (let i = 0; i < collegesArr.length - 1; i++) {
  //     if (collegesArr[i].name !== collegesArr[i + 1].name) {
  //       let collegeName = collegesArr[i].name;
  //       let collegeData = [];

  //       for (let j = 0; j < collegesArr.length - 1; j++) {
  //         if (collegesArr[j].name === collegeName) {
  //           collegeData.push({
  //             branch: collegesArr[j].branch,
  //             gen_or: collegesArr[j].gen_or,
  //             gen_cr: collegesArr[j].gen_cr,
  //             obc_or: collegesArr[j].obc_or,
  //             obc_cr: collegesArr[j].obc_cr
  //           });
  //         }
  //       }

  //       colleges.push([collegeName, collegeData]);
  //     }
  //   }

  //   colJson.colleges = colleges;

  // };

  // fetchColleges("./colleges.json");

  // fs.writeFile(path.join(__dirname, 'public', 'collegeTrue.json'), JSON.stringify(colJson), (err) => {
  //   if (err) throw err;
  //   console.log('SAVED!'); 
  // });

  res.send(prettyColleges);
});

// 404 Route
app.use("/", (req, res) => {
  res.send("SORRY, THIS IS THE END FOR US");
});

app.listen(PORT, () => {
  console.log("RUNNING ON " + PORT);
});
