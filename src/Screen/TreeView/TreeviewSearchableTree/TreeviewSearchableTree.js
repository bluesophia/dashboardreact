import React, { Component } from 'react';
import './TreeviewSearchableTree.css';
import { TreeviewSearchableTreeInput, TreeviewDefault } from '../TreeViewExports';
class TreeviewSearchableTree extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }

    }
   
    render(){
     return(
        <div className="treeviewsearchabletree-row">
            <div className="treeviewsearchabletree-col-lg-6">
                <div className="treeviewsearchabletree-card">
                    <div className="treeviewsearchabletree-card-body">
                        <h5 className="treeviewsearchabletree-card-title">Searchable Tree</h5>
                    </div>
                    <TreeviewSearchableTreeInput />
                    <TreeviewDefault />
                    <div className="treeviewsearchabletree-card-result">
                        <h2 className="treeviewsearchabletree-card-result-h2">Results</h2>
                        <p className="treeviewsearchabletree-card-result-p">0 matches found</p>
                    </div>
                </div>
            </div>
        </div>  
    
        )
    }   
}

export default TreeviewSearchableTree;