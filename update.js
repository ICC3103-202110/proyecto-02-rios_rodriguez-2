const {getRandom} = require('./view')
function update(input, model){
    const {action} = input
    const {nameCity} = input
    const {tempCity} = input
    const {maxCity, minCity, location} = input
    var {name, temp} = model
    console.log(location)
    if (action === 'Add City'){
        name.push(location)
        temp[location] = getRandom()
        
    }
    
        return {
            ...model,
            name: name,
            temp: temp,
            max: 4,
            min: 5
        }
}

module.exports = {
    update
}
