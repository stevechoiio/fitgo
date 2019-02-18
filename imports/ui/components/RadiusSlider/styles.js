const styles = theme => ({
  rootSlider: {
    flewGrow: 1,
    background: 'white',
    padding: theme.spacing.unit * 2
  },
  slider: {
    padding: '22px 0px'
  },
  btnDist: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing.unit,
    boxShadow:
      '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'
  }
});

export default styles;
