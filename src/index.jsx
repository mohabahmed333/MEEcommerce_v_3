import {Provider  } from 'react-redux';
 import ReactDOM from 'react-dom/client';
 import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
  import{WishListProvider}from './contexts/wishList';
import { store,persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './stripe/stripe';
import{CheckOutProvider} from './contexts/checkout.context'
import { PreviewContextProvider } from './contexts/previewContext';
import { SearchContextProvider } from './contexts/searchContext';
 const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(

    
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
              <WishListProvider>
                <Elements   stripe={stripePromise }>
                <CheckOutProvider>
                  <PreviewContextProvider>
                    <SearchContextProvider>

                      <App />
                    </SearchContextProvider>
                  </PreviewContextProvider>
                </CheckOutProvider>
                </Elements>
            </WishListProvider>
    </PersistGate>
     </Provider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
