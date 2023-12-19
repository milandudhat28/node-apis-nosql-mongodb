const { Client } = require('@elastic/elasticsearch')
let host = require('../config/config.json').elasticSearch ? require('../config/config.json').elasticSearch.host : 'http://localhost:5601'
const client = new Client({ node: host, auth: {
    username: require('../config/config.json').elasticSearch ? require('../config/config.json').elasticSearch.username : 'elastic',
    password: require('../config/config.json').elasticSearch ? require('../config/config.json').elasticSearch.password : '6e9zvVeIJVfFYHPkKRL2'
} })

setup.es = client
module.exports = {
    es: client
}
