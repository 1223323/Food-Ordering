import { REGISTER_REQUEST } from "./ActionType"

export const registerUser =(reqData)=>async(dispatch)=>{
    dispatch(REGISTER_REQUEST)
    try{

        const {data} = await axios.post("${API_URL}/auth/signup", reqData.userData);
        if(data.jwt)localStorage.setItem("jwt" , data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER"){
            rewData.navigate("/admin/restaurant")
        }
        else{
            console.log("Navigating to home page");
            reqData.navigate("/")
        }
        dispatch({type:REGISTER_SUCCESS, payload:data.jwt});
        console.log("register success ",data)

    }catch (error){
        console.log("error",error)
    }
}
export const loginUser = (reqData) => async (dispatch) => {
    dispatch({type: LOGIN_REQUEST})
    try {
        const {data} = await axios.post("${API_URL}/auth/signin", reqData.userData);
        if(data. jwt) localStorage.setItem("jwt", data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        } else {
            reqData.navigate("/")
        }
        dispatch({type: LOGIN_SUCCESS, payload: data.jwt});
    } catch (error) {
        dispatch({type: LOGIN_FALIURE, payload: error.message})
        console.log("error", error)
    }
}

export const getUser = (jwt) => async (dispatch) => {
    dispatch({type: GET_USER_REQUEST})
    try {
        const {data} = await axios.post("${API_URL}/api/users/profile", {
        //const {data} = await axios.get("${API_URL}/api/users/profile", {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });
        dispatch({type: GET_USER_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: GET_USER_FALIURE, payload: error.message})
        console.log("error", error)
    }
}

export const logout = (navigate) => async (dispatch) => {
    localStorage.removeItem("jwt");
    dispatch({type: LOGOUT});
    navigate("/");
}
export const addToFavourite = ({jwt,restaurantId}) => async (dispatch) => {
    dispatch({type: ADD_TO_FAVOURITE_REQUEST})
    try {
        const {data} = await axios.put(`/api/restaurants/${restaurantId}/add-favourite`,{}, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });
        dispatch({type: ADD_TO_FAVOURITE_SUCCESS, payload: data});
        console.log("add to favourite success", data);
    } catch (error) {
        dispatch({type: ADD_TO_FAVOURITE_FAILURE, payload: error.message})
        console.log("error", error)
    }
}
