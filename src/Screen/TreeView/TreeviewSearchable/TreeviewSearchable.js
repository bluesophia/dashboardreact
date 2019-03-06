import React, { Component } from 'react';
import './TreeviewSearchable.css';
import { TreeviewSearchableTreeInput, TreeviewSearchableTree } from '../TreeViewExports';
class TreeviewSearchable extends Component {
    constructor(props){
        super(props);
        this.state = {
            // listDatafromTreeviewData: '111',
            listDataFromChild:null
        }
            // this.handleResultChange = this.handleResultChange.bind(this);
            this.handleDataCallback=this.handleDataCallback.bind(this);
    }
    

    handleDataCallback(txtMsg){
        // alert(txtMsg);
        alert("fffff")
        console.log(this);
    }
    // myCallback = (listInfo) => {
    //     this.setState({
    //         listDataFromChild: listInfo
    //     });
        
    // }
    
    // handleResultChange(data){
    //     this.setState({
    //         data
    //     })
    // }

    render(){

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
                        <TreeviewSearchableTree 
                            // callbackFromParent={this.myCallback}
                            dataCallback={this.handleDataCallback}
                        />
                        <div className="treeviewsearchable-card-result">
                            <h2 className="treeviewsearchable-card-result-h2">Results</h2>
                            <p className="treeviewsearchable-card-result-p">0 matches found</p>
                            <p>{this.state.listDataFromChild}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    
        )
    }   
}

export default TreeviewSearchable;