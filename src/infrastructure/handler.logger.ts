import { TransformableInfo } from 'logform';
import { createLogger, format, Logger, transports } from 'winston';

const { colorize, combine, printf } = format;

export class HandlerLogger {
  private wlogger: Logger;

  constructor(wLogger: Logger) {
    this.wlogger = wLogger;
  }

  public info(logMessage: string) {
    this.wlogger.info(logMessage);
  }

  public error(errorMessage: string) {
    this.wlogger.error(errorMessage);
  }
}

const customFormat = printf((info: TransformableInfo) => {
  const now = new Date();
  now.setHours(now.getHours() - 4);

  return `${now.toLocaleString()} [${info.level}]: ${info.message}`;
});

export function newHandlerLogger(): HandlerLogger {
  const options = {
    format: format.json(),
    level: 'info',
    transports: [
      new transports.File({ filename: 'error.log', level: 'error' }),
      new transports.Console({ format: combine(colorize(), customFormat) }),
    ],
  };

  return new HandlerLogger(createLogger(options));
}
