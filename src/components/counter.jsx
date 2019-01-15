import React ,{Component} from "react";

class Counter extends Component {
  state={
  Counter:0
};
renderCounterValue=()=>{
if(this.state.Counter ===0) return "Zero";
return this.state.Counter;


}
handleIncreament = (value)=>{
if(value ==="Increament"){
  this.state.Counter++;
  this.setState(this.state);
}
if(value ==="Decreament"){
  this.state.Counter--;
  this.setState(this.state);
}
if(value ==="Reset"){
  this.state.Counter = 0;
  this.setState(this.state);
}



}
  render(){
    return(
            <div className="d-flex justify-content-center flex-column ">
            <div className="m-3 d-flex justify-content-center alert alert-secondary ">{this.renderCounterValue()}</div>
            <button type="button" className="btn btn-outline-primary d-block m-1"
            onClick={()=>this.handleIncreament("Increament")}>Increament</button>
            <button type="button" className="btn btn-outline-danger d-block m-1"
            onClick={()=>this.handleIncreament("Decreament")}>Decreament</button>
            <button type="button" className="btn btn-outline-success d-block m-1"
            onClick={()=>this.handleIncreament("Reset")}>Reset</button>
            </div>
    )
  }
}

export default Counter;
