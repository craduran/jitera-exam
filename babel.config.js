module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "10"
                }
            }
        ],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    "plugins": ["@babel/plugin-proposal-class-properties"],
    "env": {
        "production": {
            "plugins": [["transform-react-remove-prop-types", { "removeImport": "true" }]]
        }
    }
}
