import winston from "winston";
const { printf, combine, timestamp, colorize } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `--- ${timestamp} [${level}]: ${message}`;
});

export const productionLogger = () => {
  return winston.createLogger({
    level: "silly",
    format: combine(colorize(), timestamp(), myFormat),
    // defaultMeta: { service: "user-service" },
    transports: [
      new winston.transports.Console({ level: "warn" }),

      new winston.transports.File({ filename: "combined.log" }),

      new winston.transports.File({ filename: "api.log", level: "http" }),
    ],
  });
};
