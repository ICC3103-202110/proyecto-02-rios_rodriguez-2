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
function getTable(model){
    const {name, temp, max, min} = model
    
    return [
        {
        'Name': name,
        'Temp': temp,
        'Max': max,
        'Min': min
      }
    
    ]
}
function inputForm(model){
    const action = 'Select action:'
    const location = 'Location?'
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
            type: 'input',
            message: location,
            when: (answers) => answers.action === 'Add City'
        }
    ])
}


function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}
function getRandom() {
    return Math.random();
  }

module.exports = {
    view, 
    inputForm,
    getRandom 
}