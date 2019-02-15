export default function validate(values) {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = 'Fullname Required';
  }

  if (!values.username) {
    errors.username = 'Username Required';
  }

  this.props.trainers.map(trainer => {
    if (values.username && trainer.username === values.username) {
      errors.username = 'Username already exists as a trainer.';
    }
  });

  this.props.clients.map(client => {
    if (values.username && client.username === values.username) {
      errors.username = 'Username already exists as a client.';
    }
  });

  if (!this.state.isClient && !values.skills) {
    errors.skills = 'Skills Required';
  }
  return errors;
}
