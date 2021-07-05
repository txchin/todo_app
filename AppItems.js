import { render } from '@testing-library/react';
import React from 'react';


class AppItems extends React.Component{

    render(){

        var items = this.props.items;
        var search = this.props.search;

        if(search.length > 0){
            items = items.filter((item) => {
                return item.toLowerCase().match(search);
            });
        }

        var tableHeader = 
        <tr className="tableHead">
            <th className="taskNumber">#</th>
            <th className="taskItem">Task</th>
            <th className="(X)">X</th>
        </tr>

        if(items.length == 0){
            tableHeader = '';
        }

        var list = items.map((item, index) => {
            return <tr>
                <td className="taskNumber">Task {index + 1}</td>
                <td className="taskItem" key={index}>{item}</td>
                <td>
                    <button className="remove" onClick={this.props.deleteItems.bind(this, index)}>X</button>
                </td>
            </tr>
        });

        return(
            <table className="taskTable">
                {tableHeader}
                {list}
            </table>
        );
    }

}

export default AppItems