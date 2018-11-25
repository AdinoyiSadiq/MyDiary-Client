import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEntriesList } from '../actions/entriesListActions';
import EmptyListModal from '../components/EmptyListModal';

class EntriesList extends Component {
  componentWillMount() {
    const { getEntriesList } = this.props;
    getEntriesList();
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
              <div title="Edit"><i className="far fa-edit"></i></div>
              <div title="Delete"><i className="far fa-trash-alt" id="delete"></i></div>
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
    if (entries) {
      return (
        <main className="clearfix">
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