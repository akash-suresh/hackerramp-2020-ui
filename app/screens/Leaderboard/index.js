import React, {Component, PropTypes} from 'react';
import {getLeaderboardData} from '../../utils/critico-api'

export default class Leaderboard extends Component {
  constructor() {
    super()
    this.state = {leaderboardData: {}}
  }

  getLeaderboardData() {
    this.props.getLeaderboardData(20).then(leaderboardData => {
        console.log(leaderboardData);
        this.setState({leaderboardData});
    });
  }

  componentDidMount() {
    this.getLeaderboardData();
  }

  handleFilterUpdate = () => {
    //sfsf
  }

  render() {
    // const {username} = this.props.params
    const {leaderboardData} = this.state
    debugger
    if(Object.keys(leaderboardData).length === 0) {
        var userlist = []
    } else {
        var userlist = leaderboardData.map((user, i) => <User emailId={ user.emailId } rank={ i + 1 } timeTaken={ user.timeTaken } />);
    }
    return (
    //   <div className="container">
    //     <section className="user border-bottom">
    //       <div className="row">
    //         <div className="col-sm-9">
    //           <h3 className="The-Reviewer">Leaderboard</h3>
    //         </div>
    //       </div>
          <div className="container">
            <LeaderboardHeader />
            <ColumnHeader onClickAll={this._clickAllTime} onClick={this._clickRecent}/>
            { userlist }
          </div>
    //     </section>
    //   </div>
    );
  }
}

Leaderboard.propTypes = {
  params: PropTypes.object,
  getLeaderboardData: PropTypes.func,
}

Leaderboard.defaultProps = {getLeaderboardData}


const LeaderboardHeader = () => {
    return (
        <div className="leadheader">
            <h2>Leaderboard</h2>
        </div>
        )
}
      
const ColumnHeader = ({
    onClick,
    onClickAll
    }) => (
        <div className="row colheader">
            <div className="col-xs-3">
                <h4>Rank</h4>
            </div>
            <div className="col-xs-5">
                <h4>User </h4>
            </div>
            <div className="col-xs-3 timeTaken">
                <h4>Time taken</h4>
            </div>
        </div>
);
      
ColumnHeader.propTypes = {
    onClick: React.PropTypes.func,
    onClickAll: React.PropTypes.func
}
      
const User = ({ rank, emailId, timeTaken }) => {
    return (
        <div className="row users  vcenter">
            <div className="col-xs-3 rank">
                <h4>{ rank }</h4>
            </div>
            <div className="col-xs-5 emailId">
                <h4>{ emailId }</h4>
            </div>
            <div className="col-xs-3">
                <h4>{ timeTaken }</h4>
            </div>
        </div>
    )
}
    
User.propTypes = {
    rank: React.PropTypes.number.isRequired,
    emailId: React.PropTypes.string.isRequired,
    timeTaken: React.PropTypes.number.isRequired
}