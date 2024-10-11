import app from "./app.js";
import connectToMongoDB from "./DB/connetion.js";

connectToMongoDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("err" + error);
            throw error;
        });
        const PORT = process.env.PORT || 8001;
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(`mongodb connection error` + error);
    });
