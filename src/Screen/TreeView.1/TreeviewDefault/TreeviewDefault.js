import React, { Component } from 'react';
import './TreeviewDefault.css';
import TreeView from 'react-treeview';
import '../../../Assets/Styles/weather-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

// treevew default list
const treeviewDefaultList = [
    {
        type: 'Parent 1',
        collapsed: false,
        children: [
            { name: 'child 1', detail1: 'Grandchild 1', detail2: 'Grandchild 2', collapsed: false},
            { name: 'child 2', collapsed: false},
        ]
    },
    {
        type: 'Parent 2',
        collapsed: false,
        children: [],
    },
    {
        type: 'Parent 3',
        collapsed: false,
        children: [],
    },
    {
        type: 'Parent 4',
        collapsed: false,
        children: [],
    },
    {
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
            togglePlus: false
        }
        this.handleToggle = this.handleToggle.bind(this);

    }
    // onclick change plus minus icon + folder collapsed
    handleToggle(i) {
        
        let [...foldercollapsed] = this.state.foldercollapsed;
        foldercollapsed[i] = !foldercollapsed[i];
        this.setState({
            foldercollapsed: foldercollapsed,
        })
    }

    render(){

        const foldercollapsed = this.state.foldercollapsed;

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
                            {item.children.map(child => {
                                const label2 = <span className="treeviewdefault-children-name"><FontAwesomeIcon icon={faFolder} style={FontAwesomeIconStyle}/>{child.name}</span>;
                                return(
                                    // grandchildren folder
                                    <TreeView nodeLabel={ label2 ? label2 : null } key={child.name} defaultCollapsed={false} onClick={this.handleToggle.bind(null, i)}>
                                        { child.detail1 ? 
                                            <div className="treeviewdefault-treeview-grandchildren">
                                                <FontAwesomeIcon icon={faFolder} style={FontAwesomeIconStyle}/>
                                                {child.detail1}
                                            </div> 
                                        : null }
                                        { child.detail2 ? 
                                            <div className="treeviewdefault-treeview-grandchildren">
                                                <FontAwesomeIcon icon={faFolder} style={FontAwesomeIconStyle}/>
                                                    {child.detail2}
                                            </div> 
                                        : null }
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