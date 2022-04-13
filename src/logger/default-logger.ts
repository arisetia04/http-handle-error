import winston from "winston";
const { printf, combine, timestamp, colorize } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `--- ${timestamp} [${level}]: ${message}`;
});

export const defaultLogger = () => {
  return winston.createLogger({
    level: "silly",
    format: combine(colorize(), timestamp(), myFormat),
    // defaultMeta: { service: "user-service" },
    transports: [new winston.transports.Console()],
  });
};
