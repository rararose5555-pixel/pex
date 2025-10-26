// Import express
const express = require("express");
const app = express();

// Define homepage (HTML + CSS + JS all in one)
app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Express App</title>
    <style>
      body {
        font-family: 'Poppins', sans-serif;
        background-color: #fff4f4;
        text-align: center;
        padding: 40px;
      }
      header {
        background: #ff9eb5;
        color: white;
        padding: 15px;
        border-radius: 12px;
        font-size: 22px;
      }
      button {
        background-color: #ff6e91;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        margin: 10px;
        font-size: 16px;
      }
      button:hover {
        background-color: #ff4f78;
      }
      footer {
        margin-top: 40px;
        color: #777;
      }
      #output {
        margin-top: 20px;
        color: #4b0082;
      }
    </style>
  </head>
  <body>
    <header>Welcome to My Express App</header>
    <main>
      <p>Click the buttons below to see Callback and Event Loop examples</p>
      <button onclick="runCallback()">Run Callback</button>
      <button onclick="runEventLoop()">Run Event Loop</button>
      <h3 id="output"></h3>
    </main>
    <footer></footer>

    <script>
      // Callback example
      function runCallback() {
        function exampleCallback(cb) {
          cb();
        }
        exampleCallback(function() {
          console.log("Callback executed! Check console!");
          document.getElementById('output').textContent = "Callback executed! Check console!";
        });
      }

      // Event Loop example
      function runEventLoop() {
        console.log("Event Loop executed! Check console!");
        document.getElementById('output').textContent = "Event Loop executed! Check console!";
        setTimeout(() => {
          console.log("Event Loop setTimeout finished after 2 seconds!");
        }, 2000);
      }
    </script>
  </body>
  </html>
  `);
});

// Start server
app.listen(3000, () => console.log("Server running at http://localhost:3000"));
