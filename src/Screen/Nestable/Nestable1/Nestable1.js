import React, { Component } from 'react';
import './Nestable1.css';
// import TreeView from 'react-treeview';
import '../../../Assets/Styles/weather-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import Nestable from 'react-nestable';
import { WidgetChatDifferentOption } from '../../WidgetApps/WidgetAppsExports';

// treevew default list
const treeviewDefaultList = [
    {   
        id: 0,
        text: 'Parent 1',
        children: [
            { id: 1, text: 'child 1'},
            { id: 2, text: 'child 2'},
        ]
    },
    {
        text: 'Parent 2',
        children: [
            { text: 'child 1', detail1: ['Grandchild 1', 'Grandchild 2'], collapsed: false},
            { text: 'child 2', collapsed: false},
        ]
    },
    // {
    //     type: 'Parent 3',
    //     collapsed: false,
    //     children: [],
    // },
    // {
    //     type: 'Parent 4',
    //     collapsed: false,
    //     children: [],
    // },
    // {
    //     type: 'Parent 5',
    //     collapsed: false,
    //     children: [],
    // },
  ];
  const renderItem = ({ item }) => {
    return item.text;
};
class Nestable1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            foldercollapsed: treeviewDefaultList.map(() => false),
            togglePlus: false,
            classon: false,
            childclaasson: false
        }
        this.handleClick = this.handleClick.bind(this);

    }
    
    // onclick change plus minus icon + folder collapsed
    handleClick(e) {
        // alert(e.target.id);
            this.setState(prevstate => ({
                classon: !prevstate.classon,
                childclaasson:!prevstate.childclaasson
            }))

    //    document.getElementsByClassName(".nested").classList.toggle("active");
    //    var css = (this.props.showHideSidenav === "hidden") ? "show" : "hidden";
    //    this.setState({"showHideSidenav":css});
    }

    render(){
        // for (i = 0; i < toggler.length; i++) {
        //   toggler[i].addEventListener("click", function() {
        //     //   alert("hi");
        //     this.classList.toggle("caret-down");
        //   });
        // }
        const foldercollapsed = this.state.foldercollapsed;

     return(
        <div className="nestable1-row">
        <div className="nestable1-col-lg-6">
            <div className="nestable1-card">
                <div className="nestable1-card-body">
                    <h5 className="nestable1-card-title">Nestable1</h5>
                </div>
                <Nestable
                    collapse="ALL"
                    items={treeviewDefaultList}
                    renderItem={renderItem}
                    className="nestable"
                />
                {/* <div className="nestable1-tree">
                    <div className="nestable1-tree-border"> */}
                    {/* data mapping */}
                        {/* <ul id="myUL">
                        {
                            treeviewDefaultList.map((item, index) => {
                                return(
                                    <div>
                                    <li className={ this.state.classon ? "caret active caret-down blue" : "caret blue"} id={index} onClick={this.handleClick}>   
                                    {item.type}
                                    </li>
                                    {
                                        item.children.map((child) => {
                                            return(
                                            <li className={ this.state.classon ? "caret-child-active caret-down" : "caret-child"} onClick={this.handleClick}>  
                                            {child.name}
                                            </li> 
                                            )
                                        })
                                    }
                                    </div>
                                )
                            })
                        }
                        </ul> */}
                    {/* </div>
                </div> */}
            </div>
        </div>
    </div>  
    
        )
    }   
}

const FontAwesomeIconStyle = {
    marginRight: '10px'
}
export default Nestable1;