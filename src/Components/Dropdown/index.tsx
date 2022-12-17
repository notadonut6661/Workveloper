import  './style.scss';
import React from "react";

const initialState = {
    isBodyHovered: false
};

type stateType = typeof initialState;

export default class Dropdown extends React.Component<{children: JSX.Element[]}, stateType> {

    state = initialState;

   render() {
       return (
           <div className={'Dropdown'}>
               {this.props.children.map((el, index) => {
                   const className = index === 0 ? 'DropdownTrigger': 'DropdownBody';

                   if(className === 'DropdownBody') {
                       return el;
                   }
                   return <div className={className}>
                       {el}
                   </div>

               })}
           </div>
       );
   }


}