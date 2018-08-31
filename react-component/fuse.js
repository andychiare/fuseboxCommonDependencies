const { src, task, exec, context } = require("fuse-box/sparky");
const { FuseBox, QuantumPlugin, WebIndexPlugin } = require("fuse-box");

context(class {
    getConfig() {
        return FuseBox.init({
            homeDir: "src",
			target : 'browser@es5',
            output: "bundle/$name.js",
            useTypescriptCompiler : true,
            allowSyntheticDefaultImports : true,
            sourceMaps: true,
            plugins: [
                //!this.isProduction && WebIndexPlugin(),
                this.isProduction && QuantumPlugin({
                    uglify: false,
                    treeshake : true,
                    bakeApiIntoBundle: "index",
					containedAPI : true
                })
            ],
			globals: {"default": "WidgetModule"}
        });
    }
})

task("default", async context => {
    const fuse = context.getConfig();
    fuse.bundle("index")
        .hmr()
        .watch()
        .instructions(">[index.js]");

    await fuse.run()
});

task("dist", async context => {
    context.isProduction = true;
    const fuse = context.getConfig();
    fuse.bundle("index")
        .instructions(">index.js");

    await fuse.run()
});