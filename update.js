const axios = require('axios').default;
const request = require('request')
const {getRandom} = require('./view')

    function update(input, model){
    const ApiKey = '9c75ae29490ad76f0fce010f77faf5a4'
    const {action, location} = input
    var {name, temp, max, min} = model

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${ApiKey}`
    request(url,(error,response,body) => {
        const data = JSON.parse(body)
   
    if (action === 'Add City'){
        name.push(location)
        temp[location] = data.main.temp
        max[location] = data.main.temp_max
        min[location] = data.main.temp_min
    }
    else if (action === 'Update City'){  
        temp[location] = data.main.temp
        max[location] = data.main.temp_max
        min[location] = data.main.temp_min
        
    }
    else if (action === 'Delete City'){  
        nameIndex = name.indexOf(location)
        name.splice(nameIndex, 1)
        delete temp[location]
        delete max[location]
        delete min[location]
        
    }
})
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
