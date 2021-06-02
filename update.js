const {getRandom} = require('./view')
function update(input, model){
    const {action} = input
    const {nameCity} = input
    const {tempCity} = input
    const {maxCity, minCity, location} = input
    var {name, temp, max, min} = model
    console.log(location)
    if (action === 'Add City'){
        name.push(location)
        temp[location] = getRandom()
        max[location] = getRandom()
        min[location] = getRandom()

        
    }
    
        return {
            ...model,
            name: name,
            temp: temp, 
            max: max,
            min: min
        }
}

module.exports = {
    update
}
