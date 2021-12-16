import PropTypes from 'prop-types';
import { Component } from 'react';

class InputButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, click, className } = this.props;
    return (
      <button type="button" className={className} onClick={click}>
        {value}
      </button>
    );
  }
}

InputButton.propTypes = {
  value: PropTypes.string,
  click: PropTypes.func.isRequired,
  className: PropTypes.string,
};

InputButton.defaultProps = {
  value: '',
  className: '',
};

export default InputButton;
