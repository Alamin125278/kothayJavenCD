// const winston = require("winston");

import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const infoTransport = new winston.transports.DailyRotateFile({
  filename: "logs/info/info-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "20d",
  format: winston.format.combine(
    winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    winston.format.align(),
    winston.format.printf((info) => `${[info.timestamp]}: ${info.message}`)
  ),
});

const responseTransport = new winston.transports.DailyRotateFile({
  filename: "logs/response/response-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "20d",
  format: winston.format.combine(
    winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    winston.format.align(),
    winston.format.printf((info) => `${[info.timestamp]}: ${info.message}`)
  ),
});

const errorTransport = new winston.transports.DailyRotateFile({
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "20d",
  filename: "logs/error/error-%DATE%.log",
  format: winston.format.combine(
    winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    winston.format.align(),
    winston.format.printf(
      (info) => `error: ${[info.timestamp]}: ${info.message}`
    )
  ),
});

const debugTransport = new winston.transports.DailyRotateFile({
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "20d",
  filename: "logs/debug/debug-%DATE%.log",
  format: winston.format.combine(
    winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    winston.format.align(),
    winston.format.printf(
      (info) => `debug: ${[info.timestamp]}: ${info.message}`
    )
  ),
});

const resonseLogger = winston.createLogger({
  level: "info",
  transports: [responseTransport],
});

const infoLogger = winston.createLogger({
  level: "info",
  transports: [
    infoTransport,
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        winston.format.align(),
        winston.format.printf(
          (info) => `info: ${[info.timestamp]}: ${info.message}`
        ),
        winston.format.colorize({ all: true })
      ),
    }),
  ],
});

const errorLogger = winston.createLogger({
  level: "error",
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        winston.format.align(),
        winston.format.printf(
          (info) => `error: ${[info.timestamp]}: ${info.message}`
        ),
        winston.format.colorize({ all: true })
      ),
    }),
    errorTransport,
  ],
});

const debugLogger = winston.createLogger({
  level: "debug",
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        winston.format.align(),
        winston.format.printf(
          (info) => `debug: ${[info.timestamp]}: ${info.message}`
        ),
        winston.format.colorize({ all: true })
      ),
    }),
    debugTransport,
  ],
});

const debug = (message: string) => {
  debugLogger.debug(message);
};
const info = (message: string) => {
  infoLogger.info(message);
};
const error = (message: string) => {
  errorLogger.error(message);
};

const response = (response: any) => {
  resonseLogger.info(response);
};

export { debug, info, error, response };
