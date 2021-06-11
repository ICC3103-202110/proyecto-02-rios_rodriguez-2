const {inputForm} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {total} = model
        const {title} = currentView

        console.clear()
        console.log(title)
        if (total.length === 0){
            console.log("No cities")
        }
        else{
        printTable(total)
        }
        const input = await inputForm(model)
        const updatedModel = await update(input, model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}