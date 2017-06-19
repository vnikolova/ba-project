import React, { Component } from 'react';
import Main from '../../layouts/Main.js';
import { GridItem, SearchBar } from './components';
import { GridList, GridTile } from 'material-ui';
import axios from 'axios';
import { Col, Row } from 'react-flexbox-grid';

class Search extends Component {

constructor(props){
  super(props);

  this.state = {
    projects: []
    };
  }

  componentWillMount(){
    axios.get('/search',{}).then(function(obj){
      return obj.data;
    }).then(json => {
      this.setState({
        projects: json
      });
    });
  };

  render() {
    const { projects } = this.state;
    const style = {
      search: {
        marginTop: '30px'
      }
    }

    return(
      <Main>
        <Col xs={10} xsOffset={1}>
          <SearchBar style={style.search} />
          <GridList
            cellHeight='auto'
          >
          {projects.map((project) => (
              <GridTile
                style={{padding: '16px', height: 'auto'}}
                key={project._id}
              >
                <GridItem data={project}/>
              </GridTile>
            )
          )}
          </GridList>
        </Col>
      </Main>
    )
  }
}

export default Search;
