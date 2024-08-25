const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className='loading-text'>Loading...</h2>;
  }

  return (
    <ul className='list-group'>
      {posts?.map((post) => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
