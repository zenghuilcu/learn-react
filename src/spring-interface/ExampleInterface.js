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
        axios.post("http://localhost:8080/arpaCloud/sql", {
            companyName: nameValues['companyName'],
            customerCode: nameValues['customerCode'],
            appName: nameValues['appName'],
            appSecret: nameValues['appSecret']
        }).then(function (response) {
            console.log(response.data)
        })
    }

    return (
        <Form>
            <Form.Field>
                <CustomerField name={"companyName"} onChange={onChange}/>
            </Form.Field>
            <Form.Field>
                <CustomerField name={"customerCode"} onChange={onChange}/>
            </Form.Field>
            <Form.Field>
                <CustomerField name={"appName"} onChange={onChange}/>
            </Form.Field>
            <Form.Field>
                <CustomerField name={"appSecret"} onChange={onChange}/>
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
