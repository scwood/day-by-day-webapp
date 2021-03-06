import React, { PropTypes } from 'react';

function EntryEditor({
  date,
  text,
  onDateChange,
  onTextChange,
  onSubmitClick,
  onDeleteClick,
}) {
  return (
    <form>
      <div className="form-group">
        <label>Date</label>
        <input
          value={date}
          placeholder="YYYY-MM-DD"
          className="form-control"
          onChange={onDateChange}
        />
      </div>
      <div className="form-group">
        <label>Text</label>
        <textarea
          value={text}
          placeholder="Walked the dog..."
          className="form-control"
          rows="4"
          onChange={onTextChange}
        />
      </div>
      <button
        className="btn btn-success float-xs-right"
        onClick={onSubmitClick}
      >
        Submit
      </button>
      <button
        className="btn btn-danger float-xs-right mr-1"
        onClick={onDeleteClick}
      >
        Delete
      </button>
    </form>
  );
}

EntryEditor.propTypes = {
  date: PropTypes.string,
  text: PropTypes.string,
  onDateChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default EntryEditor;
