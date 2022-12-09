import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import "./components/css/App.css"
import { ConversationApp } from "./components/conversationApp";
import { environment } from "./util/env";

export default function App() {

  const client = new ApolloClient({
    uri: environment.APOLLO, 
    cache: new InMemoryCache(),
});

  return (
    <ApolloProvider client={client}>
      <ConversationApp />
    </ApolloProvider>
  );
}
