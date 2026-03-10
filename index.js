import express from "express";  // step 5
import axios from "axios";  // step 5

// const port = 3000; remove this step and go to line 24 to add it  // step 5
const app = express();  // step 5

// Tell express to use the 'public' folder for CSS/images
app.use(express.static("public"));  // step 5

// Tell express that our templates are EJS files
app.set("view engine", "ejs");  // step 5

// This route handles the home pages and fetches blog data
app.get("/", async(req, res)=>{
    try{
        const response = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts");
        res.render("index.ejs", {posts: response.data});
    } catch(error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {error: error.message})
    }
});  // step 6

const port = process.env.PORT||3000;

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
});