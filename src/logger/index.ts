import { Logger } from "winston";
import { defaultLogger } from "./default-logger";
import { devLogger } from "./dev-logger";
import { productionLogger } from "./production-logger";
import { stagingLogger } from "./staging-logger";

let logger: Logger = defaultLogger();

switch (process.env.ENV!) {
  case "development":
    logger = devLogger();
    logger.verbose("using development logger");
    break;
  case "staging":
    logger = stagingLogger();
    logger.verbose("using staging logger");
    break;
  case "production":
    logger = productionLogger();
    logger.verbose("using production logger");
    break;
}

export { logger };
