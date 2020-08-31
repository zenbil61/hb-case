const path = require('path')

module.exports = function override(config, env) {
    config.resolve = {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "_variables": path.resolve(__dirname, "src/styles/_variables.scss"),
            "_mixins": path.resolve(__dirname, "src/styles/_mixins.scss"),
            "components": path.resolve(__dirname, "src/components/"),
            "ui": path.resolve(__dirname, "src/components/ui/"),
            "utils": path.resolve(__dirname, "src/utils/"),

        }
    };
    return config;
}
