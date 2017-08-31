Run entirely from source:

```bash
# Terminal Window 1 - Start MongoDB Instance
mongod

# Terminal Window 2 - Start Web App
cd Online-Workout-Manager
npm install
npm start

# Terminal Window 3 - Port Web App through Local Tunnel so Pebble can see website
lt --port 3000
# then copy the URL into the ./src/js/app.js BASE_URL variable

# Terminal Window 4 - Build Pebble app to watch
pebble build; pebble install --phone 192.168.0.103 --logs

# Open the Configuration window in the Pebble App
```

*Notes: [Install localtunnel](https://github.com/localtunnel/localtunnel#installation) and make sure to copy the URL into the ./src/js/app.js BASE_URL variable from `lt --port 3000` (Terminal #4 below)*