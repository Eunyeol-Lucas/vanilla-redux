import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
import { useHistory } from "react-router";

const Detail = ({ toDo, onClickDelete }) => {
  const history = useHistory();
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at:{toDo?.id}</h5>
          <button onClick={() => { onClickDelete(); history.push("/") }}>DEL</button>
      <Link onClick={onClickDelete} to={"/"}>
        DEL
      </Link>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  state = JSON.parse(localStorage.getItem("toDos"));
  const { id } = ownProps.match.params;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { id } = ownProps.match.params;
  return {
    onClickDelete: () => {
      dispatch(actionCreators.deleteToDo(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
