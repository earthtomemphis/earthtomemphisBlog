const Post = ({ post }: any) => {
    return (
        <div>
            <li key={post.id}>
                <div className="card lg:card-side w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.content}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
};

export default Post;
