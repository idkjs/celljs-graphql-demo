"use strict";

const { ApolloClient } = require("apollo-client");
const { createNetworkInterface } = require("apollo-client");
const gql = require("graphql-tag");
require("es6-promise").polyfill();
require("isomorphic-fetch");

const networkInterface = createNetworkInterface({
    uri: "http://localhost:5000/graphql"
});
// networkInterface.use([{
//     applyMiddleware(req, next) {
//         // we can apply tokens to the header here
//         next();
//     }
// }]);

const client = new ApolloClient({
    initialState: { apollo: "" },
    networkInterface: networkInterface
});

function getItems() {
    return client
        .query({
            query: gql `{
            viewer {
                businesses(first: 5) {
                    pageInfo {
                        hasNextPage
                    }
                    edges {
                        node {
                            name
                            stars
                            review_count
                        }
                    }
                }
            }
        }`
        })
        .then(results => {
            // console.log(results.data.viewer.businesses.edges);
            // console.log(client.store.getState().apollo);
            console.log("client fetch done");
            return results.data.viewer.businesses.edges;
        })
        .catch(error => {
            console.log("error: ", error);
        });
}
window._getItems = getItems;