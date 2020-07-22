import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../redux/redux-store";
import SecondPage from "./SecondPage";

type MapStateToPropsType = {};

type MapDisparchToPropsType = {};

type OwnPropsType = {};

export type PersonalityPathConteinerPropsType = MapStateToPropsType &
  MapDisparchToPropsType &
  OwnPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  pathName: state.wayOfPersonality.pathName,
  navBarList: state.wayOfPersonality.navBarList
});

export default compose(
  connect<
    MapStateToPropsType,
    MapDisparchToPropsType,
    OwnPropsType,
    AppStateType
  >(mapStateToProps, {})
)(SecondPage);