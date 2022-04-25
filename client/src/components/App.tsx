import { useQuery, gql } from '@apollo/client'
import Post from './Post';

const GET_POSTS = gql`
    query getPosts{
        posts{
            id 
            title
            content
        }
    }
`

const App: React.FC = () => {
    const { loading, error, data } = useQuery(GET_POSTS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error:</p>

    const renderedList = data.posts.map((post: any) => (
        <Post post={post} />
    ))

    return <div><ul>{renderedList}</ul></div>

};

export default App;
