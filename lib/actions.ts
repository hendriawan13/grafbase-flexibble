import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === 'production';
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql'

const client = new GraphQLClient('apiUrl')

const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
        
    } catch (error) {
        throw error
    }
}