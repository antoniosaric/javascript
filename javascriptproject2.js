function Weather(cityName, description){
  this.cityName = cityName;
  this.description = description;
  this._description = '';
}

Object.defineProperty(Weather.prototype, 'temperature', {
  get:function(){
    return this._temperature;
  },
  set: function(value){
    console.log(value)
    var kelvin = value;
    var fahrenheit = ((kelvin)*(9/5))-459.67;
    this._temperature = Math.round(fahrenheit*10)/10 + "F";
  }
});