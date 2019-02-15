export default function validate(values) {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = 'fullname Required';
  }

  if (!values.username) {
    errors.username = 'username required';
  }
  this.props.trainers.map(trainer => {
    if (values.username && trainer.username === values.username) {
      errors.username = 'username already exists as a trainer';
    }
  });
  this.props.clients.map(client => {
    if (values.username && client.username === values.username) {
      errors.username = 'username already exists as a client';
    }
  });

  if (!this.state.isClient && !values.skills) {
    errors.skills = 'skills required';
  }
  return errors;
}
