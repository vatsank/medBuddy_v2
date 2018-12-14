class Hospital {

    constructor(id, name, phone) {

        this.id = id;
        this._name = name;
        this._phone = phone;
    }

    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name.toUpperCase();
    }
    toString() {
        return this.id + '-' + this.name;
    }

    set phone(phone) {

        this._phone = phone;

    }
    get phone() {
        return 108;
    }
}

module.exports = Hospital;