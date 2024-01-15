const inquirer = require('inquirer');
const fs = require('fs');
const {triangle,square,circle} = require('./lib/shapes.js');

const questions = [
    {
        type: 'Input',
        name: "logoColor",
        message: "Enter the color for your logo using hexidecimal values (ex. #000000) or keywords (ex. black):"
    },
    {
        type: 'Input',
        name: 'charColor',
        message: "Enter the color for your characters using hexidecimal values (ex. #000000) or keywords (ex. black):"
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['triangle','square','circle']
    },
    {
        type: 'Input',
        name: 'logoCharecters',
        message: 'Enter 3 charecters for your logo:',
        validate: function(input){
            if(input.length <= 3){
                return true;
            }
            else{
                return "Please less than 3 charecters.";
            }
        }

    },
];

inquirer.prompt(questions).then((answers) => {
    let logo = "";
    let charecters = answers.logoCharecters.split('');
    let shape = answers.shape;
    let color = answers.logoColor;
    let charColor = answers.charColor;
    let shapeObj = null;
    switch(shape){
        case 'triangle':
            shapeObj = new triangle();
            break;
        case 'square':
            shapeObj = new square();
            break;
        case 'circle':
            shapeObj = new circle();
            break;
    }
    shapeObj.setColor(color);
    logo += `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">`;
    logo += `<${shapeObj.render()}/>`;
    logo += `<text x="50" y="50" text-anchor="middle" fill="${charColor}">${charecters[0]}</text>`;
    logo += `<text x="50" y="75" text-anchor="middle" fill="${charColor}">${charecters[1]}</text>`;
    logo += `<text x="50" y="100" text-anchor="middle" fill="${charColor}">${charecters[2]}</text>`;
    logo += `</svg>`;
    fs.writeFile('logo.svg',logo,(err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('File written successfully');
        }
    });
});