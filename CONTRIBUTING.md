Run entirely from source:

*Notes: [Install localtunnel](https://github.com/localtunnel/localtunnel#installation) and make sure to copy the URL into the ./src/js/app.js BASE_URL variable from `lt --port 3000` (Terminal #4 below)*

```bash
# Terminal Window 1 - Build Pebble app to watch
pebble build; pebble install --phone 192.168.0.103 --logs

# Terminal Window 2 - Start MongoDB Instance
mongod

# Terminal Window 3 - Start Web App
cd Online-Workout-Manager
npm install
npm start

# Terminal Window 4 - Port Web App through Local Tunnel so Pebble can see website
lt --port 3000
# then copy the reported URL into the ./src/js/app.js BASE_URL variable
```