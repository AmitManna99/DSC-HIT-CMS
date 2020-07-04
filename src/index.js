import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import { getFirebase, isLoaded } from 'react-redux-firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase })),
        //reactReduxFirebase(fbConfig, { attachAuthIsReady: true })
        //reduxFirestore(firebase, fbConfig) // redux binding for firebase
        //reduxFirestore(fbConfig) // redux bindings for firestore
    )
);

const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    //attachAuthIsReady: true 
};

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return (<div>
        <div className="progress blue accent-3">
        <div className="indeterminate blue"></div>
    </div></div>);
    return children
}



//store.firebaseAuthIsReady.then(() => {
ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded><App /></AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
