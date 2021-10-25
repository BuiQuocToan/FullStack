import axios from 'axios';
import { toast } from 'react-toastify';

const User_API_Url = "http://localhost:8080/api/v1/User";

class ServiceU {
    getAll(){
        return axios.get(User_API_Url)
    }
    insert(user){

        return axios.post("http://localhost:8080/api/v1/User/insert", user)
    }

    getById(userId){
        return axios.get(User_API_Url + '/' + userId)
    }

    update(user){
        console.log(user.id)
        console.log(User_API_Url + '/' + user.id)
        
        return axios.put(User_API_Url + '/' + user.id, user)
    }
    delete(userId){
        toast.error("Delete success",{
            icon: "🟢",
            theme: "colored"
          });
        return axios.delete(User_API_Url + '/' + userId)
    }
}

export default new ServiceU()