import Afterlogin from './Afterlogin'
import Login from './Login'

function App() {
    let login = true;
    return (
      login ? <Login/> : <Afterlogin/>
    )

};
export default App;
