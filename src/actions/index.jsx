import jsonPlaceHolder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async dispatch => {
    const respone = await jsonPlaceHolder.get('posts');
    dispatch({type: 'FETCH_POSTS', payload: respone})
  };
};
