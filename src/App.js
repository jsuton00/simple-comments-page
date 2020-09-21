import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/actions/index';
import Comments from './components/Comments';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.filteredComments);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(actions.fetchComments());
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return (
    <div id="app" className="app">
      <Header />
      <main id="main" className="main container-fluid">
        <div id="comments-container" className="comments-container">
          {comments.length > 0 &&
            comments.map((comment, index) => {
              return <Comments key={index} comment={comment} />;
            })}
        </div>
      </main>
    </div>
  );
}

export default App;
