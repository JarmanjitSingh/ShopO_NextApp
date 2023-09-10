import axios from "axios"

export const createNewUser = async(formData)=>{
try {
    const response = await axios.post('api/sign-up', formData, {
        headers: {
            "content-type": "application/json"
        }
    })

   return response.data
} catch (error) {
    console.log("Error: ", error)
}
}

