 import {create} from "zustand";
 import { axiosInstance } from "../lib/axios.js";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";

export const useChatStore=create((set,get)=>({
    messages:[],
    users:[],
    selectedUser:null,
    isUsersLoading:false,
    isMessagesLoading:false,

    getUsers: async()=>{
        set({isUsersLoading:true});
        try{
            const res= await axiosInstance.get("/messages/users");
            set({users:res.data});
        }catch(error)
        {
            toast.error(error.response.data.message);
            console.log("Error in getting users: ",error);
        }finally{
            set({isUsersLoading:false});
        }

    },

    getMessages: async(userId)=>{
        set({isMessagesLoading:true});
        try{
            const res= await axiosInstance.get(`/messages/${userId}`);
            set({messages:res.data});
        }catch(error)
        {
            toast.error(error.response.data.message);
            console.log("Error in getting messages: ",error);
        }finally{
            set({isMessagesLoading:false});
        }

    },

    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get();
        if (!selectedUser?._id) {
            toast.error("Please select a user before sending a message.");
            return;
        }
        try {
        console.log("Sending message to:", selectedUser._id);
        console.log("Message data:", messageData);

        const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
        set({ messages: [...messages, res.data] });

        console.log("Message sent:", res.data);
        } catch (error) {
            console.error("Send error:", error);
            toast.error(error?.response?.data?.message || "Failed to send message");
        }
    },

    subscribeToMessages: () => {
        const { selectedUser } = get();
        if (!selectedUser) return;

        const socket = useAuthStore.getState().socket;

        socket.on("newMessage", (newMessage) => {
        const isMessageSentFromSelectedUser = newMessage.senderId === selectedUser._id;
        if (!isMessageSentFromSelectedUser) return;

        set({
            messages: [...get().messages, newMessage],
        });
        });
    },

    unsubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket;
        socket.off("newMessage");
    },
    
    
    setSelectedUser:(selectedUser)=>set({selectedUser}),


}));