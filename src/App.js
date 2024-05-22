import "./App.css";
import Router from '../src/containers/Router/router.jsx'
import ScrollToTopButton from '../src/components/UpButton/index.jsx'
function App() {
  return (
    <div className="App">
      <Router />
      <ScrollToTopButton/>
      
    </div>
  )
}

export default App;
