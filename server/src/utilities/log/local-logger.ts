import log4js from 'log4js';

function getBaseLoggerFilename() {
  return `logs/${process.env.APPLICATION_NAME}/${process.env.NODE_ENV}`;
}

const appenderOptions = {
  type: 'dateFile',
  pattern: 'yyyy-MM-dd.log',
  alwaysIncludePattern: true
};

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    trace: { ...appenderOptions, filename: `${getBaseLoggerFilename()}/trace/trace` },

    error: { ...appenderOptions, filename: `${getBaseLoggerFilename()}/error/error` },
    errorFilter: {
      type: 'logLevelFilter',
      appender: 'error',
      level: 'error',
      maxLevel: 'error'
    },

    warn: { ...appenderOptions, filename: `${getBaseLoggerFilename()}/warn/warn` },
    warnFilter: {
      type: 'logLevelFilter',
      appender: 'warn',
      level: 'warn',
      maxLevel: 'warn'
    },

    fatal: { ...appenderOptions, filename: `${getBaseLoggerFilename()}/fatal/fatal` },
    fatalFilter: {
      type: 'logLevelFilter',
      appender: 'fatal',
      level: 'fatal',
      maxLevel: 'fatal'
    }
  },
  categories: {
    default: {
      appenders: ['out', 'trace', 'errorFilter', 'warnFilter', 'fatalFilter'],
      level: 'debug'
    }
  }
});

const logger = log4js.getLogger();
export default logger;
