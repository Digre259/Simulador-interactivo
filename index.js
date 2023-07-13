// Pedir al usuario que ingrese el monto del préstamo
var montoPrestamo = prompt("Ingrese el monto del préstamo:");

// Convertir el monto del préstamo a número decimal
montoPrestamo = parseFloat(montoPrestamo);

// Pedir al usuario que ingrese la tasa de interés anual
var tasaInteresAnual = prompt("Ingrese la tasa de interés anual (%):");

// Convertir la tasa de interés anual a decimal
tasaInteresAnual = parseFloat(tasaInteresAnual) / 100;

// Pedir al usuario que ingrese el número de cuotas mensuales
var cuotasMensuales = prompt("Ingrese el número de cuotas mensuales:");

// Convertir el número de cuotas mensuales a entero
cuotasMensuales = parseInt(cuotasMensuales);

// Calcular el monto total a pagar
var montoTotal = montoPrestamo * (1 + tasaInteresAnual);

// Calcular el monto de cada cuota mensual
var montoCuota = montoTotal / cuotasMensuales;

// Mostrar los resultados
console.log("Monto del préstamo: $" + montoPrestamo.toFixed(2));
console.log("Tasa de interés anual: " + (tasaInteresAnual * 100) + "%");
console.log("Número de cuotas mensuales: " + cuotasMensuales);
console.log("Monto total a pagar: $" + montoTotal.toFixed(2));
console.log("Monto de cada cuota mensual: $" + montoCuota.toFixed(2));

