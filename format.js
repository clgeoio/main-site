const summary = require("./output/summary.json");
const fs = require("fs");

const result = Object.keys(summary.fileMap)
  .map(function (key) {
    return summary.fileMap[key];
  })
  .sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.data) return -1;
    return 0;
  });

fs.writeFile("output/summary.json", JSON.stringify(result), (err) => {
  if (err) throw err;
  console.log("Summary.json has been updated!");
});
