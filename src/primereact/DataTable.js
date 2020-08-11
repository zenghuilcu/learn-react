import React from 'react'
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";

export const DataTableExample = () => {
    const data = [{name: "sun", sex: "boy"}]
    return (
        <div>
            <DataTable value={data}>
                <Column field={"name"} header={"Name"}/>
                <Column field={"sex"} header={"Sex"}/>
            </DataTable>
        </div>
    )
}