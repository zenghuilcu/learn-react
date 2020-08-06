import React, {useState} from "react";
import {Button, Form} from "semantic-ui-react";
import axios from "axios"

export default function ExampleInterface() {
    //https://dev.to/pnkfluffy/passing-data-from-child-to-parent-with-react-hooks-1ji3
    const [nameValues, setNameValue] = useState([])

    const onChange = (name, value) => {
        console.log(nameValues)
        console.log(typeof nameValues)
        setNameValue(prevState => {
            let array = prevState;
            array[name] = value;
            return array;
        })
    }


    const onSubmit = () => {
        console.log(nameValues["PersonName"])
        axios.get('')
            .then()
            .catch()
            .then()

        axios.post("/", {})
    }

    return (
        <Form>
            <Form.Field>
                <CustomerField name={"PersonName"} onChange={onChange}/>
            </Form.Field>
            <Form.Field>
                <CustomerField name={"PersonSex"} onChange={onChange}/>
            </Form.Field>
            <Button type={"submit"} onClick={onSubmit}>Submit</Button>
        </Form>
    )
}

const CustomerField = (props) => {
    const [value, setValue] = useState("")

    return (
        <Form.Field>
            <label>{props.name}</label>
            <input placeholder={"Please enter " + props.name}
                   onChange={(e) => {
                       setValue(e.target.value)
                       props.onChange(props.name, value)
                   }}
                   value={value}
            />
        </Form.Field>
    )
}
