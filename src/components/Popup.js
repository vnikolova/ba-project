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
        width: this.props.narrow ? '40%' : '45%',
        height: 'auto',
        position: 'fixed',
        top: '35%',
        left: '60%',
        marginTop: '-200px',
        marginLeft:  this.props.narrow ? '-30%' : '-35%',
        backgroundColor: '#fff',
        borderRadius: '2px',
        zIndex: '100',
        padding: '0 15px',
        boxShadow: '0px 0px 4px rgba(0,0,0,.14),0px 4px 8px rgba(0,0,0,.28)',
      },
      header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      title: {
        width: '100%',
        marginLeft: '50%'
      },
      closeButtonStyle: {
        cursor: 'pointer',
        fontSize: '1.8em',
      },
    };

    return (
      <div style={style.wrapper}>
        <div
          onClick={() => this.props.onClose()}
          style={style.overlayStyles}
        />
          <div  style={style.dialogStyles}>
            <div style={style.header}>
              <h2 style={style.titleStyle}>{this.props.title}</h2>
              <a role="button"
                onClick={() => this.props.onClose()}
                style={style.closeButtonStyle}
              >
              &times;
             </a>
            </div>
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
