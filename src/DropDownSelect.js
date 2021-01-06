import React from 'react';
const DropDownSelect =({name,placeholder,required,_handleChange})=>{
<div>
 <label>{placeholder}</label>
<select type ="text" name={name} required={required} onChange={_handleChange}>
<option value="">
Select an option
</option>
{val.map(value=><option value={values} key={values}>{values}</option>)}
 </select>

</div>

}

export default DropDownSelect;