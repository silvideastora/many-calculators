//Cuadrados
function cuadradoPerimetro() {
    let element = document.getElementById("squareSide")
    let ladoCuadrado = parseFloat(element.value)
    let squarePerimeter = ladoCuadrado + ladoCuadrado + ladoCuadrado + ladoCuadrado;
    alert(`Èl perimetro del cuadrado es: ${squarePerimeter}cm`)
}
function cuadradoArea() {
    let element = document.getElementById("squareSide")
    let ladoCuadrado = parseFloat(element.value)
    let squareArea = ladoCuadrado * ladoCuadrado;
    alert(`El área del cuadrado es: ${squareArea}cm`)
}

//Triangulos
function triangulo(side1, side2, base, height){
    let perimetroTriangulo = side1 + side2 + base;
    let areaTriangulo = (base * height) / 2;
}

function triangulo3() {
    let base = document.getElementById("trianguloBase");
    let trianguloBase = parseFloat(base.value)
    let height = document.getElementById("trianguloHeight");
    let trianguloHeight = parseFloat(height.value)

    let triangleArea = (trianguloBase * trianguloHeight)/2;
    alert(`El área del triángulo es: ${triangleArea}cm.`)
}

function triangulo2() {
    let side1 = document.getElementById("trianguloSide1");
    let trianguloSide1 = parseFloat(side1.value)

    let side2 = document.getElementById("trianguloSide2");
    let trianguloSide2 = parseFloat(side2.value)

    let base = document.getElementById("trianguloBase");
    let trianguloBase = parseFloat(base.value)

    let trianglePerimeter = trianguloSide1 + trianguloSide2 + trianguloBase;
    alert(`El perimetro del triángulo es: ${trianglePerimeter}cm.`)

} 


