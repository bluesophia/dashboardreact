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
            togglePlus: false,
            classon: false
        }
        this.handleClick = this.handleClick.bind(this);

    }
    
    // onclick change plus minus icon + folder collapsed
    handleClick() {
        this.setState(prevstate => ({
            classon: !prevstate.classon
        }))
    //    document.getElementsByClassName(".nested").classList.toggle("active");
    //    var css = (this.props.showHideSidenav === "hidden") ? "show" : "hidden";
    //    this.setState({"showHideSidenav":css});
    }

    render(){
        let toggler = document.getElementsByClassName("caret");
        var i;
        
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
                        <li><span class={ this.state.classon ? "caret active caret-down" : "caret"} onClick={this.handleClick}>Beverages</span>
                            <li class={ this.state.classon ? "active" : "nested"}>
                            <li>Water</li>
                            <li>Coffee</li>
                            <li><span class="caret">Tea</span>
                                <li class={ this.state.classon ? "active" : "nested"}>
                                <li>Black Tea</li>
                                <li>White Tea</li>
                                <li><span class="caret">Green Tea</span>
                                    <ul class={ this.state.classon ? "active" : "nested"}>
                                    <li>Sencha</li>
                                    <li>Gyokuro</li>
                                    <li>Matcha</li>
                                    <li>Pi Lo Chun</li>
                                    </ul>
                                </li>
                                </li>
                            </li>
                            </li>
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

const FontAwesomeIconStyle = {
    marginRight: '10px'
}
export default TreeviewDefault;