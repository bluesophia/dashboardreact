import React, { Component } from 'react';
import './TreeviewSearchableTreeInput.css';
import { InputSearch } from '../../../Components/Common/Input/InputExports'
import { RectangleButton } from '../../../Components/Common/Button/ButtonExports'
class TreeviewSearchableTreeInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }

    }
    render(){
        return(
            <div className="treeviewsearchableinput-card-body-content">
                <h2 className="treeviewsearchableinput-card-title-name">Input</h2>
                <InputSearch />
                <div className="treeviewsearchableinput-card-body-content-input">
                    <div className="treeviewsearchableinput-card-body-content-input-div"><input type="checkbox" value="Ignore Case"/>Ignore Case</div>
                    <div className="treeviewsearchableinput-card-body-content-input-div"><input type="checkbox" value="Exact Match"/>Exact Match</div>
                    <div className="treeviewsearchableinput-card-body-content-input-div"><input type="checkbox" value="Reveal Results"/>Reveal Results</div>
                </div>
                <div className="treeviewsearchableinput-card-body-content-button">
                    <RectangleButton value="Search"/>
                    <RectangleButton value="Clear" 
                    backgroundColor="var(--white)"
                    color="var(--black)"
                    fontWeight="400"/>
                </div>
            </div>
        )
    }   
}

export default TreeviewSearchableTreeInput;