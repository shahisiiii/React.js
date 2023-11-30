import './App.css'
import Header from './components/Header'

function App() {
  const data='Jabeel shahis'
  return (
    <div>
      <Header data={data}/>
      <p>{data}</p>

    </div>
    
  );
}

export default App;
