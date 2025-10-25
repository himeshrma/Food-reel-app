//Isme Server ko start karte hain aur Database se connect karte hain

const app = require("./app");
require("dotenv").config();
const connectDB = require("./db/db");

// Connect to the database
connectDB();
// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
