import React from "react";
import IconGithub from '../../assets/img/github.png'
import "./footer.css"

const Footer=()=> {
    return (
      <div className="contenedor-footer">
        
        <span className="texto-footer">By Ericka Gaitan ® 2023</span>

        <a href="https://github.com/erickagaitan/movies">
          <img 
            src={IconGithub} 
            className="icon-github" 
            alt="icon-github"
          />
        </a>
       
      </div>
    );
  }
  
export default Footer;