function update(input, model){
    const {action} = input
    const {nameCity} = input
    const {tempCity} = input
    const {maxCity, minCity} = input
    if (action == 'Add City'){
        console.log("hola")
    }
    
        return {
            ...model,
            name: 'z',
            temp: 2,
            max: 4,
            min: 5
        }
}

module.exports = {
    update
}
