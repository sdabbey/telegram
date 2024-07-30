### Telegram - Clone.
This project is working clone of telegram chat feature using stream api.

DOCUMENTATION(Telegram)
   Basic commands:
   	Run "npx expo start -c" - Starts the expo server and clean the bundler cache
	Run "npm start" or "npx expo start" - To start the development server(expo)
Initial Project Setup Dependencies:
   Using expo router:(So install the following)
	"npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar"
	
Stream Setup:
   1. Sign up(Start Coding Free) at "https://getstream.io/"
   2. Create New App
   	* App Name: Telegram
   	* leave all other settings in the pop up as it is
   3. Add Stream's Chat SDK:
    	Run "npx expo install stream-chat-expo"
    	For Chat Messaging:(Install these Dependencies):
	  npx expo install .....
	    * expo-media-library
	    * @react-native-community/netinfo
	    * @stream-io/flat-list-mvcp
	    * expo-file-system
	    * react-native-gesture-handler
	    * expo-image-picker
	    * expo-image-manipulator
	    * react-native-reanimated
	    * react-native-svg
	    * stream-chat
	    * expo-av
	    * expo-sharing
	    * expo-haptics
	    * expo-clipboard
	    * expo-document-picker
    
    #Ignore all the above dependencies(They are available in the package.json) - Run "npm install" to install all dependencies in the package.json
    
  4. Create .env file and fill with the following credentials:
        EXPO_PUBLIC_STREAM_API_KEY="***********" - Replace * with your Stream API key
        
  5. Supabase Setup
       * Sign up and create new Project.
       	  - Organisation: Ownorganisationname
          - Name: Telegram
          - Database Password: setyourownpassword(strong)
       	 
       * In SQL Editor,under Quickstarts, Choose "User Management Starter" and click "Run selected" 
       
       * In project terminal, install the following dependencies:
           Run "npx expo install @supabase/supabase-js @react-native-async-storage/async-storage react-native-elements react-native-url-polyfill"
           
       * Update .env file with:
           EXPO_PUBLIC_SUPABASE_URL=********** (Supabase url from the supabase settings/api)
           EXPO_PUBLIC_SUPABASE_ANON_KEY=youranonkey(from the supabase settings/api)
           
       * For development environment sake, under Authentication then Providers, disable "Confirm email" under Email Dropdown(The enabled provider). Click save.
          
       * Under Storage tab in the sidebar, click on the arrow down on the "avatars" bucket and choose "edit bucket"
       	   - turn on the "Public bucket" and click on save - This will help the visibility of the profile picture
       
       
       #Edge Functions setup:
           - Initial supabase in local project by running "npx supabase init"
           
           - Link local supabase with project-ref by running "npx supabase link --project-ref 'enterprojectref'" - without the quotes(In project settings copy 
           and past the Reference ID  as the projectref)
           	* Enter database password you set when creating the supabase project.
           
           - Run "npx supabase db pull" to pull the remote database. 
           
       	   - Run "npx supabase start"
    	   
    	   - Run "npx supabase functions new stream-token" to create new function
    	   
    	   - Run "npx supabase functions serve"
    	   
    	   - Create ".env.local" file inside the supabase directory and fill with the following:
    	   	STREAM_API_KEY=enterstreamapikey(Fill with your stream api key)
    	   	STREAM_API_SECRET=enterstreamapisecretkey(Fill with stream secret key)
    	   	
    	   - Run "npx supabase functions serve --env-file supabase/.env.local" to serve your env keys to supabase
    	   
    	   - Run "cp ./supabase/.env.local ./supabase/.env" to create .env for production.
    	   
    	   - Run "npx supabase secrets set --env-file ./supabase/.env"
    	   
    	   - Run "npx supabase functions deploy"
   
   6. You can now run "npx expo start" to test project
    	   
    	   
    	   
    	   
    	   
    	   
    	   
    	   
    	   
    	   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
