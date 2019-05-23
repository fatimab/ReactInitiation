import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default class Create extends React.Component{

    constructor(props){
        super(props)
        this.state = {personName: '', personAge:0}
    }

    onSubmit = ( (event) => {
    event.preventDefault()
    console.log(event)
  })

    render(){
        return(
            <div>
                <h1>Create a new person</h1>
                <form onSubmit={this.onSubmit}>
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