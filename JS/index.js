if ((!sessionStorage.getItem('vioHeroPage')) || (sessionStorage.getItem('vioHeroPage')==='false')) {
    sessionStorage.setItem('vioHeroPage', 'false');
    window.location.href = "./Paginas/heroPage.html"
}



const categorias_array = [
    { id: 1, nombre: "Ofertas", enPrincipal: true },
    { id: 2, nombre: "Cocina", enPrincipal: true },
    { id: 3, nombre: "Comunicación", enPrincipal: true },
    { id: 4, nombre: "Entretenimiento", enPrincipal: true },
    { id: 5, nombre: "Televisores", enPrincipal: true },
    { id: 6, nombre: "Lavado", enPrincipal: false },
    { id: 7, nombre: "Refrigeración", enPrincipal: false },
    { id: 8, nombre: "Climatización", enPrincipal: false },
    { id: 9, nombre: "Pequeños Electrodomésticos", enPrincipal: false },
    { id: 10, nombre: "Audio y Sonido", enPrincipal: false },
    { id: 11, nombre: "Informática", enPrincipal: false },
    { id: 12, nombre: "Hogar Inteligente", enPrincipal: false },
    { id: 13, nombre: "Cuidado Personal", enPrincipal: true },
    { id: 14, nombre: "Accesorios y Repuestos", enPrincipal: false },
    { id: 15, nombre: "Outlet", enPrincipal: false }
];

if (!localStorage.getItem('categorias')) {
    localStorage.setItem('categorias', JSON.stringify(categorias_array));
    categorias = categorias_array;
}
else {
    categorias = JSON.parse(localStorage.getItem('categorias'));
}

