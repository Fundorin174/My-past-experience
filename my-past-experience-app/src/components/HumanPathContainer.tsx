import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../redux/redux-store";
import SecondPage from "./SecondPage";
import  {setCurrentList, ListType } from './../redux/wayOfHumanPageReducer';

type MapStateToPropsType = {};

type MapDisparchToPropsType = {
  setCurrentList: (list: ListType) => void;
};

type OwnPropsType = {};

export type HumanPathConteinerPropsType = MapStateToPropsType &
  MapDisparchToPropsType &
  OwnPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  pathName: state.wayOfHuman.pathName,
  navBarList: state.wayOfHuman.navBarList,
  currentList: state.wayOfHuman.currentList
});

export default compose(
  connect<
    MapStateToPropsType,
    MapDisparchToPropsType,
    OwnPropsType,
    AppStateType
  >(mapStateToProps, {setCurrentList})
)(SecondPage);