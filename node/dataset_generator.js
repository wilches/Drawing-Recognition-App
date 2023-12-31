// importing draw module
const draw = require("../common/draw.js");
const constants = require("../common/constants.js");
const utils = require("../common/utils.js");

const {createCanvas} = require("canvas");
const canvas = createCanvas(400,400);
const ctx = canvas.getContext("2d");


// Nodejs File System module to read the names of all files in a directory
const fs = require("fs");

//methods that reads the contents of a directory synchronously and returns an array of file names
const fileNames = fs.readdirSync(constants.RAW_DIR);
const samples = [];
let id = 1;

//loop through all the files in the raw directory and read the contents of each file. The content of the file is then parsed from JSON into a JavaScript object. The parsed object is destructured into three variables: session, student, and drawings. Then, for each property in drawings, a new object is pushed to the samples array. This new object has properties id, label, student_name, and student_id. The label is the name of the current property in drawings, student_name is the student from the parsed file content, and student_id is the session from the parsed file content. The id is a variable that is incremented for each new sample.
fileNames.forEach((fn) => {
  const content = fs.readFileSync(constants.RAW_DIR + "/" + fn);
  const { session, student, drawings } = JSON.parse(content);
  for (let label in drawings) {
    samples.push({
      id,
      label,
      student_name: student,
      student_id: session,
    });

    const paths = drawings[label];
    fs.writeFileSync(
      constants.JSON_DIR + "/" + id + ".json",
      JSON.stringify(paths)
    );
    
    generateImageFile(
      constants.IMG_DIR + "/" + id + ".png",
      paths
    );

    utils.printProgress(id, fileNames.length * 8);

    id++;
  }
});

// The samples array is then written to the samples.json file.
fs.writeFileSync(constants.SAMPLES, JSON.stringify(samples));

fs.writeFileSync(constants.SAMPLES_JS, 
  "const samples=" + JSON.stringify(samples) +";"
);

// The generateImageFile function takes two arguments: outFile and paths. The outFile is the path to the file that will be generated. The paths argument is an array of paths. The function draws the paths to the canvas and then converts the canvas to a buffer. The buffer is then written to the outFile.
function generateImageFile(outFile, paths) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw.paths(ctx, paths);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outFile, buffer);
}
