import React from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

const todoForm = props => (
  <div role="form" className="todoForm">
    <div className="row">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma Tarefa"
        ></input>
      </Grid>
      <Grid cols="12 3 2">
        <IconButton estilo="primary" icon="plus" />
      </Grid>
    </div>
  </div>
);

export default todoForm;
