import React from "react";
import "./styles.css";
import HerosDesc from "../../herosDesc.json"

const SuperHeroModal = (props) => {

    return (
        <div>
            <div id="openModal" className="modalDialog">
                <div>
                    <a href="#close" title="Close" className="close" onClick={props.closeModal}>
                        X
                    </a>
                    <img src={HerosDesc[props.selectedValue].imageUrl} width={250} height={250} alt=""/>
                    <br/>
                    { HerosDesc[props.selectedValue].description}
                </div>
            </div>
        </div>
        
    );
};

export default SuperHeroModal;
