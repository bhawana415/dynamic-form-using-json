
import React, {Component} from 'react';
import InputTextField from './InputTextField';
import TextAreaField from './TextAreaField';
import DropDownSelect from './DropDownSelect';

class DynamicForm extends Component{
 state ={
    fields:[
        {
            placeholder:"Purpose of loan",
            name:"name",
            input_type:"dropdown",
            required:true,
            values:[
                "Home Loan",
                "Business Loan",
                "Working Loan",
                "Personal Loan",
                "Education Loan",
                "Loan Against Property",
                "Others"

            ]
        },

        {
            placeholder:"Name",
            name:"remaining_values",
            input_type:"big_text",
            required:true

        },
        {
            placeholder:"email",
            name:"email",
            input_type:"text",
            required:true

        },
        {
            placeholder:"Prefered time to call you",
            name:"contact_time",
            input_type:"text",
            required:true

        }

    ]
};
    

submitForm = event => {
  const { fields,...inputFields }= this.state;
  console.log(inputFields);
  event.prevent.Default();
};

_handleChange= event =>{
    this.setState({
[event.currentTarget.name]:event.currentTarget.value
    });
};

const {fields}=this.state;
return(
    
    <form onSubmit={this.submitForm} >
    {fields.map(form => {
        if(form.input_type === "text"){
            return( 
                <InputTextField
                name={form.name}
                placeholder={form.placeholder}
                required={form.required}
                key={form.placeholder}
                _handleChange={this._handleChange}
                />
            );
        }
        if(form.input_type === "big_text"){
            return(
                <TextAreaField
                name={form.name}
                placeholder={form.placeholder}
                required={form.required}
                key={form.placeholder}
                _handleChange={this._handleChange}
                />
            );
        }
        if(form.input_type==="dropdown"){
            return(
                <DropDownSelect
                name={form.name}
                placeholder={form.placeholder}
                required={form.required}
                val={form.values}
                key={form.placeholder}
                _handleChange={this._handleChange}
                />
            );
        }
    })}
    <input type="submit"/>
    </form>

)

}
export default DynamicForm;
