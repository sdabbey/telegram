import { router } from "expo-router";
import React from "react";
import { ChannelList } from "stream-chat-expo";

export default function MainTabScreen(){
    
    return <ChannelList onSelect={(channel) => router.push(`/channel/${channel.cid}`)} />;
    
}