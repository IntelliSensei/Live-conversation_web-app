import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import "./components/css/App.css"
import { ConversationApp } from "./components/conversationApp";

export default function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/', // should come from dotenv
    cache: new InMemoryCache(),
});

  return (
    <ApolloProvider client={client}>
      <ConversationApp />
    </ApolloProvider>
  );
}
