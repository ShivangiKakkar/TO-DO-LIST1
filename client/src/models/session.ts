
import router from "../router";
import * as users from "../models/user";
import { useMessages } from "./notifications";
import { api } from "./myFetch";
import { defineStore } from "pinia";
import { decodeJWT, loadScript } from "./utils";

export const useSession = defineStore('session', {
    state: () => ({
        user: undefined as users.User | undefined,
        destinationUrl: null as string | null,
    }),
    actions: {
        // async GoogleLogin(){
        //     await loadScript('https://accounts.google.com/gsi/client','google-signin');
        //     const auth_client = google.accounts.oauth2.initTokenClient({
        //         client_id: <string>import.meta.env.VITE_GOOGLE_CLIENT_ID,
        //         scope: 'email profile',
        //         //scope is usually url, its telling 
        //         callback: async x => {
        //             //https://www.googleapis.com/calendar/v3/
        //             const user = await fetch('https://www.googleapis.com/oauth2/v3/userinfo?alt=json', {
        //                 headers: {
        //                     Authorization: `Bearer ${x.access_token}`,
        //                 },
        //             }).then(x => x.json());
        //             console.log(user);
        //             // const user = decodeJWT(x.credential);
        //             // console.log(user);
        //             this.user = {
        //                 id: user.sub,
        //                 email: user.email,
        //                 firstname: user.given_name,
        //                 lastname: user.family_name,
        //                 pic: user.picture,
        //                 handle: user.name,
        //                 password: '',
        //             }
        //         }
        //       });
        //       auth_client.requestAccessToken();
        // },
        async Login(email: string, password: string) {
            const messages = useMessages();
            try {
                const user = await this.api("users/login", { email, password });
                if(user){
                    messages.notifications.push({
                        type: "success",
                        message: `Welcome back ${user.firstname}`,
                    });
                }
                this.user = user;
                router.push(this.destinationUrl ?? '/');
            } catch (error: any){
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
                console.table(messages.notifications)
            }
        
           
        },
        Logout(){
            this.user = undefined;
            router.push('/login');
        },

        async signup(firstname: string, lastname: string, handle: string, email: string, password: string, confirmPassword: string, pic: string) {
            const messages = useMessages();
            try {
                if(password !== confirmPassword) {
                    messages.notifications.push({
                        type: "danger",
                        message: "Wrong password confirmation",
                    });
                } else {
                    const user = await this.api("users/", { firstname, lastname, handle, email, password, pic });
                    if(user) {
                    messages.notifications.push({
                        type: "success",
                        message: `Account created for ${user.firstname}`,
                    });
                    //this.user = user;
                    router.push(this.destinationUrl ?? '/login');
                    }
                }
            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
            }
        },

        async api(url: string, data?: any, method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', headers: any={}){
            const messages = useMessages();
            console.log("API--"+ url)
            if(this.user?.token){
                headers.Authorization = `Bearer ${this.user.token}`;
            }

            try{
                const response = await api(url, data, method, headers);
                if(response.errors?.length){
                    throw {message: response.errors.join(', ')};
                }
                return await response.data;
            } catch (error: any){
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
            }
        }
    },
})
export interface ApiResult {
    data: any;
    errors?: string[];
    success: boolean;
}