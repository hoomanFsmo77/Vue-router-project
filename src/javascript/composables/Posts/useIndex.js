import {onMounted, ref} from "vue";
import axios from "axios";

export default ()=>{
    let mode=ref(false)
    let data=ref([])
    onMounted(function () {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(result=>{
            mode.value=true
            data.value=result.data
        })
    })

    return {mode,data}
}