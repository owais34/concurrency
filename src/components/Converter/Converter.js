import  React from 'react';
import List from './List';
import Dropdown from '@bit/campgladiator.cgui.components.atoms.dropdown';

const defaultOption = {value:'INR',label:'Indian Rupee'};


const Converter=({changefirst,changesecond})=>{
  return (
    <div style={{display:'flex'}}>
    <Dropdown
  options={List}
  default_={defaultOption}
  style={{minWidth: '160px',margin:10}}
  onChange={changefirst}
    />
    <h1 style={{color:'white',padding:10,marginTop:0}}>To</h1>
    <Dropdown
  options={List}
  default_={defaultOption}
  style={{minWidth: '160px',margin:10}}
  onChange={changesecond}
    />
    </div>
  );
}

export default Converter;
