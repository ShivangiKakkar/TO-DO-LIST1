import { defineStore } from 'pinia'

export const useMessages = defineStore('messages', {
  
    state: () => ({
        notifications: [] as Notifications[]
    }),
    actions: {
        close(index: number) {
            this.notifications.splice(index, 1);
        }
    }
})
export interface Notifications {
    type: 'success' | 'danger' | 'warning' | 'info';
    message: string;
}