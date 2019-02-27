import React, { Component } from 'react';
import './TreeviewExpanded.css';
import TreeView from 'react-treeview';
import '../../../Assets/Styles/weather-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import SimpleLineIcon from 'react-simple-line-icons';

// treevew default list
const treeviewDefaultList = [
    {
        id:0,
        type: 'Parent 1',
        badge: '4',
        collapsed: true,
        classChange: true,
        children: [
            { id:1, 
                name: 'child 1', 
                badge: '2',
                collapsed: false,
                childclassChange: false,
                grandchildren:[
                    {id:2, name: 'Grandchild 1', badge: '0'},
                    {id:3, name: 'Grandchild 2', badge: '0'},
                ]
            },
            { id:4, name: 'child 2',
                collapsed: false,
                childclassChange: false,
                badge: '0',
                grandchildren:[
                    {id:5, name: 'Grandchild 1', badge: '0'},
                    {id:6, name: 'Grandchild 2', badge: '0'},
                ]
            }
        ]
    },
    {
        id:7,
        type: 'Parent 2',
        collapsed: true,
        classChange: true,
        badge: '0',
        children: [
            { id:8, name: 'child 1', 
                collapsed: false,
                childclassChange: false,
                badge: '0',
                grandchildren:[
                    {id:9, name: 'Grandchild 1', badge: '0'},
                    {id:10, name: 'Grandchild 2', badge: '0'},
                ]
            },
            { id:11, name: 'child 2', 
                collapsed: false,
                childclassChange: false,
                badge: '0',
                grandchildren:[
                    {id:12, name: 'Grandchild 1', badge: '0'},
                    {id:13, name: 'Grandchild 2', badge: '0'},
                ]
            }
        ]
    },
    {
        id:14,
        type: 'Parent 3',
        collapsed: true,
        classChange: true,
        badge: '0',
        children: [],
    },
    {
        id:15,
        type: 'Parent 4',
        collapsed: true,
        classChange: true,
        badge: '0',
        children: [],
    },
    {
        id:16,
        type: 'Parent 5',
        collapsed: true,
        classChange: true,
        badge: '0',
        children: [],
    },
  ];

class TreeviewExpanded extends Component {
    constructor(props){
        super(props);
        this.state = {
            folderParentcollapsed: treeviewDefaultList.map((parent) => true),
            folderChildrencollapsed: treeviewDefaultList.map((item,index) => {
        
                return item.children.map(() => true)
                
            }),
            childclassChange: treeviewDefaultList.map((item, index) => {
                    
                return item.children.map(() => true)
                
            }),
            classChange :  treeviewDefaultList.map(() => true),
            hideClickCircle: false
            
        }

        this.handleParentToggle = this.handleParentToggle.bind(this);
        this.handleChildrenToggle = this.handleChildrenToggle.bind(this);
    }
   
    // Parent Toggle
    handleParentToggle(i) {
        let [...folderParentcollapsed] = this.state.folderParentcollapsed;
        let [...classChange] = this.state.classChange;
        folderParentcollapsed[i] = !folderParentcollapsed[i];
        classChange[i] = !classChange[i];
        this.setState({
            folderParentcollapsed:folderParentcollapsed,
            classChange:classChange
            
        })
    }

    // Children Toggle
    handleChildrenToggle(children, i) {
        let [...folderChildrencollapsed] = this.state.folderChildrencollapsed;
        let [...childclassChange] = this.state.childclassChange;
        folderChildrencollapsed[children.id] = !folderChildrencollapsed[children.id];
        childclassChange[children.id] = !childclassChange[children.id];
        this.setState({
            folderChildrencollapsed: folderChildrencollapsed,
            childclassChange: childclassChange,
            hideClickCircle: true
        })
        
    }
    render(){

        const folderParentcollapsed = this.state.folderParentcollapsed;
        const folderChildrencollapsed = this.state.folderChildrencollapsed;
        const classChange = this.state.classChange;
        const childclassChange = this.state.childclassChange;
        const hideClickCircle = this.state.hideClickCircle;

     return(
        <div className="treeviewdefault-row">
        <div className="treeviewdefault-col-lg-6">
            <div className="treeviewdefault-card">
                <div className="treeviewdefault-card-body">
                    <h5 className="treeviewdefault-card-title">Expanded</h5>
                </div>
                <div className="treeviewdefault-tree">
                    <div className="treeviewdefault-tree-border">
                    <ul className="treeview-ul">
                    <li className="treeview-li-div">
                    {/* data mapping */}
                    { treeviewDefaultList.map((item, i) => {

                        // Parent folder label
                        const label = 
                            <span onClick={this.handleParentToggle.bind(null, i)} id={item.id}>
                                <SimpleLineIcon name="user" style={SimpleLineIconStyle}/>
                                Parent {i + 1}
                                <span style={{marginLeft: '10px', fontSize: '11px'}}>{item.badge}</span>
                            </span>;

                        return (
                            // Parent folder
                            <li className="treeview-li">
                            <TreeView
                                key={i}
                                nodeLabel={ label ? label : null }
                                collapsed={folderParentcollapsed[i]}
                                classChange={classChange[i]}
                                onClick={this.handleParentToggle.bind(null, i)}
                            >
                                
                                { item.children.map((children) => {

                                    // Children folder label
                                    const label2 = 
                                        <span onClick={this.handleChildrenToggle.bind(null,children, i)} id={children.id}>
                                            {children.grandchildren.length > 0 ? 
                                                <FontAwesomeIcon 
                                                    icon={faCircle} 
                                                    style={{
                                                        marginRight: '10px', 
                                                        display: hideClickCircle ? "none" : "inline-block"
                                                        }}/> 
                                            : null
                                            }
                                            <SimpleLineIcon name="user" style={SimpleLineIconStyle}/>
                                            {children.name}
                                            <span style={{marginLeft: '10px', fontSize: '11px'}}>{children.badge}</span>
                                        </span>;

                                    return(

                                        // Children folder
                                        <li className="treeview-li-1">
                                        <TreeView 
                                            itemClassName={ childclassChange[children.id] === false ? "tree-view_item1" : "treeviewcustom-treeview tree-view_item1" }
                                            key={children.id}
                                            nodeLabel={ label2 ? label2 : null } 
                                            collapsed={folderChildrencollapsed[children.id]} 
                                            childclassChange={childclassChange[children.id]}
                                        >
                                                { folderChildrencollapsed[children.id] === false ? children.grandchildren.map((grandchildren, i) => {

                                                    const label3 = 
                                                        <span className="treeviewdefault-grandchildren-name">
                                                            <SimpleLineIcon name="user" style={SimpleLineIconStyle}/>
                                                            {grandchildren.name}
                                                            <span style={{marginLeft: '10px', fontSize: '11px'}}>{grandchildren.badge}</span>
                                                        </span>;

                                                            return(
                                                                // grandchildren folder
                                                                <li className="treeview-li-2">
                                                                <TreeView 
                                                                    itemClassName="tree-view_item2"
                                                                    key={i}
                                                                    nodeLabel={ label3 ? label3 : null } 
                                                                    defaultCollapsed={false} 
                                                                >
                                                                </TreeView>
                                                                </li>
                                                            )
                                                    }) 
                                                    : null
                                                }
                                        </TreeView>
                                        </li>
                                        )
                                    })}
                            </TreeView>
                            </li>
                        );
                    })}
                    </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    
        )
    }   
}

const SimpleLineIconStyle = {
    marginRight: '10px',
    fontSize: '12px',
    fontWeight: 500,
    display: 'inline-block'
}
export default TreeviewExpanded;