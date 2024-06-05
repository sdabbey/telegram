import { router } from "expo-router";
import React, { useState } from "react";
import { Text } from "react-native";
import { Channel as ChannelType } from "stream-chat";
import { ChannelList, Channel, MessageList, MessageInput } from "stream-chat-expo";

export default function MainTabScreen(){
    const [channel, setChannel] = useState<ChannelType>();

    
    return <ChannelList onSelect={(channel) => router.push(`/channel/${channel.cid}`)} />;
    
}