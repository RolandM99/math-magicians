import PropTypes from 'prop-types';
import { Component } from 'react';

class InputButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, click } = this.props;
    return (
      <button type="button" className="c-btn" onClick={click}>
        {value}
      </button>
    );
  }
}

InputButton.propTypes = {
  value: PropTypes.string,
  click: PropTypes.func.isRequired,
};

InputButton.defaultProps = {
  value: '',
};

export default InputButton;
