// Object
let car = {
    Brand: "Toyota",
    Variant: "Wigo",
    Transmission: "Automatic",
    Lights: {
        Front: "LED",
        Rear: "LED/Bulb",
        Signal: "Bulb"
    },

    displayBrand(){
        alert(this.Brand);
        // document.writeline(this.Transmission);

    }
}

// Class
class myCar
{
    constructor(brand, variant, transmission)
    {
        this.brand = brand;
        this.variant = variant;
        this.transmission = transmission;
    }
}