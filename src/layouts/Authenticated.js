import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Sidebar from "components/Sidebar/Sidebar.js";
import Header from "components/Headers/HeaderAuthenticated.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import Home from "views/home/index.js";
import ChangePassword from "views/home/ChangePassword.js";

import UserList from "views/users/index.js";
import UserAdd from "views/users/Add.js";
import UserHandler from "views/users/Handler.js";

import CommunicationCompose from "views/comunication/Compose.js";
import CommunicationDeleted from "views/comunication/Deleted.js";
import CommunicationInbox from "views/comunication/index";
import CommunicationMessage from "views/comunication/Message.js";
import CommunicationReply from "views/comunication/Reply.js";
import CommunicationSearch from "views/comunication/Search.js";

import AttendanceJustify from "views/attendance/Justify.js";

import PrivilegesAdd from "views/privileges/Add.js";
import PrivilegesHandler from "views/privileges/Handler.js";

import ReportList from "views/reports/index.js";
import Report from "views/reports/Report.js";

import getPageName from "components/PageName/PageName"
class Authenticated extends React.Component {

  constructor(){
    super();
    this.state = { pageName: '' };
  }

  componentDidMount(){
    this.setState({pageName: getPageName()})
  }

  componentDidUpdate(prevProps, prevState){
    const newName = getPageName()
    if(newName !== prevState.pageName) this.setState({pageName: getPageName()})
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="relative md:ml-64 bg-gray-200">
          <Header name={ this.state.pageName } />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>

              <Route path="/home/" exact component={Home} />
              <Route path="/home/ChangePassword" exact component={ChangePassword} />
              
              <Route path="/users/List" exact component={UserList} />
              <Route path="/users/Add" exact component={UserAdd} />
              <Route path="/users/Handler" exact component={UserHandler} />

              <Route path="/comunication/Compose" exact component={CommunicationCompose} />
              <Route path="/comunication/Deleted" exact component={CommunicationDeleted} />
              <Route path="/comunication/Inbox" exact component={CommunicationInbox} />
              <Route path="/comunication/Message" exact component={CommunicationMessage} />
              <Route path="/comunication/Reply" exact component={CommunicationReply} />
              <Route path="/comunication/Search" exact component={CommunicationSearch} />

              <Route path="/attendance/Justify" exact component={AttendanceJustify} />

              <Route path="/privileges/Add" exact component={PrivilegesAdd} />
              <Route path="/privileges/Handler" exact component={PrivilegesHandler} />

              <Route path="/reports/List" exact component={ReportList} />
              <Route path="/reports/Report" exact component={Report} />
              
            </Switch>
            <FooterAdmin />
          </div>
        </div>
      </>
  )}
}

export default Authenticated