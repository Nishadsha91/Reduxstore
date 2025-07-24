const redux = require('redux')
const createStore = redux.createStore

function buycake(){

    return{
        type:  "BUY_CAKE",
        info: 'first redux'
    }
}

const initialValue = {numOfCakes:10}

const reducer =(state=initialValue, action )=>{
    switch(action.type){
        case 'BUY_CAKE':
            return {
                ...state,
                numOfCakes : state.numOfCakes - 1
            }
        default:
            return state


    }

}


const store = createStore(reducer)
console.log("initial",store.getState())
const unsubscibe = store.subscribe( ()=> console.log('updated' , store.getState()) )


store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
unsubscibe()

