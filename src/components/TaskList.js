import React from 'react';
import { connect } from 'react-redux';
import * as TaskCreators from '../actions/taskCreator';

function TaskList (props) {
  const { tasks, deleteAction, updateAction } = props;

  return (
    <section>
      <h1>Task List</h1>
      <ul>
        {tasks.map(({ id, ...task }) => {
          return (
            <li key={id}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2>ID: {id}</h2>
                <p>{task.body}</p>
                <input
                  type='checkbox'
                  checked={task.isDone}
                  onChange={({ target: { checked } }) =>
                    updateAction({
                      id,
                      values: {
                        isDone: checked,
                      },
                    })
                  }
                />
              </div>
              <button onClick={() => deleteAction(id)}>Delete task</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const mapStateToProps = ({ tasks }) => ({ tasks });

const mapDispatchToProps = dispatch => ({
  deleteAction: id => dispatch(TaskCreators.deleteTask(id)),
  updateAction: ({ id, values }) =>
    dispatch(TaskCreators.updateTask(id, values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);