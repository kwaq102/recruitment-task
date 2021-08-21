import Menu from './components/Menu';
import BigBen from './BigBen';
import PhotoSection from './components/PhotoSection';
import BoxesSection from './components/BoxesSection';
import FourthSection from './components/FourthSection';
import Users from './components/Users';

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      
      <Menu/>
      <BigBen/>
      <PhotoSection />
      <BoxesSection />
      <FourthSection/>
      <Users />
   
    </div>
  );
}

export default App;
