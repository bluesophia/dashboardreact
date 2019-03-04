import React, { Component } from 'react';
import './TreeviewSearchable.css';
import { TreeviewSearchableTreeInput, TreeviewSearchableTree } from '../TreeViewExports';
class TreeviewSearchable extends Component {
    constructor(props){
        super(props);
        this.state = {
            // listDatafromTreeviewData: '111',
            listDataFromChild:''
        }
        // this.handleResultChange = this.handleResultChange.bind(this);

    }

    myCallback = (message) => {
        this.setState({
            listDataFromChild: message
        }, () => console.log(this.state.listDataFromChild));
        
    }
    
    // handleResultChange(data){
    //     this.setState({
    //         data
    //     })
    // }

    render(){
        const { listDataFromChild } = this.state;
     return(
        <div className="treeviewsearchable-row">
            <div className="treeviewsearchable-col-lg-6">
                <div className="treeviewsearchable-card">
                    <div className="treeviewsearchable-card-body">
                        <h5 className="treeviewsearchable-card-title">Searchable Tree</h5>
                        <h1>hi{this.state.datafromChildData}</h1>
                    </div>
                    <div className="treeviewsearchable-card-grid">
                        <TreeviewSearchableTreeInput style={{marginBottom: '10px'}}/>
                        <TreeviewSearchableTree callbackFromParent={this.myCallback}/>
                        <dataListtoParent message={listDataFromChild}/>
                        <div className="treeviewsearchable-card-result">
                            <h2 className="treeviewsearchable-card-result-h2">Results</h2>
                            <p className="treeviewsearchable-card-result-p">0 matches found</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    
        )
    }   
}

export default TreeviewSearchable;