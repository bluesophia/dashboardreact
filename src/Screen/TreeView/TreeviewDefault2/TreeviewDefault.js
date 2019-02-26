import React, { Component } from 'react';
import './TreeviewDefault.css';
import CardTreeview from '../../../Components/CardTreeview/CardTreeview'
import TreeView from 'react-treeview';
import '../../../Assets/Styles/weather-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';



class TreeviewDefault extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.treeviewDefaultList
            
            

            
//   folderParentcollapsed: treeviewDefaultList.map(() => true),
//             folderChildrencollapsed: treeviewDefaultList.map(() => true),
//             folderGrandChildrencollapsed: treeviewDefaultList.map(() => true),
//             classChange : false,
        }
        // this.handleParentToggle = this.handleParentToggle.bind(this);
        // this.handleChildrenToggle = this.handleChildrenToggle.bind(this);
        // this.handleGrandChildrenToggle = this.handleGrandChildrenToggle.bind(this);

    }
    // // Parent Toggle
    // handleParentToggle(i, e) {
    //     // alert(e.target.key);
    //     let [...folderParentcollapsed] = this.state.folderParentcollapsed;
    //     folderParentcollapsed[i] = !folderParentcollapsed[i];
    //     this.setState({
    //         folderParentcollapsed: folderParentcollapsed,
            
    //     })
    //     this.setState (prevState => ({
    //         classChange : !prevState.classChange
    //     }))
    // }

    // // Children Toggle
    // handleChildrenToggle(i) {
        
    //     let [...folderChildrencollapsed] = this.state.folderChildrencollapsed;
    //     folderChildrencollapsed[i] = !folderChildrencollapsed[i];
    //     this.setState({
    //         folderChildrencollapsed: folderChildrencollapsed,
    //     })
    // }

    // // GrandChild Toggle
    // handleGrandChildrenToggle(i) {
        
    //     let [...folderGrandChildrencollapsed] = this.state.folderGrandChildrencollapsed;
    //     folderGrandChildrencollapsed[i] = !folderGrandChildrencollapsed[i];
    //     this.setState({
    //         folderGrandChildrencollapsed: folderGrandChildrencollapsed,
    //     })
    // }

    render(){
        console.log(this.props.treeviewDefaultList)
        // const folderParentcollapsed = this.state.folderParentcollapsed;
        // const folderChildrencollapsed = this.state.folderChildrencollapsed;
        // const folderGrandChildrencollapsed = this.state.folderGrandChildrencollapsed;
        const { classChange } = this.state;
        const { data } = this.state;
        
        // console.log(treeviewDefaultList);

     return(
        <div className="treeviewdefault-row">
        <div className="treeviewdefault-col-lg-6">
            <div className="treeviewdefault-card">
                <div className="treeviewdefault-card-body">
                    <h5 className="treeviewdefault-card-title">Default</h5>
                </div>
                <div className="treeviewdefault-tree">
                    <div className="treeviewdefault-tree-border">
                    {
                            data.map((item, index) => (
                            <CardTreeview 
                                key={data.id} 
                                type={data.type} 
                                collapsed={data.collapsed} 
                                children={data.children} 
                                grandchildren={data.grandchildren} 
                                // onClick={this.handleParentToggle.bind()}
                                defaultCollapsed={false}
                                // collapsed={folderParentcollapsed}
                                // collapsed={folderChildrencollapsed}
                                // collapsed={folderGrandChildrencollapsed}
                                // onClick={this.handleParentToggle.bind()}
                            />
                        ))
                    }
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