import '../css/component.css';
import { Link } from "react-router-dom";

function Navbar({type}) {

  return (
    <div className="nav-wrap">
        <nav className="navbar">
          {
            type === 1 ? (
              <div>
                <div className="web-title">
                  <i>AnimeFlix</i>
                </div> 
                <div className="mid-nav">
                  <div className="selected-a">
                    <Link to={`/`}>Home</Link>
                  </div>
                  <div>
                  <Link to={`/Favorite`}>Favorite</Link>
                  </div>
                </div>
              </div>
            ) : (
              type === 2 ? (
                <div>
                  <div className="web-title">
                    <i>AnimeFlix</i>
                  </div> 
                  <div className="mid-nav">
                    <div>
                      <Link to={`/`}>Home</Link>
                    </div>
                    <div className="selected-a">
                      <Link to={`/Favorite`}>Favorite</Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mid-nav">
                  <div>
                    <Link to={`/`}>Home</Link>
                  </div>
                  <div>
                    <Link to={`/Favorite`}>Favorite</Link>
                  </div>
                </div>
              )
            )
          }
        </nav>
    </div>
  );
}

export default Navbar;
