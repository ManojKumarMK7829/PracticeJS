document.getElementById("radiusOfCircle").innerText = "Radius of Circle";
const pi = 3.14159;

document.getElementById("calculateBtn").addEventListener("click", function() {
    radius = document.getElementById("radiusInput").value;
    circumference = 2 * pi * Number(radius);
    console.log(circumference + "cm");
    document.getElementById("result").innerText = "Circumference: " + circumference + "cm";
}
);