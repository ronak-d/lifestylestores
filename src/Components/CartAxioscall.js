import axiosApiCall from "./Axios/AxiosCall"

export const handleClick = (data) => {
    axiosApiCall("cart","post",data)
    .then((response) => {
      console.log("response")
    })
}