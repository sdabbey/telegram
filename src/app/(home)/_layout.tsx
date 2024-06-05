import { Slot, Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from 'stream-chat';
import { Chat, OverlayProvider } from 'stream-chat-expo';

const client = StreamChat.getInstance('u7e3skfujt8t')

export default function HomeLayout(){
    useEffect(() => {
        const connect = async() => {
            await client.connectUser(
                {
                    id: 'sdabbey',
                    name: 'Yhung Hydrus',

                },
                client.devToken('sdabbey')
            );

            // const channel = client.channel('messaging', 'the_park', {
            //     name: 'The Park',
            // });
            // await channel.watch();
            // await client.disconnectUser();
        };
        connect();
    });

    return (
        <OverlayProvider>
            <Chat client={client}>
                <Slot />
            </Chat>
            
        </OverlayProvider>
    );
}