import { express } from "express";
import { router } from "./routes/routes";

const app = express();
const port = 3001;

app.use("/", router);

app.listen(port, () => {
  console.log(`Starting http server at http://localhost:${port}`);
});