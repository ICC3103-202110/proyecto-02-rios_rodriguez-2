const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.red(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}
function inputForm(model){
    const {name, temp, max, min, total} = model
    const action = 'Select action:'
    const location = 'Location?'
    const question = 'Select an option'
    const choices = ['Add City', 'Update City', 'Delete City']
    return inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: action,
            choices: choices
        },
        {
            name: 'location',
            type: 'input',
            message: location,
            when: (answers) => answers.action === 'Add City'
        },
        {
            name: 'location',
            type: 'list',
            message: question,
            choices: name,
            when: (answers) => answers.action === 'Update City'
        }, 
        {
            name: 'location',
            type: 'list',
            message: question,
            choices: name,
            when: (answers) => answers.action === 'Delete City'
        } 
    ])
}


function view(model){
    return {
        title: getTitle()
       
    }
}
function getRandom() {
    return Math.random()*100;
  }

module.exports = {
    view, 
    inputForm,
    getRandom 
}