export function obtenerDiferenciaAnio(year) {
    return new Date().getFullYear() - year;
}


export function calcularMarca(marca) {
    let incremento;

    switch(marca) {
        case 'asiatico':
            incremento = 1.05;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'europeo':
            incremento = 1.30;
            break;
        default:
            break;
    }
    return incremento;
}

export function obtenerPlan(plan){
    return (plan === 'basico') ? 1.20 : 1.5;
}



//capitalizador
export function capitalizar(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}