import React, { useEffect, useState } from 'react';
import { List, ListItem, ListInput, Button, BlockFooter, useStore, Row, Col, Icon, f7  } from 'framework7-react';

const InputForm = (props) => {
    let question = props.question;
    if (question.type === 'smartselect') {
        return <ListItem 
                    smartSelect 
                    title={question.label} 
                    smartSelectParams={{
                        searchbar: true,
                        searchbarPlaceholder: 'Cari '+question.label,
                        closeOnSelect: true,
                        on: {
                            close: (e) => {
                                console.log(e.getValue)
                            }
                        }
                    }}
                >
                <select 
                    name="answerValue"
                    defaultValue={0}
                >
                    {question.answerList.map((e, index)=>{
                            return <option key={index} value={ e.answerId } >{ e.label}</option>
                    })}
                    <option value="0" disabled>Pilih Jawaban</option>
                </select>
            </ListItem>
    } else if(["text", "number"].includes(question.type)){
        return <ListInput
                outline
                label={question.label}
                name="answerValue"
                floatingLabel
                type={question.type}
                autocomplete="off"
                clearButton
            />
    } 
    else {
        return false
    }
    
}
export default InputForm;
