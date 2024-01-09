import express, { query } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4'
import bodyParser from 'body-parser';
import cors from 'cors';
import { todoTypes } from './src/graphQLTypes/brokerUsers.types';
import { getTodoList } from './src/graphQLTypes/services/data.service';
import { addNewBrokerInDB, brokerDetails, brokersList, deleteBrokerByID, updateBrokerInDB } from './src/graphQLTypes/services/brokers.service';
const port = 8000;

async function startServer() {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    const apolloServer = new ApolloServer({
        typeDefs: todoTypes,
        resolvers: {
            Query: {
                getBrokersList: async () => { return await brokersList() },
                getBroker: async (parent, { id }) => {
                    return await brokerDetails(id)
                }
            },
            Mutation: {
                addBroker: async (parent, { broker }) => {
                    return await addNewBrokerInDB(broker);
                },
                updateBroker: async (parent, args) => {
                    return await updateBrokerInDB(args);
                },
                deleteBroker: async (parent, { id }) => {
                    return await deleteBrokerByID(id);
                },
            }
        },
    });
    await apolloServer.start();
    app.use('/graphql', expressMiddleware(apolloServer));
    app.listen(port, () => {
        console.log(`Listening on ${port}`);
    });
}

startServer().then(resp => { });
