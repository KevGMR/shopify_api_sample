const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 9400;

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.listen(port, () => {
    console.log(`Server active on port ${port}`);
});


//SHOPIFY GRAPHQL DEFINITIONS

async function getProducts() {
    return await shopifyGraphQL(
    `
    query getProducts{
        products(first:10){
            pageInfo{
                hasNextPage
                endCursor
            }
            edges{
                node{
                    title
                }
            }
        }
    }
    `
    );
}

app.get('/', (req,res) => {
    const data = getProducts()
    console.log(data);
})

