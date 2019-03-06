import React, { Component } from 'react';
import './TreeviewSearchable.css';
import { TreeviewSearchableTreeInput, TreeviewSearchableTree } from '../TreeViewExports';
const treeviewDefaultList = [
    {
        id:0,
        type: 'Parent 1',
        collapsed: true,
        classChange: true,
        children: [
            { id:1, 
                name: 'child 1', 
                collapsed: false,
                childclassChange: false,
                grandchildren:[
                    {id:2, name: 'Grandchild 1'},
                    {id:3, name: 'Grandchild 2'},
                ]
            },
            { id:4, name: 'child 2',
                collapsed: false,
                childclassChange: false,
                grandchildren:[
                    {id:5, name: 'Grandchild 1'},
                    {id:6, name: 'Grandchild 2'},
                ]
            }
        ]
    },
    {
        id:7,
        type: 'Parent 2',
        collapsed: true,
        classChange: true,
        children: [
            { id:8, name: 'child 1', 
                collapsed: false,
                childclassChange: false,
                grandchildren:[
                    {id:9, name: 'Grandchild 1'},
                    {id:10, name: 'Grandchild 2'},
                ]
            },
            { id:11, name: 'child 2', 
                collapsed: false,
                childclassChange: false,
                grandchildren:[
                    {id:12, name: 'Grandchild 1'},
                    {id:13, name: 'Grandchild 2'},
                ]
            }
        ]
    },
    {
        id:14,
        type: 'Parent 3',
        collapsed: true,
        classChange: true,
        children: [],
    },
    {
        id:15,
        type: 'Parent 4',
        collapsed: true,
        classChange: true,
        children: [],
    },
    {
        id:16,
        type: 'Parent 5',
        collapsed: true,
        classChange: true,
        children: [],
    },
  ];

class TreeviewSearchable extends Component {
    constructor(props){
        super(props);
        this.state = {
            // value=''
        }
        // this.handleChange = this.handleChange.bind(this);
    }
    
    // handleChange(e){
    //     changeValue
    // }

    render(){
        const { treeviewDefaultList  } = this.state;
     return(
        <div className="treeviewsearchable-row">
            <div className="treeviewsearchable-col-lg-6">
                <div className="treeviewsearchable-card">
                    <div className="treeviewsearchable-card-body">
                        <h5 className="treeviewsearchable-card-title">Searchable Tree</h5>
                    </div>
                    <div className="treeviewsearchable-card-grid">
                        <TreeviewSearchableTreeInput style={{marginBottom: '10px'}} onChange={this.handleChange}/>
                        <TreeviewSearchableTree 
                            // callbackFromParent={this.myCallback}
                            data={treeviewDefaultList}
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