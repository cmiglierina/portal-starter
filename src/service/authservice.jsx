import RestUtils from "../api/apiutils";

const authservice = {

    login : async (user) => {
        const url = import.meta.env.VITE_TODO_API_BASEURL + '/auth/generateToken';
        let res = {data:null,esito:false,message:'',status:0};
        await RestUtils.doPost(url,{username:user.username,password:user.password},
            (response) => {
                res.data = response.payload;
                res.message = response.errormessage;
                res.esito = response.status == 200;
                res.status = response.status;
            },
            (e) => {
                res.message = e.errormessage;
                res.esito = false;
                res.status = e.status;
            } );

        return res;
    }
}

export default authservice;