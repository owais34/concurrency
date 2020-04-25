import React from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';
import './App.css';
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import Converter from './components/Converter/Converter';

class App extends React.Component {
  first='INR';
  second='INR'
  constructor() {
    super();
    this.vantaRef = React.createRef();
    this.state={
      rate:1
    };
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      mouseControls: false,
      touchControls: false,
      minHeight: 647.00,
      minWidth: 200.00,
      scale: 1.0,
      scaleMobile: 1.00
    })

  }
  onChangeFirst=(event)=>
{
  this.first=event.target.value;
}
onChangeSecond=(event)=>{
  this.second=event.target.value;
}
onClick=()=>{
  var url='http://api.currencylayer.com/live';
  var key='?access_key=a943c2fd5bc1b8b4b75847f5b370c357';
  var contr='&currencies='+this.first+','+this.second+'&format=1';

  fetch(url+key+contr).then(response=>{
    return response.json();
    })
    .then(output=>{
      var num1=output['quotes']['USD'+this.second];
      var num2=output['quotes']['USD'+this.first];
      this.setState({rate:(num1/num2)});
    })
    .catch(error=>{
      console.log(error);
    });

}
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return (
      <div className="App">
      <div ref={this.vantaRef}>
        <Header/>
        <Description/>
        <Converter changefirst={this.onChangeFirst} changesecond={this.onChangeSecond}/>
        <button onClick={this.onClick}>Find</button>
        <h1 style={{color:'white'}}>{this.state.rate}</h1>
      </div>

  </div>
  );
  }
}

export default App;
