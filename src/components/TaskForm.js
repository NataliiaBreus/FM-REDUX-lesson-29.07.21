import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import {createTask} from '../actions/taskCreator';

function TaskForm (props) {
  const { createTaskAction } = props;
  const onSubmit = (values, actions) => {
    createTaskAction(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        body: '',
        isDone: false,
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='body' />
        <button type='submit'>Create Task</button>
        <button type='reset'>Reset Task</button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createTaskAction: values => dispatch(createTask(values)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
