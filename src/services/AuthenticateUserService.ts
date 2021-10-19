
import axios from "axios";

class AuthenticateUserService{
    async execute(code: string){
        const url = "https://github.com/login/oauth/acess_token";
        const res = await axios.post(url,null,{
            params:{
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "applicativo/json"
            }
        })
        return res.data;
    }
}
export { AuthenticateUserService};