import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleEntry, deleteEntry } from '../actions/entryActions';
import DeleteEntryModal from '../components/shared/DeleteEntryModal';

class SingleEntry extends Component {
  state = { 
    showDeleteModal: false
  }

  componentWillMount() {
    const { getSingleEntry, match: { params: { id } } } = this.props;
    getSingleEntry(id);
  }

  displayDeleteModal = () => {
    this.setState({ showDeleteModal: true })
  }
  hideDeleteModal = () => {
    this.setState({ showDeleteModal: false })
  }

  deleteEntry = () => {
    const { entry: { id }, deleteEntry, history } = this.props;
    
    this.setState({ showDeleteModal: false });

    deleteEntry(id, (response) => {
      if (response) {
        history.push('/main/entries')
      }
    });
  }

  renderSingleEntry() {
    const { entry } = this.props;
    if (entry) {
      const date = new Date(parseInt(entry.created));
      return (
        <article className="entry">
          <h3 className="title">{entry.title}</h3>
          <p className="date">{date.toString().substring(0, 15)}</p>
          <p className="content">{entry.content}</p>
          <div className="actions">
            <div title="Edit">
              <Link to={`/main/updateEntry/${entry.id}`}>
                <i className="far fa-edit"></i>
              </Link>
            </div>
					  <div title="Delete" onClick={this.displayDeleteModal}><i className="far fa-trash-alt"></i></div>
          </div>
        </article>
      );
    }
    return <div>Loading...</div>
  }

  render() {
    const { showDeleteModal } = this.state;
    
    return (
      <main>
        <DeleteEntryModal
          display={showDeleteModal} 
          hideDeleteModal={this.hideDeleteModal}
          deleteEntry={this.deleteEntry}
        />
        {this.renderSingleEntry()}
      </main>
    );
  }
};

function mapStateToProps(state) {
  return { entry: state.singleEntry.entry };
}

export default connect(mapStateToProps, { getSingleEntry, deleteEntry })(SingleEntry);