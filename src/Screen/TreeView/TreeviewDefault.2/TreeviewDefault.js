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
        collapsed: true,
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
        collapsed: true,
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
        collapsed: true,
        children: [],
    },
    {
        id:15,
        type: 'Parent 4',
        collapsed: true,
        children: [],
    },
    {
        id:16,
        type: 'Parent 5',
        collapsed: true,
        children: [],
    },
  ];

class TreeviewDefault extends Component {
    constructor(props){
        super(props);
        this.state = {
            folderParentcollapsed: treeviewDefaultList.map(() => true),
            folderChildrencollapsed: treeviewDefaultList.map(() => true),
            folderGrandChildrencollapsed: treeviewDefaultList.map(() => true),
            classChange : false,
        }
        this.handleParentToggle = this.handleParentToggle.bind(this);
        this.handleChildrenToggle = this.handleChildrenToggle.bind(this);
        this.handleGrandChildrenToggle = this.handleGrandChildrenToggle.bind(this);

    }
    // Parent Toggle
    // handleParentToggle(i) {
    //     let [...folderParentcollapsed] = this.state.folderParentcollapsed;
    //     folderParentcollapsed[i] = !folderParentcollapsed[i];
    //     this.setState({
    //         folderParentcollapsed: folderParentcollapsed,
            
    //     })
    //     this.setState (prevState => ({
    //         classChange : !prevState.classChange
    //     }))
    // }
    handleParentToggle(item, id) {
        const { folderParentcollapsed } = this.state;
        const index = folderParentcollapsed.findIndex(item => item.id === id);
    }

    // Children Toggle
    handleChildrenToggle(i) {
        
        let [...folderChildrencollapsed] = this.state.folderChildrencollapsed;
        folderChildrencollapsed[i] = !folderChildrencollapsed[i];
        this.setState({
            folderChildrencollapsed: folderChildrencollapsed,
        })
    }

    // GrandChild Toggle
    handleGrandChildrenToggle(i) {
        
        let [...folderGrandChildrencollapsed] = this.state.folderGrandChildrencollapsed;
        folderGrandChildrencollapsed[i] = !folderGrandChildrencollapsed[i];
        this.setState({
            folderGrandChildrencollapsed: folderGrandChildrencollapsed,
        })
    }

    render(){

        const folderParentcollapsed = this.state.folderParentcollapsed;
        const folderChildrencollapsed = this.state.folderChildrencollapsed;
        const folderGrandChildrencollapsed = this.state.folderGrandChildrencollapsed;
        const { classChange } = this.state;

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
                            <span onClick={this.handleParentToggle.bind(null, i)}>
                                <FontAwesomeIcon icon={faFolder} style={FontAwesomeIconStyle}/>
                                Parent {i + 1}
                            </span>;

                        return (
                            <TreeView
                            itemClassName="treeviewdefault-treeview"
                            key={i}
                            nodeLabel={ label ? label : null }
                            defaultCollapsed={false}
                            collapsed={folderParentcollapsed[i]}
                            onClick={this.handleParentToggle.bind(null, i)}
                            >
                                {/* Children folder */}
                                { item.children.map((item, i) => {

                                    const label2 = 
                                        <span className="treeviewdefault-children-name" onClick={this.handleChildrenToggle.bind(item, i)}>
                                            <FontAwesomeIcon icon={faFolder} style={FontAwesomeIconStyle}/>
                                            {item.name}
                                        </span>;

                                    return(
                                        // Children folder
                                        <TreeView 
                                            itemClassName="treeviewdefault-treeview"
                                            key={i}
                                            nodeLabel={ label2 ? label2 : null } 
                                            defaultCollapsed={false} 
                                            collapsed={folderChildrencollapsed[i]} 
                                            onClick={this.handleChildrenToggle.bind(null, i)}
                                             >
                                                { item.grandchildren.map((grandchildren, i) => {

                                                    const label3 = 
                                                        <span className="treeviewdefault-grandchildren-name" onClick={this.handleGrandChildrenToggle.bind(null, i)}>
                                                            {grandchildren.name}
                                                        </span>;

                                                            return(
                                                                // grandchildren folder
                                                                <TreeView 
                                                                    key={i}
                                                                    nodeLabel={ label3 ? label3 : null } 
                                                                    defaultCollapsed={false} 
                                                                    collapsed={folderGrandChildrencollapsed[i]} 
                                                                    onClick={this.handleGrandChildrenToggle.bind(null, i)}
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