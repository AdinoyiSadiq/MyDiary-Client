import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  componentWillMount() {
    this.parseUrl(this.props);
  }

  parseUrl(props) {
    const { match: { path } } = props;
    const route = path.split("main/")[1];
    this.setState({ route });
  }

  highlightIcon(view) {
    const { route } = this.state;
    const current = (route === view ? 'current' : null);
    return current;
  }

  render() {
    return (
      <div>
        <header className="clearfix">
          <nav className="mainNav" role="navigation">
            <ul>
              <li className="logo">
                <h3><Link className="logoLink" to="/main/entries">MyDiary</Link></h3>
              </li>
              <li>
                <Link to="/main/entries" className={`${this.highlightIcon('entries')}`}>Entries</Link>
              </li>
              <li>
                <Link id="profile" className={`navProfile ${this.highlightIcon('profile')}`} to="/main/profile">Adinoyi</Link>
              </li>
              <li>
                <Link to="/main/notifications" className={`${this.highlightIcon('notifications')}`}>
                  <i className="far fa-bell" />
                </Link>
              </li>
              <li>
                <Link to="/main/addEntry" className={`${this.highlightIcon('addEntry')}`}>
                  <i className="fas fa-plus" />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
};

export default Header;