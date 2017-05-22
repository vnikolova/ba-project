import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Popup extends Component {
  render() {

    const style = {
      wrapper: {
        display: this.props.open === true ? 'block' : 'none'
      },
      overlayStyles: {
        position: 'fixed',
        top: '0px',
        left: '0px',
        bottom: '0px',
        right: '0px',
        width: '100%',
        height: '100%',
        zIndex: '99',
        backgroundColor: 'rgba(0,0,0,0.3)',
      },
      dialogStyles: {
        width: '50%',
        height: '400px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '-200px',
        marginLeft: '-25%',
        backgroundColor: '#fff',
        borderRadius: '2px',
        zIndex: '100',
        padding: '15px',
        boxShadow: '0px 0px 4px rgba(0,0,0,.14),0px 4px 8px rgba(0,0,0,.28)',
      },
      title: {
        marginTop: '0px',
      },
      closeButtonStyle: {
        cursor: 'pointer',
        position: 'absolute',
        fontSize: '1.8em',
        right: '10px',
        top: '0px',
      },
    };

    return (
      <div style={style.wrapper}>
        <div
          onClick={() => this.props.onClose()}
          style={style.overlayStyles}
        />
          <div  style={style.dialogStyles}>
            <a role="button"
              onClick={() => this.props.onClose()}
              style={style.closeButtonStyle}
            >
              &times;
             </a>
            <h2 style={style.titleStyle}>{this.props.title}</h2>
            {this.props.children}
          </div>
      </div>
      );
  }
};

Popup.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
};

export default Popup;
