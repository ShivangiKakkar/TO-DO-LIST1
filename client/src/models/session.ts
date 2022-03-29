import { reactive } from "vue";
import router from "../router";
import * as users from "../models/user";
import { useMessages } from "./notifications";

const session = reactive({
    user: null as users.User | null,
    destinationUrl: null as string | null,
})

export async function Login(email: string, password: string) {
    const user = users.list.find(u => u.email === email);
    const messages = useMessages();

    try {
        if(!user){
            throw { message: "Following user not found. User: " + email };
        } 
        if(user.password !== password){
            throw { message: "Incorrect Password" };
        }
        messages.notifications.push({
            type: "success",
            message: `Welcome back ${user.firstname}`,
        });
        
        session.user = user;
        console.log(session.destinationUrl)

        navigateToDeepLink();
    } catch (error: any){
        messages.notifications.push({
            type: "danger",
            message: error.message,
        });
    }
}

export function navigateToDeepLink()
{
    router.push(session.destinationUrl ?? '/');
}

export function Logout() {
    session.user = null;
    router.push('/login');
}

export default session;