import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

// imported pages
import Placeholder from './pages/Placeholder';

// Shopify graphql api endpoint using .env variables
const client = new ApolloClient({
    uri: process.env.REACT_APP_URL,
    headers: {
      "X-Shopify-Storefront-Access-Token" : process.env.REACT_APP_TOKEN
    },
  cache: new InMemoryCache()
});

function App() {

  return (
    <ApolloProvider client={client}>

      <header className='main-header'>
        <h1 className='page-label'>Add Product</h1>
        <div className='back-arrow'></div>
      </header>

      <main>
        <Placeholder />
      </main>
      
    </ApolloProvider>
  );

}

export default App;





