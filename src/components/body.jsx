import React ,{Component} from "react";
import Counter from './counter';


class Body extends Component {
  render(){
    return(
      <div className="row m-4"><Counter/></div>
    )
  }
}
export default Body;
