const categorias = [
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

const contendor_categorias = document.getElementById('contenedor-categorias-index');

contendor_categorias.innerHTML = categorias
    .filter(c => c.enPrincipal)
    .map(c =>
        `
        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12 columna-categoria-local">
          <button class="btn  w-100">${c.nombre}</button>
        </div>
    `)
    .join("");
    


console.log(contendor_categorias);
