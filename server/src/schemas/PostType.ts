import graphql, { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import Post from '../models/Post';

const PostType = new GraphQLObjectType({
    name: 'PostType',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        content: { type: GraphQLString }
    })
})

export default PostType