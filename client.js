const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to the game server");
    conn.write("Name: CJU");
  });
  
  conn.on("disconnection", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {connect}