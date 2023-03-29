import axiosInstance from '../../axiosConfig/axios';

export default function setmovise() {
  return (dispatch) => {
    return axiosInstance
      .get('/movie/popular')
      .then((res) => {
        console.log(res.data.results);
        dispatch({ type: 'SET_FAVOURITEMOV', payload: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
