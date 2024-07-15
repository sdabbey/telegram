import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Channel as ChannelType } from 'stream-chat';
import { Channel, MessageInput, MessageList, useChatContext } from 'stream-chat-expo';

export default function ChannelScreen() {
  const [channel, setChannel] = useState<ChannelType | null>(null);
  const [username, setUsername] = useState<string>('');
  const { cid } = useLocalSearchParams<{ cid: string }>();
  const { client } = useChatContext();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchChannel = async () => {
      const channels = await client.queryChannels({ cid });
      if (channels.length > 0) {
        const fetchedChannel = channels[0];
        setChannel(fetchedChannel);

        // Fetch members from the channel
        const members = Object.values(fetchedChannel.state.members);
        if (members.length > 1) {
          const otherMember = members.find(
            (member) => member.user.id !== client.user.id
          );
          if (otherMember) {
            const name = otherMember.user.name || otherMember.user.id;
            setUsername(name);
            navigation.setOptions({ title: name }); // Set the header title
          }
        } else {
          // Fallback to channel name if it's a group chat or user name is not available
          const name = fetchedChannel.data.name || 'Channel';
          setUsername(name);
          navigation.setOptions({ title: name }); // Set the header title
        }
      }
    };

    fetchChannel();
  }, [cid]);

  if (!channel) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Channel channel={channel} audioRecordingEnabled>
        <MessageList />
        <SafeAreaView edges={['bottom']}>
          <MessageInput />
        </SafeAreaView>
      </Channel>
    </View>
  );
}
