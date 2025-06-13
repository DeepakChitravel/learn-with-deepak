import { NavLink } from 'react-router-dom';
import '../css/FundamentalsSidebar.css';

const CSSSidebar = () => {
  return (
    <div className="sidebar">
      <h5 className="sidebar-title">CSS Tutorial</h5>
      <nav className="sidebar-nav">
       <NavLink to="/css/CSSIntro" activeclassname="active">CSS Introduction</NavLink>
      <NavLink to="/css/CSSLinkTag" activeclassname="active">CSS Link Tag</NavLink>
      <NavLink to="/css/Border" activeclassname="active">Border </NavLink>
      <NavLink to="/css/TextProperties" activeclassname="active">Text Properties </NavLink>
      <NavLink to="/css/FontStyle" activeclassname="active">Font Style </NavLink>
      <NavLink to="/css/Background" activeclassname="active">Background Color </NavLink>
      <NavLink to="/css/Margin" activeclassname="active">Margin </NavLink>
      <NavLink to="/css/BackgroundProperties" activeclassname="active">BackGround Properties </NavLink>
      <NavLink to="/css/Padding" activeclassname="active">Padding Properties </NavLink>
      <NavLink to="/css/Display" activeclassname="active">Display Properties </NavLink>
      <NavLink to="/css/Selector" activeclassname="active">CSS Selector </NavLink>
      <NavLink to="/css/CSSFlexBox" activeclassname="active">CSS Flex Box </NavLink>
      <NavLink to="/css/CSSFloat" activeclassname="active">CSS Float  </NavLink>
      <NavLink to="/css/CSSHover" activeclassname="active">CSS Hover  </NavLink>
      <NavLink to="/css/CSSTransition" activeclassname="active">CSS Transition  </NavLink>
      <NavLink to="/css/CSSFlexContainer" activeclassname="active">CSS Flex Container  </NavLink>
      <NavLink to="/css/CSSFlexWrap" activeclassname="active">CSS Flex Wrap  </NavLink>
      <NavLink to="/css/CSSJustifyContent" activeclassname="active">CSS Justify Content  </NavLink>
      <NavLink to="/css/CSSAlignItems" activeclassname="active">CSS Align Items  </NavLink>
      <NavLink to="/css/CSSAlignContent" activeclassname="active">CSS Align Content  </NavLink>
      <NavLink to="/css/CSSGrid" activeclassname="active">CSS Grid  </NavLink>
      <NavLink to="/css/CSSTransform2D" activeclassname="active">CSS Transform 2D  </NavLink>
      <NavLink to="/css/CSSTransform3D" activeclassname="active">CSS Transform 3D  </NavLink>
      <NavLink to="/css/CSSCombinators" activeclassname="active">CSS Combinators  </NavLink>
      <NavLink to="/css/CSSAnimation" activeclassname="active">CSS Animaiton  </NavLink>
      <NavLink to="/css/AnimatedButton" activeclassname="active">CSS Animaiton Button </NavLink>
      <NavLink to="/css/ButtonDesigns" activeclassname="active">CSS Button Designs </NavLink>
      <NavLink to="/css/AnimationFillMode" activeclassname="active">CSS Animation Fill Mode </NavLink>
      <NavLink to="/css/ImageButton" activeclassname="active">CSS Image Button </NavLink>
      <NavLink to="/css/CSSDropdown" activeclassname="active">CSS Dropdown </NavLink>
      <NavLink to="/css/ImageDropdown" activeclassname="active">CSS Image Dropdown </NavLink>
      <NavLink to="/css/CSSLinearGradients" activeclassname="active">CSS LinearGradients </NavLink>
   
      </nav>
    </div>
  );
};

export default CSSSidebar;

