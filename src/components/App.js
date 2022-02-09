import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shoppingCart: []
    }
  }

  handleCartAddition = (obj) => {
    const placeholder = this.state.shoppingCart.concat(obj);
    this.setState({shoppingCart: placeholder});
  };

  
  render(){
    return (
      <React.Fragment>
        <Header />
        <Main 
          method = {handleCartAddition}
        />
      </React.Fragment>
    );
  }
}

export default App;

