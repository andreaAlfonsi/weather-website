const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url='https://api.darksky.net/forecast/cfb9f74328aec794d49e0d12582cc4c9/'+latitude+','+longitude+'?lang=it&units=si'

    request({url, json: true},(error, {body})=>{
        if(error) {
            callback('Unable to connect to weather service')
        } else if(body.error){
            callback('Unable to find location')
        } else {
            callback(undefined, body.daily.data[0].summary + ' Al momento ci sono '+body.currently.temperature+' gradi. Le massime sono di '+body.daily.data[0].temperatureHigh+' gradi, mentre le minime sono di '+body.daily.data[0].temperatureLow+' gradi. La probabilità che piova è del '+body.currently.precipProbability+'%.')
        }
    })
}

module.exports = forecast