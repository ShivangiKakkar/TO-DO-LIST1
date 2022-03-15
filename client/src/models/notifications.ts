import { defineStore } from 'pinia'

export const useMessages = defineStore('messages', {
  
    state: () => ({
        notifications: [
            { type: 'primary', message: 'Welcome to your digital diary!' },
        ] 
    }),
    actions: {
        close(index: number) {
            this.notifications.splice(index, 1);
        }
    }
})