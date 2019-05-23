import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default class Create extends React.Component{
    render(){
        return(
            <div>
                <h1>Create a new person</h1>
                <form>
                    <label>Add person name: </label>
                    <input type="text" name="personName"/>
                    <label>Add person's age: </label>
                    <input type="text" name="personAge"/>
                    <input type="submit" name="submitPerson"/>
                </form>
            </div>
        )
    }
}