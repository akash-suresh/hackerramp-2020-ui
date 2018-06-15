import React, {Component, PropTypes} from 'react';
import RepoListItem from './RepoListItem';
import TwitterItem from './TwitterItem';
import {getTwitterOAUTH, getTwitterFeed} from '../../../utils/critico-api'

export default class TwitterWidget extends Component {
  // handleTwitterClick(props) {
  // 	debugger
  // 	  const {handleTwitterClick} = this.props;
  // 	  //window.open("http://twitter.com",'Data','height=250,width=250');
  //       var child = window.open('http://google.com','','toolbar=0,status=0,width=626,height=436');
		// var timer = setInterval(checkChild, 500);

		// function checkChild() {
		//     if (child.closed) {
		//         this.props.getProductData();   
		//         clearInterval(timer);
		//     }
		// }
	 //  debugger
  //     handleTwitterClick().then(responseData => {
  //     	  debugger
  //     	  window.open(responseData,'Data','height=250,width=250');
  //     });
  // }
  constructor() {
    super()
    this.state = {socialArray: []}
  }

  setSocialArray(socialArray) { 
  	debugger
  	this.setState({socialArray});
  }

  handleFilterUpdate = () => {
	const {getTwitterOAUTH} = this.props;
	const {getTwitterFeed} = this.props;
	const {username} = this.props;
	//const {getProductData} = this.props;
	getTwitterOAUTH().then(responseData => {
      	  var child = window.open(responseData,'Data','height=250,width=250');
      	  var timer = setInterval(checkChild, 500);
			function checkChild() {
		    	if (child.closed) {
		    		var timer2 = setInterval(getTwitterFeed,10000)
			        getTwitterFeed(username).then(responseData => {
			        	var socialArray = responseData
			        	debugger
			        	//getProductData();
			        })
			        clearInterval(timer2);
			        clearInterval(timer);
			    }
			}
      });

  }


  render() {
    const {list} = this.props;
    const {displayName} = this.props;
    const {rowName} = this.props;
    const {socialArray} = this.state;
    return (
   	  <div>

   	    <h3 className="widgetHeader">{displayName}</h3>
        <button className="twitterButton"> 
        	<img 
        		src="https://www.pbvusd.k12.ca.us/cms/lib/CA01902269/Centricity/Domain/62/twitter-login.gif" 
        		width="120px"
        		alt="twitter" 
        		onClick={this.handleFilterUpdate} />
        </button>
        <ul className="list-unstyled">
          {renderRepos(list, rowName)}
        </ul>
      </div>
    );
  }
}

TwitterWidget.propTypes = {
  rowName: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  getTwitterOAUTH: PropTypes.func,
  getTwitterFeed: PropTypes.func,
  username: PropTypes.string.isRequired,
}

TwitterWidget.defaultProps = {getTwitterOAUTH, getTwitterFeed}

function renderRepos(list, name) {
  
  if(list){
    return list
        .map(row=> <TwitterItem row={row}/>);
    }
  return
}
