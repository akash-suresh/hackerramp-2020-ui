import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  handleSubmit = (value, e) => {
    debugger
    this.setState({value})
    this.context.router.push({pathname: `/${e.id}`});
  }

  render() {
    return (
      <div style={{height:'804px',backgroundImage:'url("http://3.bp.blogspot.com/-LRFlxajCKS4/Vexp3jb_fEI/AAAAAAAAYGE/m82WYWe3BXA/s1600/wood-background-3780-1920x1080-wallemo.jpg")'}}>
        <section className="container home">
          
          <h3 className="The-Reviewer-Home">Critico</h3>
          <Autocomplete
            // style={{marginLeft:'260px', width: '525px', height:'40px'}}
            items={[  
              { id: 1, label: 'Oneplus 6'},
              { id: 2, label: 'Oneplus 5T'},
              { id: 3, label: 'Redmi Note 5'},
              { id: 4, label: 'Redmi Note 5 pro'},
              { id: 5, label: 'Google Pixel 2XL'},
              { id: 6, label: 'GoPro Hero'},
              { id: 7, label: 'Canon EOS Mark 5D'},
              { id: 8, label: 'Lenovo Thinkpad'},
              { id: 9, label: 'Fitbit Charge 2'},
              { id: 10, label: 'Apple iPhoneX'},
            ]}
            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}
            renderItem={(item, highlighted) =>
              <div className="home-item"
                key={item.id}
                style={{ backgroundColor: highlighted ? '#eee' : 'transparent', textAlign: 'left', marginLeft: '5px', width:'300px'}}
              >
                {item.label}
              </div>
            }
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onSelect={this.handleSubmit}
          />
          
        </section>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
