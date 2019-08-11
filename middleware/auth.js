export default function ({ store, route, redirect, req }) {
    if(!store.state.login){
        return redirect('/login')
    }
}