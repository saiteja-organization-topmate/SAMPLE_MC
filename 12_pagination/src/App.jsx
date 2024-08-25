import { useState } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './App.css';
import useFetch from './customHooks/useFetch';

const App = () => {
  const { data: posts, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  let currentPosts = [];

  // Get current posts
  if (!loading && posts?.length > 0) {
    // currentPage starts from 1
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
  }

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className='container'>
      <h1 className='text-primary'>My Blog</h1>
      {posts?.length > 0 && (
        <>
          <Posts posts={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts?.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

export default App;
