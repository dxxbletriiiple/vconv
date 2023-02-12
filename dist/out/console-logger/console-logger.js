export class ConsoleLogger {
    static getInstance() {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }
        return ConsoleLogger.logger;
    }
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        console.error(...args);
    }
    end() {
        console.log('Done!');
    }
}
