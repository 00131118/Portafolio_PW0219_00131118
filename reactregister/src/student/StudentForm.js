import React from 'react';
import Student from './Student';

class StudentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { carnet: '', name: '', lastname: '', late: '', horario: '' };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let student = new Student(this.state.carnet, this.state.name, this.state.lastname, this.state.late, this.state.horario);
        this.props.onSave(student);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    renderInput(name, placeholder, type = "text") {
        return (
            <fieldset>
                <label htmlFor={name}>{name}</label>
                <input
                    type={type}
                    name={name} id={name}
                    value={this.state[name]}
                    placeholder= {placeholder}
                    onChange={this.handleInputChange} />
            </fieldset>
        );
    }

    renderSwitch(name, type = "checkbox"){
        return(
            <fieldset>
                <label htmlFor={name}>{name}</label><br/>
                <input
                    type={type}
                    name={name} id={name}
                    value={this.state[name]}
                    onChange={this.handleInputChange} />
            </fieldset>
        );
    }

    renderSelect(name){
        return(
            <fieldset>
                <label htmlFor={name}>{name}</label>
                <br/>
                <select name={name} id={name}>
                    <option>Lunes de 9:00 a 11.00</option>
                    <option>Martes de 13:30 a 15:30</option>
                    <option>Miércoles de 9:00 a 11.00</option>
                    <option>Jueves de 13:30 a 15:30</option>
                    <option>Viernes de 9:00 a 11.00</option>
                    <option>Viernes de 15:30 a 17:30</option>
                </select>
            </fieldset>
        );
    }

    render() {
        return (
            <form id="contact" action="" onSubmit={this.handleSubmit}>
                <h3>Student Form</h3>
                {this.renderInput("carnet","00000000")}
                {this.renderInput("name","Nombre")}
                {this.renderInput("lastname","Apellido")}
                {this.renderSwitch("Llegó tarde?")}
                {this.renderSelect("schedule")}
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default StudentForm;