import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react';
import { ActivityIndicator, Text } from 'react-native'
import { Channel as ChannelType } from 'stream-chat'
import { Channel, MessageInput, MessageList } from 'stream-chat-expo';

export default function ChannelScreen(){
    const [channel, setChannel] = useState<ChannelType | null>(null);
    const {cid} = useLocalSearchParams();

    if (!channel){
        return <ActivityIndicator/>;
    }
    return ( 
        <Channel channel={channel}>
          <MessageList />
          <MessageInput />
        </Channel>
      )
}