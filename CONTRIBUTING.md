# Guide

Notes on running and editing this fork variant of the Pebble Workout Timer


## Modify Workouts

1. Edit `src/js/workouts.json`. Use [`Pretty Json: Minify (compress) JSON`](https://packagecontrol.io/packages/Pretty%20JSON) from `Sublime` or [`JSON Tools`](https://marketplace.visualstudio.com/items?itemName=eriklynd.json-tools) for `VSCode` (Alt + M to minify)
1. Paste into the `manual_workout` variable

## Basic Install

Open the Pebble app on your phone. Go to the developer tab and enable developer mode then see the IP address listed in the app

See the [Rebble](https://developer.rebble.io/developer.pebble.com/tutorials/index.html) tutorials for additional information

```sh
# Check pebble installation
pebble --version

# Active a Python 2.7.* environment (2.7.15)
activate py2717

# Install Application to Phone
pebble build; pebble install --phone 192.168.0.2
```

## Debug both web app and Pebble app

Optional: this isn't necessary if just using the JSON text-editing approach

```sh
# Terminal Window 1 - Start MongoDB Instance
mongod

# Terminal Window 2 - Start Web App
cd Online-Workout-Manager
npm install
npm start

# Terminal Window 3 - Expose Web App through localtunnel
lt --port 3000

# Copy the localtunnel URL into the ./src/js/app.js BASE_URL variable

# Terminal Window 4 - Build Pebble app to watch
pebble build; pebble install --phone 192.168.0.103 --logs

# Open the Configuration window in the Pebble App
```

*Notes: [Install localtunnel](https://github.com/localtunnel/localtunnel#installation) and make sure to copy the URL into the ./src/js/app.js BASE_URL variable from `lt --port 3000` (Terminal #4 below)*
