import React, { Component } from 'react';
import './TreeviewDefault.css';
// import TreeView from 'react-treeview';
import '../../../Assets/Styles/weather-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

// treevew default list
const treeviewDefaultList = [
    {
        type: 'Parent 1',
        collapsed: false,
        children: [
            { name: 'child 1', detail1: ['Grandchild 1', 'Grandchild 2'], collapsed: false},
            { name: 'child 2', collapsed: false},
        ]
    },
    {
        type: 'Parent 2',
        collapsed: false,
        children: [
            { name: 'child 1', detail1: ['Grandchild 1', 'Grandchild 2'], collapsed: false},
            { name: 'child 2', collapsed: false},
        ]
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
            togglePlus: false,
            classon: false,
            childclaasson: false
        }
        this.handleClick = this.handleClick.bind(this);

    }
    
    // onclick change plus minus icon + folder collapsed
    handleClick(e) {
        alert(e.target.id);
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
        <div className="treeviewdefault-row">
        <div className="treeviewdefault-col-lg-6">
            <div className="treeviewdefault-card">
                <div className="treeviewdefault-card-body">
                    <h5 className="treeviewdefault-card-title">Default</h5>
                </div>
                <div className="treeviewdefault-tree">
                    <div className="treeviewdefault-tree-border">
                    {/* data mapping */}
                        <ul id="myUL">
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
                        </ul>
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