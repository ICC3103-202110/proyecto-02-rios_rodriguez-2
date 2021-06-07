const request = require('request')

    function update(input, model){
    const ApiKey = '9c75ae29490ad76f0fce010f77faf5a4'
    const {action, location} = input
    var {name, temp, max, min, total} = model

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${ApiKey}`
    request(url,(error,response,body) => {
        const data = JSON.parse(body)
   
    if (action === 'Add City'){
        name.push(location)
        temp[location] = data.main.temp 
        max[location] = data.main.temp_max
        min[location] = data.main.temp_min
        total.push({location: location, temp: data.main.temp, max: data.main.temp_max, min: data.main.temp_min})
    }
    else if (action === 'Update City'){ 
        temp[location] = data.main.temp
        max[location] = data.main.temp_max
        min[location] = data.main.temp_min

        nameIndex = name.indexOf(location)
        total.splice(nameIndex, 1)
        name.splice(nameIndex, 1)
        name.push(location)
        total.push({location: location, temp: data.main.temp, max: data.main.temp_max, min: data.main.temp_min})

    }
    else if (action === 'Delete City'){ 
       
        nameIndex = name.indexOf(location)
        name.splice(nameIndex, 1)
        total.splice(nameIndex, 1)
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
