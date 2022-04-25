import graphql, { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID } from 'graphql'
import Post from '../models/Post'
import PostType from './PostType'

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        posts:
        {
            type: new GraphQLList(PostType),
            resolve() {
                return Post.find({})
            }
        },
        post: {
            type: PostType,
            id: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, { id }) {
                return Post.findById(id)
            }
        }
    })
})

export default RootQuery