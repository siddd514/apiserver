
const express = require("express")
const app = express()
const PORT = 8080

app.use(express.json())



// Say hi by default page

app.get('/', (req, res) => {
  res.send('Hai.');
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});