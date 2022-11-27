import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default ()=>{
    let route=useRoute()
    let mode=ref(false)
    let deleteMode=ref(false)
    let data=ref([])
    onMounted(function () {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`).then(result=>{
            data.value=result.data
            mode.value=true
        })
    })
    const deletePost = () => {
        deleteMode.value=true
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`).then(res=>{
            deleteMode.value=false
            Swal.fire({
                title:'Thanks!',
                text:`Post(${route.params.id}) deleted successfully`,
                confirmButtonText:'Ok'
            })
        })
    }


    return {mode,data,route,deletePost,deleteMode}
}