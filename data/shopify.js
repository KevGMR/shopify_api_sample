const axios = require("axios");

// ACTUAL SHOP
let domain = process.env.SHOPIFY_DOMAIN;
let accessToken = process.env.SHOPIFY_ACC_TOKEN;

let url = `https://${domain}.myshopify.com/admin/api/2023-04/graphql.json`;

async function shopifyGraphQL(query, variables, operationName) {
  try {
    const { data } = await axios.post(
      url,
      {
        variables,
        query,
        operationName,
      },
      {
        headers: {
          "X-Shopify-Access-Token": accessToken,
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    console.log({ graphql: error });
    return;
  }
}

module.exports = shopifyGraphQL;
