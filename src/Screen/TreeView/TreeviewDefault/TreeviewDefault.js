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

class TreeviewDefault extends Component {
    constructor(props){
        super(props);
        this.state = {
            treeviewDefaultList,
            folderParentcollapsed: treeviewDefaultList.map((parent) => {return parent }),
            // folderChildrencollapsed: treeviewDefaultList.map(() => true),
            folderChildrencollapsed: treeviewDefaultList.map((item,index) => {
                // item.children.map(()=> {
                    return item.children.map((children) => true)
                // })
            }),
            childclassChange: treeviewDefaultList.map((item, index) => {
                    return item.children.map(() => true)
                
            }),
            classChange :  treeviewDefaultList.map(() => true),
            // childrenclassChange :  treeviewDefaultList.map(() => true)
            
        }
        this.handleParentToggle = this.handleParentToggle.bind(this);
        this.handleChildrenToggle = this.handleChildrenToggle.bind(this);

    
    }
   
    // Parent Toggle
    handleParentToggle(i) {
        console.log("parent", i);
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
        console.log(children.id, i);
        let [...folderChildrencollapsed] = this.state.folderChildrencollapsed;
        let [...childclassChange] = this.state.childclassChange;
        folderChildrencollapsed[children.id] = !folderChildrencollapsed[children.id];
        childclassChange[children.id] = !childclassChange[children.id];
        console.log(folderChildrencollapsed);
        this.setState({
            folderChildrencollapsed: folderChildrencollapsed,
            childclassChange: childclassChange
        })
        
    }

    render(){

        const folderParentcollapsed = this.state.folderParentcollapsed;
        const folderChildrencollapsed = this.state.folderChildrencollapsed;
        const classChange = this.state.classChange;
        const childclassChange = this.state.childclassChange;

     return(
        <div className="treeviewdefault-row">
        <div className="treeviewdefault-col-lg-6">
            <div className="treeviewdefault-card">
                <div className="treeviewdefault-card-body">
                    <h5 className="treeviewdefault-card-title">Default</h5>
                </div>
                <div className="treeviewdefault-tree">
                    <div className="treeviewdefault-tree-border">
                    {/* data mapping */}
                    { treeviewDefaultList.map((item, i) => {

                        // Parent folder
                        const label = 
                            <span onClick={this.handleParentToggle.bind(null, i)} id={item.id}>
                                <FontAwesomeIcon icon={faFolder} style={FontAwesomeIconStyle}/>
                                Parent {i + 1}
                            </span>;

                        return (
                            <TreeView
                            itemClassName={ classChange[i] === false ? "parent-minus" :"treeviewdefault-treeview" }
                            key={i}
                            nodeLabel={ label ? label : null }
                            collapsed={folderParentcollapsed[i]}
                            classChange={classChange[i]}
                            onClick={this.handleParentToggle.bind(null, i)}
                            >
                                
                                { item.children.map((children) => {

                                    // Children folder
                                    const label2 = 
                                        <span onClick={this.handleChildrenToggle.bind(null,children, i)} id={children.id}>
                                            <FontAwesomeIcon icon={faFolder} style={FontAwesomeIconStyle}/>
                                            {children.name}
                                        </span>;

                                    return(
                                        // Children folder
                                        <TreeView 
                                            itemClassName={ childclassChange[children.id] === false ? "parent-minus" : "treeviewdefault-treeview" }
                                            key={children.id}
                                            nodeLabel={ label2 ? label2 : null } 
                                            collapsed={folderChildrencollapsed[children.id]} 
                                            childclassChange={childclassChange[children.id]}
                                            // onClick={this.handleChildrenToggle.bind(null, i)}
                                            >
                                                { folderChildrencollapsed[children.id] === false ? children.grandchildren.map((grandchildren, i) => {

                                                    const label3 = 
                                                        <span className="treeviewdefault-grandchildren-name">
                                                            {grandchildren.name}
                                                        </span>;

                                                            return(
                                                                // grandchildren folder
                                                                <TreeView 
                                                                    key={i}
                                                                    nodeLabel={ label3 ? label3 : null } 
                                                                    defaultCollapsed={false} 
                                                                    >
                                                                </TreeView>
                                                            )
                                                    }) 
                                                    : null
                                                }
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