const productos_array = [
    {
        id: 1,
        nombre: "Lavadora LG TurboWash",
        detalle: "Lavadora de carga frontal con tecnología TurboWash",
        marca: "LG",
        categorias: ["Lavado"],
        precio: 23999.99,
        cantidad: 10,
        imagenPrincipal: "https://picsum.photos/800/400?random=4"
    },
    {
        id: 2,
        nombre: "Heladera Whirlpool No Frost",
        detalle: "Heladera con tecnología No Frost y capacidad XXL",
        marca: "Whirlpool",
        categorias: ["Refrigeración"],
        precio: 29999.99,
        cantidad: 5,
        imagenPrincipal: "https://picsum.photos/800/400?random=5"
    },
    {
        id: 3,
        nombre: "Smart TV Samsung 4K",
        detalle: "Televisor LED 55\" con resolución 4K. Cuenta con Android 11 compatible con muchas aplicaciones.",
        marca: "Samsung",
        categorias: ["Televisores", "Ofertas"],
        precio: 44999.99,
        cantidad: 15,
        imagenPrincipal: "https://picsum.photos/800/400?random=6"
    },
    {
        id: 4,
        nombre: "Cafetera Philips Senseo",
        detalle: "Cafetera de cápsulas con sistema de preparación de café",
        marca: "Philips",
        categorias: ["Cocina"],
        precio: 4499.99,
        cantidad: 8,
        imagenPrincipal: "https://picsum.photos/800/400?random=7"
    },
    {
        id: 5,
        nombre: "Aire Acondicionado Split Carrier",
        detalle: "Aire acondicionado split con tecnología Inverter",
        marca: "Carrier",
        categorias: ["Climatización"],
        precio: 28999.99,
        cantidad: 12,
        imagenPrincipal: "https://picsum.photos/800/400?random=8"
    },
    {
        id: 6,
        nombre: "Aspiradora Dyson V11",
        detalle: "Aspiradora sin cable con potencia de succión potente",
        marca: "Dyson",
        categorias: ["Pequeños Electrodomésticos"],
        precio: 17999.99,
        cantidad: 6,
        imagenPrincipal: "https://picsum.photos/800/400?random=9"
    },
    {
        id: 7,
        nombre: "Barra de Sonido Sony",
        detalle: "Barra de sonido con subwoofer inalámbrico",
        marca: "Sony",
        categorias: ["Audio y Sonido"],
        precio: 8999.99,
        cantidad: 9,
        imagenPrincipal: "https://picsum.photos/800/400?random=10"
    },
    {
        id: 8,
        nombre: "Laptop Lenovo Ideapad",
        detalle: "Laptop con procesador Intel Core i7 y pantalla Full HD",
        marca: "Lenovo",
        categorias: ["Informática"],
        precio: 54999.99,
        cantidad: 7,
        imagenPrincipal: "https://picsum.photos/800/400?random=11"
    },
    {
        id: 9,
        nombre: "Robot Aspirador Xiaomi Mi Robot",
        detalle: "Robot aspirador inteligente con navegación láser",
        marca: "Xiaomi",
        categorias: ["Hogar Inteligente"],
        precio: 14999.99,
        cantidad: 4,
        imagenPrincipal: "https://picsum.photos/800/400?random=12"
    },
    {
        id: 10,
        nombre: "Secador de Pelo Philips Pro",
        detalle: "Secador de pelo profesional con tecnología iónica",
        marca: "Philips",
        categorias: ["Cuidado Personal"],
        precio: 3999.99,
        cantidad: 11,
        imagenPrincipal: "https://picsum.photos/800/400?random=13"
    },
    {
        id: 11,
        nombre: "Licuadora Osterizer",
        detalle: "Licuadora con vaso de vidrio y cuchillas de acero inoxidable",
        marca: "Oster",
        categorias: ["Cocina"],
        precio: 2599.99,
        cantidad: 14,
        imagenPrincipal: "https://picsum.photos/800/400?random=14"
    },
    {
        id: 12,
        nombre: "Router TP-Link WiFi 6",
        detalle: "Router con tecnología WiFi 6 para velocidades ultra rápidas",
        marca: "TP-Link",
        categorias: ["Informática"],
        precio: 3499.99,
        cantidad: 9,
        imagenPrincipal: "https://picsum.photos/800/400?random=15"
    },
    {
        id: 13,
        nombre: "Frigobar Mabe",
        detalle: "Frigobar compacto con congelador integrado",
        marca: "Mabe",
        categorias: ["Refrigeración"],
        precio: 7999.99,
        cantidad: 6,
        imagenPrincipal: "https://picsum.photos/800/400?random=16"
    },
    {
        id: 14,
        nombre: "Cámara de Seguridad Xiaomi",
        detalle: "Cámara IP de seguridad para interiores con visión nocturna",
        marca: "Xiaomi",
        categorias: ["Hogar Inteligente"],
        precio: 2499.99,
        cantidad: 8,
        imagenPrincipal: "https://picsum.photos/800/400?random=17"
    },
    {
        id: 15,
        nombre: "Smartwatch Samsung Galaxy",
        detalle: "Smartwatch con monitor de ritmo cardíaco y GPS integrado",
        marca: "Samsung",
        categorias: ["Accesorios y Repuestos"],
        precio: 6999.99,
        cantidad: 10,
        imagenPrincipal: "https://picsum.photos/800/400?random=18"
    },
    {
        id: 16,
        nombre: "Proyector Epson Home Cinema",
        detalle: "Proyector Full HD con tecnología 3LCD",
        marca: "Epson",
        categorias: ["Entretenimiento"],
        precio: 38999.99,
        cantidad: 5,
        imagenPrincipal: "https://picsum.photos/800/400?random=19"
    },
    {
        id: 17,
        nombre: "Plancha Philips SteamGlide",
        detalle: "Plancha a vapor con suela SteamGlide para un deslizamiento suave",
        marca: "Philips",
        categorias: ["Cuidado Personal"],
        precio: 1999.99,
        cantidad: 12,
        imagenPrincipal: "https://picsum.photos/800/400?random=20"
    },
    {
        id: 18,
        nombre: "Batidora Kenwood Chef",
        detalle: "Batidora de pedestal con múltiples accesorios para repostería",
        marca: "Kenwood",
        categorias: ["Cocina"],
        precio: 12999.99,
        cantidad: 7,
        imagenPrincipal: "https://picsum.photos/800/400?random=21"
    },
    {
        id: 19,
        nombre: "Teléfono Inalámbrico Panasonic",
        detalle: "Teléfono inalámbrico con contestador automático y pantalla LCD",
        marca: "Panasonic",
        categorias: ["Comunicación"],
        precio: 2999.99,
        cantidad: 9,
        imagenPrincipal: "https://picsum.photos/800/400?random=22"
    },
    {
        id: 20,
        nombre: "Robot de Cocina Moulinex",
        detalle: "Robot de cocina multifunción con programas automáticos",
        marca: "Moulinex",
        categorias: ["Cocina"],
        precio: 17999.99,
        cantidad: 6,
        imagenPrincipal: "https://picsum.photos/800/400?random=23"
    }
];

if (!localStorage.getItem('productos')) {
    localStorage.setItem('productos', JSON.stringify(productos_array));
    productos = productos_array;
}
else {
    productos = JSON.parse(localStorage.getItem('productos'));
}



const contendor_categorias = document.getElementById('contenedor-categorias-index');
const contenedor_productos = document.getElementById('row-productos-index');

contendor_categorias.innerHTML = categorias
.filter(c => c.enPrincipal)
.map(c =>
        `
        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12 columna-categoria-local">
          <button class="btn  w-100">${c.nombre}</button>
        </div>
    `)
    .join("");
    
    
 contenedor_productos.innerHTML = productos.map(p =>
        `
        <div class="card m-3 card-local contenedor-producto-local" style="width: 18rem;">
        <img src=${p.imagenPrincipal} class="card-img-top img-card-producto" alt="imagenProducto">
        <div class="card-body">
        <h5 class="card-text text-truncate w-100 titulo-producto">${p.nombre}</h5>
        <p class="card-text text-truncate-local">${p.detalle}.</p>
        <h6 class="card-title w-100 text-center fw-bold fs-5 text p-2 mb-3 border-bottom-local align-h6 precio-producto">$ ${p.precio}</h6>
        <div class="d-flex w-100 justify-content-evenly">
        <a class="btn btn-Comprar" id="AgregarAlCarrito">Comprar</a>
        <a href="" class="btn btn-Detalle">Detalles</a>
        </div>
        </div>
        </div>
        </div>
        `
    ).join("");
    
    
    