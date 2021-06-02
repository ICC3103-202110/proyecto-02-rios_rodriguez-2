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
        'Temp': Object.values(temp),
        'Max': Object.values(max),
        'Min': Object.values(min)
      }
    
    ]
}
function inputForm(model){
    const {name, temp} = model
    const action = 'Select action:'
    const location = 'Location?'
    const question = 'Select an option'
    const choices = ['Add City', 'Update City', 'Delete City']
    var names = name
    console.log(name)
    console.log(temp)

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
            message: question,
            choices: names,
            when: (answers) => answers.action === 'Update City'
        }, 
        {
            name: 'location',
            type: 'input',
            message: question,
            choices: names,
            when: (answers) => answers.action === 'Delete City'
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