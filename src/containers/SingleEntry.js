import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleEntry } from '../actions/entryActions';

class SingleEntry extends Component {
  componentWillMount() {
    const { getSingleEntry, match: { params: { id } } } = this.props;
    getSingleEntry(id);
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
					  <div title="Delete"><i className="far fa-trash-alt"></i></div>
          </div>
        </article>
      );
    }
    return <div>Loading...</div>
  }

  render() {
    return (
      <main>
        {this.renderSingleEntry()}
      </main>
    );
  }
};

function mapStateToProps(state) {
  return { entry: state.singleEntry.entry };
}

export default connect(mapStateToProps, { getSingleEntry })(SingleEntry);