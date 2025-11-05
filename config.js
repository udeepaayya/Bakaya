const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "DBcCGaKQ#OD5Ts5uUlBzDYkxTQt1jpa-gql7aBP-GeIwfapUPqlo",
  MONGODB: process.env.MONGODB || "mongodb://mongo:IvGsoWkHeghtJmofHDpdPTIirLEIDWIM@caboose.proxy.rlwy.net:18576",
  OWNER_NUM: process.env.OWNER_NUM || "94762095304",
};
