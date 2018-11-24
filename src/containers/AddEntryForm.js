import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEntry } from '../actions/entryActions';
import validateAuth from '../lib/validation';

const initialState = {
  title: '',
  content: '',
  touched: {
    title: false,
    content: false,
  },
};

const fieldNames = ['title', 'content'];

class AddEntryForm extends Component {
  state = initialState;

  handleSubmit = async (event) => {
    event.preventDefault();
    const { createEntry, history } = this.props;
    const { title, content } = this.state;

    const validationError = validateAuth({ title, content }, fieldNames);
    const changedTouchState = this.changeTouchState(fieldNames, true);
    this.setState({ touched: changedTouchState });

    if (!validationError.status) {
      createEntry({ title, content }, (entryId) => history.push(`/main/entry/${entryId}`));
      this.setState(initialState);
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }
  
  handleBlur = (field) => () => {
    const { touched } = this.state;
    this.setState({
      touched: { ...touched, [field]: true },
    });
  }

  changeTouchState = (fields, state) => {
    const touchState = {};
    fields.forEach((field) => {
      touchState[field] = state;
    });
    return touchState;
  }

  cancelEntry = () => {
    const { history } = this.props;
    this.setState({initialState});
    history.push('/main/entries')
  }

  render() {
    const { title, content, touched } = this.state;
    const { errorMessage } = this.props;
    const error = validateAuth({ title, content }, fieldNames);
    
    return (
      <main>
        <section>
          <form onSubmit={this.handleSubmit}>
          
            <div className="heading">Add an Entry</div>
            <div className="entryError">{errorMessage}</div>
            <input 
              type="text" 
              placeholder="Title" 
              id="title" 
              value={title} 
              onChange={this.handleChange}
              onBlur={this.handleBlur('title')}
            />
            <div className="entryError">{touched.title ? error.title : ''}</div>
            <textarea 
              rows="20" 
              cols="50" 
              placeholder="Content" 
              id="content" 
              value={content} 
              onChange={this.handleChange}
              onBlur={this.handleBlur('content')}
            />
            <div className="entryError">{touched.content ? error.content : ''}</div>
            <button type="submit">Save</button>
            <button type="button" onClick={this.cancelEntry}>Cancel</button>
          </form>
        </section>
      </main>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.entry.errorMessage };
}

export default connect(mapStateToProps, { createEntry })(AddEntryForm);