import {onMounted, ref} from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default (props)=>{
    let title=ref('')
    let body=ref('')
    let mode=ref(false)
    onMounted(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${props.id}`).then(result=>{
            title.value=result.data.title
            body.value=result.data.body
        })
    })


    const createPost = () => {
        if(title.value.length>1 && body.value.length>1){
            mode.value=true
            axios.put(`https://jsonplaceholder.typicode.com/posts/${props.id}`,{
                title:title.value,
                body:body.value
            }).then(res=>{
                mode.value=false
                Swal.fire({
                    title:'Thanks!',
                    text:'Post updated successfully',
                    confirmButtonText:'Ok'
                })
            })
        }

    }
    return {title,body,createPost,mode}

}