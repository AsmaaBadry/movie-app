const initialState={
    favmovies:[],
    setmove:[],
}

export default function favoratemovies(state=initialState,action){
    switch (action.type) {

        case 'ADD_FAVMOVIES':
            
            return{...state,favmovies:[...state.favmovies,action.payload]}

        case 'REMOVE_FAVMOVIES': 
        console.log(action.payload); 
            return{...state,favmovies:[...action.payload]}


            case 'SET_FAVOURITEMOV': 
       
            return{...state,setmove:[...action.payload]}
        default:
            return state
    }

}