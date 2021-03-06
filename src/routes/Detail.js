import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { useHistory } from "react-router";

const Detail = ({ toDo, onClickDelete }) => {
  const history = useHistory();
  return (
    <>
      {console.log(toDo)}
      <h1>{toDo?.text}</h1>
      <h5>Created at:{toDo?.id}</h5>
      <button
        onClick={() => {
          onClickDelete();
          history.push("/");
        }}
      >
        DEL
      </button>
    </>
  );
};

function mapStateToProps(state, ownProps) {
    const { id } = ownProps.match.params;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}
// function mapStateToProps(state, ownProps) {
//   // state = JSON.parse(localStorage.getItem("toDos"));
//   const { id } = ownProps.match.params;
//   return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
// }

function mapDispatchToProps(dispatch, ownProps) {
  const { id } = ownProps.match.params;
  return {
    onClickDelete: () => {
      dispatch(remove(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
