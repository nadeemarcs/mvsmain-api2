const winston = require('winston');
const log4js = require('log4js');

const logger = log4js.getLogger('ATS');
logger.level = 'trace';

module.exports = logger;
