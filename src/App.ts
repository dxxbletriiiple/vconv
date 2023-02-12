import { FfmpegExecutor } from './command/ffmpeg/ffmpeg.executor';
import { ConsoleLogger } from './out/console-logger/console-logger';

export class App {
	async run() {
		new FfmpegExecutor(ConsoleLogger.getInstance()).execute();
	}
}

const run = new App();
run.run();
