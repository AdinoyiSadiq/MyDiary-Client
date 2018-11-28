import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEntriesList } from '../actions/entriesListActions';
import EmptyListModal from '../components/EmptyListModal';
import DeleteEntryModal from '../components/shared/DeleteEntryModal';

class EntriesList extends Component {
  state = { showDeleteModal: false }

  componentWillMount() {
    const { getEntriesList } = this.props;
    getEntriesList();
  }

  displayDeleteModal = () => {
    this.setState({ showDeleteModal: true })
  }

  hideDeleteModal = () => {
    this.setState({ showDeleteModal: false })
  }

  deleteEntry = () => {
    console.log('Delete this entry');
  }

  renderEntriesList(entriesList) {
    const entries = entriesList.map((entry) => {
      const date = new Date(parseInt(entry.created));
      return (
        <article key={entry.id} className="entry">
          <div className="content">
            <Link to={`/main/entry/${entry.id}`}>
              <h3 className="title">{entry.title}</h3>
              <p className="date">{date.toString().substring(0, 15)}</p>
              <p className="entryContent">{(entry.content).substring(0, 100)}</p>
            </Link>
            <div className="actions">
              <div title="Edit">
                <Link to={`/main/updateEntry/${entry.id}`}>
                  <i className="far fa-edit" />
                </Link>
              </div>
              <div title="Delete" onClick={this.displayDeleteModal}><i className="far fa-trash-alt" id="delete"></i></div>
            </div>
          </div>
        </article>
      );
    });
    return (
      <section className="entryList" id="list">
        {entries}
      </section>
    );
  }

  render() {
    const { entries } = this.props;
    const { showDeleteModal } = this.state;
    console.log(this.state.showDeleteModal);
    if (entries) {
      return (
        <main className="clearfix">
          <DeleteEntryModal 
            display={showDeleteModal} 
            hideDeleteModal={this.hideDeleteModal}
            deleteEntry={this.deleteEntry}
          />
          {(entries.length > 1) ? this.renderEntriesList(entries) : <EmptyListModal />}
        </main>
      );
    }
    return <div>Loading...</div>
  }
};

function mapStateToProps(state) {
  return { entries: state.entriesList.entries };
}

export default connect(mapStateToProps, { getEntriesList })(EntriesList);