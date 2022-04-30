const express = require('express')
const app = express
const args = require('minimst')(process.argv.slice(2))
const HTTP_PORT = args.port || 5000;
// Start an app server
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});
export function coinFlip() {
    var randomNum = Math.random()
    if (randomNum > 0.5) {
      return "heads"
    }
    else {
      return "tails"
    }
  }
export function coinFlips(flips) { 
    let flipList = []; 
    let i = 0; 
    for (let i=0; i < flips; i++) {
        flipList.push(coinFlip());
    }
    return flipList;
}
export function countFlips(array) {
    var count;
    var heads = 0;
    var tails = 0;
    var i = 0;
    for (let i=0; i < array.length; i++) {
        if (array[i] === "tails") {
        tails += 1;
        } else {
        heads += 1;
        }
}
    if (heads == 0) {
        count = { tails };
    } else if (tails == 0) {
        count = { heads };
    } else {
        count = { tails, heads }; 
    }
    return count;
}
export function flipACoin(call) {
    var statement = {
      call,
      flip: coinFlip(),
      result: " ",
    }; 
  
    if (statement.call == statement.flip) {
      statement.result = "win";
    } 
    else {
      statement.result = "lose";
    } 
    return statement; 
  }
// Default response for any other request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});

app.get('/app/', (req, res) => {
    // Respond with status 200
        res.statusCode = 200;
    // Respond with status message "OK"
        res.statusMessage = 'OK';
        res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' +res.statusMessage)
    });