import {onMounted, ref} from "vue";
import axios from "axios";


export default ()=>{
    let usersList=ref([])
    let mode=ref(false)
    onMounted(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            usersList.value=response.data
            mode.value=true
        })
    })
    return {usersList,mode}
}