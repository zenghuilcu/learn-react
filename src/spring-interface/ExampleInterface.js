import React, {useState} from "react";
import {Button, Form} from "semantic-ui-react";

export default function ExampleInterface() {
    //https://dev.to/pnkfluffy/passing-data-from-child-to-parent-with-react-hooks-1ji3

    const onChange = (name, value) => {
        console.log(name, value);
    }

    return (
        <Form>
            <Form.Field>
                <CustomerField name={"PersonName"} onChange={onChange}/>
            </Form.Field>
            <Button type={"submit"}>Submit</Button>
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
