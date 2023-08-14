import logo from './logo.svg';
import './App.css';
import DemoBootstrap from './components/DemoBootstrap';
import DemoAntd from './components/DemoAntd';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
     {/* <DemoBootstrap />
     <DemoAntd/> */}
     <RegisterForm />
    </div>
  );
}

export default App;
