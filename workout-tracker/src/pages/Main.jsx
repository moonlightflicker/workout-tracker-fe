import './Main.scss';
import NavBar from '../layout/NavBar/NavBar';

function Main() {
  return (
    <div className="main-page">
      <NavBar />
      <div className="app-content">
        <p>This is how it begins</p>
      </div>
    </div>
  );
}

export default Main;
