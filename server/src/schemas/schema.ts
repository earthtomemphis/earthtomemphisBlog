import graphql, { GraphQLSchema } from 'graphql'

import RootQuery from './rootQuery'

export default new GraphQLSchema({
    query: RootQuery
})