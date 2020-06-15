const summary = require("./output/summary.json");
const fs = require("fs");

const result = Object.keys(summary.fileMap)
  .map(function (key) {
    return summary.fileMap[key];
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

fs.writeFile("output/summary.json", JSON.stringify(result), (err) => {
  if (err) throw err;
  console.log("Summary.json has been updated!");
});
