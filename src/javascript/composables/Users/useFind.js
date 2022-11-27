import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";

export default ()=>{
    let userInfo=ref(null)
    let mode=ref(false)
    const route=useRoute()
    onMounted(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`).then(response=>{
            userInfo.value=response.data
            mode.value=true
        })
    })
    return {userInfo,mode}
}