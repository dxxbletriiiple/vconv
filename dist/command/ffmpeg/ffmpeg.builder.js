export class FfmpegBuilder {
    constructor() {
        this.options = new Map();
        this.options.set('-c:v', 'libx264');
    }
    input(inputPath) {
        this.inputPath = inputPath;
        return this;
    }
    setVideoSize(width, height) {
        this.options.set('-s', `${width}x${height}`);
        return this;
    }
    output(outputPath) {
        if (!this.inputPath) {
            throw new Error('There is no input file!');
        }
        const args = ['-i', this.inputPath];
        this.options.forEach((val, key) => {
            args.push(key);
            args.push(val);
        });
        args.push(outputPath);
        return args;
    }
}
