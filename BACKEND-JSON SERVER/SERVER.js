const app = require('./src/app')
require("dotenv").config()
const connectDB = require('./src/db/DB')
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));