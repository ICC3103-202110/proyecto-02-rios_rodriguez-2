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
    const {total} = model


    const action = 'Select action:'
    const location = 'Location?'
    const question = 'Select an option'
    const choices = ['Add City', 'Update City', 'Delete City']
    cities = names(total)
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
            choices: cities,
            when: (answers) => answers.action === 'Update City'
        }, 
        {
            name: 'location',
            type: 'list',
            message: question,
            choices: cities,
            when: (answers) => answers.action === 'Delete City'
        } 
    ])
}

function view(){
    return {
        title: getTitle()
       
    }
}

function names(model){
    const total = model
    var i = 0
    var city = []
    const length = total.length
    while (i < length){
        city.push(total[i].location)
        i += 1
    }
    return city
    }

module.exports = {
    view, 
    inputForm
}