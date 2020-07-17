import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../redux/redux-store";
import SecondPage from "./SecondPage";

type MapStateToPropsType = {};

type MapDisparchToPropsType = {};

type OwnPropsType = {};

export type WarriorPathConteinerPropsType = MapStateToPropsType &
  MapDisparchToPropsType &
  OwnPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  pathName: state.wayOfWarrior.pathName,
});

export default compose(
  connect<
    MapStateToPropsType,
    MapDisparchToPropsType,
    OwnPropsType,
    AppStateType
  >(mapStateToProps, {})
)(SecondPage);