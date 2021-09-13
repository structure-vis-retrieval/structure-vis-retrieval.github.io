const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'user_study_hog');
//passsing directoryPath and callback function
let result = fs.readdirSync(directoryPath);
const query = result.filter(fold => fold.indexOf("DS")<0).sort((a, b) => parseInt(a)>parseInt(b)).map(item => [item, item+"/"+"query.png"])
const queryfigs = query.map(fold => {
    let filespath = path.join(__dirname, 'user_study_hog/'+fold[0]);
    let dfiles = fs.readdirSync(filespath).filter(filename => filename.indexOf("DS")<0)
    return ["a", "i", "c", "f"].map(tp => dfiles.filter(f => f.indexOf(tp) > -1).map(f => [fold[0], f]) )
})

// console.log(JSON.stringify(query))
console.log(JSON.stringify(queryfigs))