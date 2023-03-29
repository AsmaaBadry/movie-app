
import axios from 'axios'

const axiosInstance= axios.create({
  
    baseURL:"https://api.themoviedb.org/3",
    
    params:{
        api_key:"7db53794b12689b679ae27f3b3ebc2c5"
    }


})

export default axiosInstance