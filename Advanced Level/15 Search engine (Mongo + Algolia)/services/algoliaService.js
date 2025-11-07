const algoliasearch = require("algoliasearch");
const dotenv = require("dotenv");

dotenv.config();

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

const syncProductToAlgolia = async(product) => {
    try {
        await index.saveObject({
            objectID: product._id.toString(),
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category
        });
    } catch (error) {
        console.error("Algolia sync error:", error);
    }
};

const searchProducts = async(query) => {
    return await index.search(query);
};

module.exports = { syncProductToAlgolia, searchProducts };