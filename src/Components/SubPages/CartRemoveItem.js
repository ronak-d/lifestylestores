import axiosApiCall from "../Axios/AxiosCall"

export const handleRemove = (data) => {
    axiosApiCall("cart_remove","post",data)
    .then((response) => {
      console.log("response")
    })
}