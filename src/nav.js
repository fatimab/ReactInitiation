import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
import Create from "./create";
import Update from "./update";

function Nav() {
  return (
         <div>
            <Router>
                <div className="ui top fixed menu">
                    <div className="item">
                        My Todo List
                    </div>
                    <div>
                        <nav>
                            <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/create/">Create</Link>
                            </li>
                            <li>
                                <Link to="/update/">Update</Link>
                            </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="ui placeholder segment">
                <Route path="/" exact component={App} />
                <Route path="/create/" component={Create} />
                <Route path="/update/" component={Update} />
                </div>
            </Router>
        </div>
    )
}

export default Nav;