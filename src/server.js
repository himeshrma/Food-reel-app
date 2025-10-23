//Isme Server ko start karte hain aur Database se connect karte hain
const app = require("./app");
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
