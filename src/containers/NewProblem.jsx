import React, {Component} from "react";
import {connect} from "react-redux";
import ProblemBuilder from "../components/ProblemBuilder";
import co from "co";
import * as ProblemActions from "../redux/modules/problem";
import Fetch from "../utils/fetch";
import * as SessionActions from "../redux/modules/session";

class NewProblem extends Component {
  onCreate = (args) => {
    const {dispatch} = this.props;
    co(function*() {
      dispatch(SessionActions.NetWork());
      const res = yield Fetch("POST")('/problems')(args);
      dispatch(SessionActions.NetWorkFinish());
      if (res.status === 200) {
        dispatch(ProblemActions.Create(args));
      } else {

      }
    })
  };
  onCancel = () => {
    this.props.router.push('/dashboard');
  };

  render() {
    return (
      <div>
        <ProblemBuilder
          onCreate={this.onCreate}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}

function select(state) {
  return {}
}

export default connect(select)(NewProblem);