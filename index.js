const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require("./lib/shapes");



inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter up to 3 characters',
      name: 'text',
    },
    {
      type: 'list',
      message: 'pick a color',
      choices: ["red", "blue", "green"],
      name: 'color',
    },

    {
      type: 'list',
      message: 'pick a text color',
      choices: ["red", "blue", "green"],
      name: 'textcolor',
    },

    {
      type: 'list',
      message: 'pick a shape',
      name: 'shape',
      choices: ["circle", "square", "triangle"],
    },
  ])
  .then((response) => {
    console.log('response', response)
    if (response.shape === "circle") {
      const circle = new Circle();
      circle.setColor(response.color);
      circle.setTextArea(response.textcolor, response.text);
      fs.writeFile('./output/circle.svg', circle.render(), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    }
    if(response.shape === "square"){
      const square = new Square();
      square.setColor(response.color);
      square.setTextArea(response.textcolor, response.text);
      fs.writeFile('./output/square.svg', square.render(), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    }
    if(response.shape === "triangle"){
      const triangle = new Triangle();
      triangle.setColor(response.color);
      triangle.setTextArea(response.textcolor, response.text);
      fs.writeFile('./output/triangle.svg', triangle.render(), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    }
  }
  );
