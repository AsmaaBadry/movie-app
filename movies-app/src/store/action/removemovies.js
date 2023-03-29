export default function removemovies(id){
    return{
        type:"REMOVE_FAVMOVIES",
        payload:id
    }
}