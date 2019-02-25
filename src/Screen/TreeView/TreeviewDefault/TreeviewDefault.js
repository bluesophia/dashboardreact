import React, { Component } from 'react';
import './TreeviewDefault.css';
import TreeView from 'react-treeview';
import '../../../Assets/Styles/weather-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

// treevew default list
const treeviewDefaultList = [
    {
        id:0,
        type: 'Parent 1',
        collapsed: false,
        children: [
            { id:1, name: 'child 1', 
                grandchildren:[
                    {id:2, name: 'Grandchild 1'},
                    {id:3, name: 'Grandchild 2'},
                ]
            },
            { id:4, name: 'child 2', 
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
        collapsed: false,
        children: [
            { id:8, name: 'child 1', 
                grandchildren:[
                    {id:9, name: 'Grandchild 1'},
                    {id:10, name: 'Grandchild 2'},
                ]
            },
            { id:11, name: 'child 2', 
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
        collapsed: false,
        children: [],
    },
    {
        id:15,
        type: 'Parent 4',
        collapsed: false,
        children: [],
    },
    {
        id:16,
        type: 'Parent 5',
        collapsed: false,
        children: [],
    },
  ];

class TreeviewDefault extends Component {
    constructor(props){
        super(props);
        this.state = {
            foldercollapsed: treeviewDefaultList.map(() => false),
            foldercollapsed2: treeviewDefaultList.map(() => false),
            foldercollapsed3: treeviewDefaultList.map(() => false),
            togglePlus: false
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleToggle2 = this.handleToggle2.bind(this);
        this.handleToggle3 = this.handleToggle3.bind(this);

    }
    // onclick change plus minus icon + folder collapsed
    handleToggle(i) {
        
        let [...foldercollapsed] = this.state.foldercollapsed;
        foldercollapsed[i] = !foldercollapsed[i];
        this.setState({
            foldercollapsed: foldercollapsed,
        })
    }
    handleToggle2(i) {
        
        let [...foldercollapsed2] = this.state.foldercollapsed2;
        foldercollapsed2[i] = !foldercollapsed2[i];
        this.setState({
            foldercollapsed2: foldercollapsed2,
        })
    }
    handleToggle3(i) {
        
        let [...foldercollapsed3] = this.state.foldercollapsed3;
        foldercollapsed3[i] = !foldercollapsed3[i];
        this.setState({
            foldercollapsed3: foldercollapsed3,
        })
    }

    render(){

        const foldercollapsed = this.state.foldercollapsed;
        const foldercollapsed2 = this.state.foldercollapsed2;
        const foldercollapsed3 = this.state.foldercollapsed3;

     return(
        <div className="treeviewdefault-row">
        <div className="treeviewdefault-col-lg-6">
            <div className="treeviewdefault-card">
                <div className="treeviewdefault-card-body">
                    <h5 className="treeviewdefault-card-title">TO DO LIST</h5>
                </div>
                <div className="treeviewdefault-tree">
                    <div className="treeviewdefault-tree-border">
                    {/* data mapping */}
                    { treeviewDefaultList.map((item, i) => {

                        // Parent folder
                        const label = 
                            <span className="treeviewdefault-parent" onClick={this.handleToggle.bind(null, i)}>
                                <FontAwesomeIcon icon={faFolder} style={FontAwesomeIconStyle}/>
                                Parent {i + 1}
                            </span>;

                        return (
                            <TreeView
                            className="treeviewdefault-treeview"
                            key={i}
                            nodeLabel={ label ? label : null }
                            defaultCollapsed={false}
                            collapsed={foldercollapsed[i]}
                            onClick={this.handleToggle.bind(null, i)}
                            >
                                {/* Children folder */}
                                { item.children.map((item, i) => {

                                    const label2 = 
                                        <span className="treeviewdefault-children-name" onClick={this.handleToggle2.bind(null, i)}>
                                            <FontAwesomeIcon icon={faFolder} style={FontAwesomeIconStyle}/>
                                            {item.name}
                                        </span>;

                                    return(
                                        // Children folder
                                        <TreeView 
                                            key={i}
                                            nodeLabel={ label2 ? label2 : null } 
                                            defaultCollapsed={false} 
                                            collapsed={foldercollapsed2[i]} 
                                            onClick={this.handleToggle2.bind(null, i)}
                                             >
                                                { item.grandchildren.map((grandchildren, i) => {

                                                    const label3 = 
                                                        <span className="treeviewdefault-children-name" onClick={this.handleToggle3.bind(null, i)}>
                                                            <FontAwesomeIcon icon={faFolder} style={FontAwesomeIconStyle}/>
                                                            {grandchildren.name}
                                                        </span>;

                                                            return(
                                                                // grandchildren folder
                                                                <TreeView 
                                                                    key={i}
                                                                    nodeLabel={ label3 ? label3 : null } 
                                                                    defaultCollapsed={false} 
                                                                    collapsed={foldercollapsed3[i]} 
                                                                    onClick={this.handleToggle3.bind(null, i)}
                                                                    >
                                                                    </TreeView>
                                                            )
                                                    })}
                                        </TreeView>
                                        )
                                    })}
                            </TreeView>
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>
    </div>  
    
        )
    }   
}

const FontAwesomeIconStyle = {
    marginRight: '10px'
}
export default TreeviewDefault;