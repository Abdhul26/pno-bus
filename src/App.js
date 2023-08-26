import './App.css'
import NavBar from './Components/Top/NavBar'
// import PnoToCdm from './Components/Table/PnoToCdm'
// import PnoToCudd from './Components/Table/PnoToCudd'
import TabComponent from './Components/Top/TabComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'ka-table/style.css'

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <TabComponent />
      {/* `      <PnoToCdm />
      <PnoToCudd />` */}
    </div>
  )
}

export default App
