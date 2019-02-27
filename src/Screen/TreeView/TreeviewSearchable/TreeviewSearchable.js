import React, { Component } from 'react';
import './TreeviewSearchable.css';
import { TreeviewSearchableTreeInput, TreeviewSearchableTree } from '../TreeViewExports';
class TreeviewSearchable extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }

    }
   
    render(){
     return(
        <div className="treeviewsearchable-row">
            <div className="treeviewsearchable-col-lg-6">
                <div className="treeviewsearchable-card">
                    <div className="treeviewsearchable-card-body">
                        <h5 className="treeviewsearchable-card-title">Searchable Tree</h5>
                    </div>
                    <div className="treeviewsearchable-card-grid">
                        <TreeviewSearchableTreeInput style={{marginBottom: '10px'}} />
                        <TreeviewSearchableTree/>
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