import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderModal from '../components/HeaderModal';
import { getUserProfile } from '../actions/profileActions';

export class Header extends Component {
  state = { showModal: false }

  componentWillMount() {
    const { getUserProfile } = this.props;
    getUserProfile();
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

  showHeaderModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

  render() {
    const { showModal } = this.state;
    const { profile } = this.props;
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
                <div 
                  id="profile" 
                  className={`navProfile ${this.highlightIcon('profile')}`}
                  onClick={this.showHeaderModal}
                >
                  {profile ? profile.firstname : 'Profile'}
                </div>
              </li>
              <li>
                <Link to="/main/addEntry" className={`${this.highlightIcon('addEntry')}`}>
                  <i className="fas fa-plus" />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <HeaderModal showModal={showModal} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { profile: state.userProfile.profile };
}

export default connect(mapStateToProps, { getUserProfile })(Header);