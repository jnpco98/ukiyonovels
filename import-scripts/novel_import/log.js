import log4js from 'log4js';

log4js.configure({
  appenders: {
    all: { type: 'file', filename: `./logs/rln/log.log` },
    errors: { type: 'file', filename: `./logs/rln/error.log`},
    errorsFilter: { type: 'logLevelFilter', appender: 'errors', level: 'error' }
  },
  categories: { 
    default: { appenders: ['all', 'errorsFilter'] , level: 'debug'}
  }
});

export default log4js.getLogger();