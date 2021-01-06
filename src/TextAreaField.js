import React from 'react';
const TextAreaField =({name,placeholder,required,_handleChange})=>{
<div>

    <textarea type ="text" name={name} required={required} autoComplete="off"
placeholder={placeholder} onChange={_handleChange} style={{height:"80px"}}
    />

</div>

}

export default TextAreaField;