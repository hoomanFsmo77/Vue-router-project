import {ref} from "vue";
import axios from "axios";
import Swal from "sweetalert2";


export default ()=>{
    let title=ref('')
    let body=ref('')
    let mode=ref(false)

    const createPost = () => {
        if(title.value.length > 1 && body.value.length>1){
            mode.value=true
            axios.post('https://jsonplaceholder.typicode.com/posts',{
                title:title.value,
                body:body.value
            }).then(result=>{
                mode.value=false
                Swal.fire({
                    title:'Thanks!',
                    text:'Post created successfully',
                    confirmButtonText:'Ok'

                })
            })
        }
    }

    return {createPost,title,body,mode}
}