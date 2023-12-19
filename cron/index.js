'use strict';

const _ = require('lodash');

// extend respose messages

module.exports = _.extend(
    require('./employee'),
    require('./candidate'),
    require('./student'),
    require('./helpdesk'),
    require('./evaluation'),
)