import React, { useState} from "react";

export default function Input(inputData = {
                                              type:"text",
                                              placeholder:"",
                                              required:false,
                                              className:"",
                                              init: "",
                                              list:""
                                            }) {
   
  const {type,placeholder,required,className,init,list} = inputData;
  
  const [value, setValue] = useState(init);
  

  const input =  <input 
                        type={type} 
                        placeholder={placeholder} 
                        required={required} 
                        value={value}
                        onChange={e=> setValue(e.target.value)}
                        className={className}
                        list={list}
                    />

  return [value,input];
}