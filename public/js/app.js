// import * as tf from '@tensorflow/tfjs';

// let model;

// (async function() {
//     model = await tf.loadModel("http://localhost:3000/tfjs_files/model.json");
//     console.log(model);
// })();

const model = await tf.loadLayersModel("http://localhost:3000/tfjs_files/model.json");

console.log("hello");