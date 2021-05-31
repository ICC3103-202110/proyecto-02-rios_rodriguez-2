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
    const {value} = model
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
    const {leftValue, leftT} = model
    const action = 'Select action:'
    const choices = ['Add City', 'Update City', 'Delete City']

    return inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: action,
            default: leftT,
            choices: choices
        }
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}
module.exports = {
    view, 
    inputForm 
}