const axios = require('axios').default;
const request = require('request')

function connectToApi(cityName,ApiKey){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}`
    request(url,(error,response,body) => {
        const data =JSON.parse(body)
        console.log(data.main)
    })}
connectToApi('London,uk','9c75ae29490ad76f0fce010f77faf5a4')

const {getRandom} = require('./view')
function update(input, model){
    const {action, location} = input
    var {name, temp, max, min} = model
    if (action === 'Add City'){
        name.push(location)
        temp[location] = getRandom()
        max[location] = getRandom()
        min[location] = getRandom()
    }
    else if (action === 'Update City'){  
        nameIndex = name.indexOf(location)
        temp[location] = getRandom()
        max[location] = getRandom()
        min[location] = getRandom()
        
    }
    else if (action === 'Delete City'){  
        nameIndex = name.indexOf(location)
        name.splice(nameIndex, 1)
        delete temp[location]
        delete max[location]
        delete min[location]

      
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
