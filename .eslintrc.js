module.exports = {
    "env": {
        "node": true
    },
    "globals": {
        "Pebble": true,
        "localStorage": true,
        "XMLHttpRequest": true,
        "define": true,
        "MessageQueue": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off"
    }
};