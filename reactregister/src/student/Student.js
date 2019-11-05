class Student {
    
    constructor(carnet, name, lastname, late, horario) {
        this._carnet = carnet;
        this._name = name;
        this._lastname = lastname;
        this._late = late;
        this._horario = horario;
    }

    get carnet() { return this._carnet }
    get name() { return this._name }
    get lastname() { return this._lastname }
    get late() { return this._late }
    get horario() { return this._horario }

    // Hacen falta las validaciones antes de la asignación
    set carnet(carnet) { this._carnet = carnet }
    set name(name) { this._name = name }
    set lastname(lastname) { this._lastname = lastname }
    set late(late) { this._late = late }
    set horario(horario) { this._horario = horario }
}

export default Student;