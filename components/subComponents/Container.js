import React from "react";
import { style_Container } from "./styles";

const { _container_outer, _container_outer_short, _container_inner } = style_Container;

export default ({ contents, short=false }) => (
  <div style={short ? _container_outer_short :_container_outer}>
    <div style={_container_inner}>{contents}</div>
  </div>
);
