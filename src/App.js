import React, {Component} from 'react';

class ComponenttoUnmount extends Component {

  state = {windowWidth: 0}

  _updateStateWithWindowWidth = () => {
    this.setState({ windowWidth: document.body.clientWidth})
  }

  componentDidMount () {
    this._updateStateWithWindowWidth()
    window.addEventListener(
      'resize',
      this._updateStateWithWindowWidth
    )
  }

  componentWillUnmount () {
    window.removeEventListener(
      'resize',
      this._updateStateWithWindowWidth
    )
  }


  render() {
    return (
      <div>
        <p>Width of window: {this.state.windowWidth}</p>
      </div>
    )
  }
}


class ExampleComponentWillUnmount extends Component {
  state = {showComponent: true }
    
  
    render () {

      if (this.state.showComponent) {
      return (
        <div>
          <h4> Cicle of unmount: Component Will UnMount</h4>
          <ComponenttoUnmount />
          <button onClick={() => this.setState({ showComponent: false})}>
            Dismount Component
          </button>
        </div>
      )
    }

    return (
      <p>Component unmount</p>
    )
  }
}
  



export default ExampleComponentWillUnmount;
