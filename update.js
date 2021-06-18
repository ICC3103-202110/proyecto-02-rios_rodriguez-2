const http = require('http')

function api(location) {
  return new Promise((resolve, reject) => {
    const ApiKey = '9c75ae29490ad76f0fce010f77faf5a4'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${ApiKey}`
    const req = http.request(url, (res) => {
      res.setEncoding('utf8')
      let responseBody = ''

      res.on('data', (chunk) => {
        responseBody += chunk
      })

      res.on('end', () => {
        resolve(JSON.parse(responseBody))
      })
    })

    req.on('error', (err) => {
      reject(err)
    })
    req.end()
  })
}
    async function update(input, model){
    const {action, location} = input
    const {total} = model
    
    if (action === 'Add City'){

        await api(location)
        .then(data => {
            total.push({location: location, temp: data.main.temp, max: data.main.temp_max, min: data.main.temp_min})
        })
        .catch(err => {
            console.log("City doesnt exists");
            console.error(err);
        })
    }

    else if (action === 'Update City'){ 
        await api(location)
        .then(data => {
            for (i in total){
                var name = total[i].location
                if (name === location){
                    total.splice(i, 1)
                }
            }
            total.push({location: location, temp: data.main.temp, max: data.main.temp_max, min: data.main.temp_min})
        })
        .catch(err => {
            console.log("ERROR");
            console.error(err);
        })
         }

    else if (action === 'Delete City'){ 
        await api(location)
        .then(data => {
            for (i in total){
                var name = total[i].location
                if (name === location){
                    total.splice(i, 1)
                }
            }
        })
        .catch(err => {
            console.log("ERROR");
            console.error(err);
        })
        }
    
        return {
            ...model,
            total: total
        }
}

module.exports = {
    update
}





