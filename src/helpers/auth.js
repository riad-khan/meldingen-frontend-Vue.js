import jwtDecode from "jwt-decode";

export const isAuth = () =>{
    if(!localStorage.getItem('token')) return false;
    if(localStorage.getItem('token')){
        const {exp} = jwtDecode(localStorage.getItem('token'))
        return (new Date()).getTime() < exp * 1000
    }
    else{
        return false
    }
}

export const userInfo = () =>{
    const{name, email} = jwtDecode(localStorage.getItem('token'));
    return {name, email};

}