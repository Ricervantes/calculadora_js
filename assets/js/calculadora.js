class Calculadora {
    constructor( num1, num2) {

        this.num1 = num1;
        this.num2 = num2;

    }
    sumar() {
        return this.num1 + this.num2;
    }
    restar() {
        return this.num1 - this.num2;
    }
    multiplicar() {
        return this.num1 * this.num2;
    }
    dividr() {
        if (this.num2 == 0) {
            return "no se puede dividir entre 0";
        }
        return this.num1 / this.num2;
    }

}