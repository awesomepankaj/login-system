var _ = require('lodash')
var hashPassword = require('./hashPassword')
var debug = require('debug')('readUser')
var error = debug
error.log = console.log.bind(console)

var es = require('../es')

/**
 * [check user exists in database]
 * @param  {[Object]} params [contains userInformation]
 * @param  {[object]} res    [response Object]
 */
module.exports = function(params, res) {
  es.get({
    index: 'loginusers',
    type: 'loginuser',
    id: params.username
  })
  .then(function(response) {

    if(params.password) {
      if(hashPassword.validate(response._source.password, params.password) && params.username === response._source.username) {
        res.cookie('user', params.username , { maxAge: 9000000000});
        res.status(200).json(response._source) 
      }
      else {
        res.status(401).json({message: 'Please check your nick and password'}) 
      }
    
    }
    else {
      res.status(200).json(response._source) 
    }

  })
  .catch(function(error){

    res.sendStatus(400)

  })
}

if(require.main === module) {
  module.exports({
    username: 'pankaj',
    password: 'pankaj16'
  })
}
