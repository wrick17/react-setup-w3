import React, { Component } from 'react';

export default class ReactApp extends Component {
  constructor(props) {
    super(props);

    const placeholder = this.props.value || {
      a: 1,
      str: 'good',
      arr: [{
        1: 'one',
        2: 'two',
        3: 'three'
      }]
    };

    this.state = {
      value: JSON.stringify(placeholder, null, 2),
      txtClass: styles.textArea
    };
  }

  _validate() {
    try {
      let orig = JSON.parse(this.state.value);
      let v = JSON.stringify(orig, null, 2);
      this.setState({
        value: v,
        error: null,
        txtClass: styles.textArea
      });
    }
    catch (e) {
      this.setState({
        error: `Invalid JSON: ${e.name} - ${e.message}`,
        txtClass: styles.textAreaError
      });
    }
  }

  _saveText(e) {
    this.setState({value: e.target.value});
  }

  _putTab(e) {
    if(e.keyCode==9 || e.which==9){
        e.preventDefault();
        var s = e.target.selectionStart;
        e.target.value = e.target.value.substring(0,e.target.selectionStart) + "\t" + e.target.value.substring(e.target.selectionEnd);
        e.target.selectionEnd = s+1;
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <textarea
          value={this.state.value}
          style={this.state.txtClass}
          onKeyDown={this._putTab}
          onChange={this._saveText.bind(this)}>
        </textarea>
        <p style={styles.error}>{this.state.error}</p>
        <button style={styles.button} onClick={this._validate.bind(this)}>VALIDATE</button>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  header: {
    flex: '0 1 auto'
  },
  error: {
    color: 'red',
  },
  textArea: {
    flex: '1 1 auto',
    height: '400px',
    width: '100%',
    fontFamily: 'monospace',
    tabSize: '20px'
  },
  textAreaError: {
    flex: '1 1 auto',
    height: '500px',
    width: '100%',
    fontFamily: 'monospace',
    border: '1px solid red'
  },
  button: {
    cursor: 'pointer',
    flex: '0 1 auto',
    marginTop: 20,
    padding: 10,
    fontSize: 14
  }
};
