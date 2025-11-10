// Funcionalidades específicas para la página del armario
document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo para artistas, marcas y diseñadores
    const artistas = [
        { id: 1, nombre: "Bad Bunny", imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 0.5 },
        { id: 2, nombre: "Rosalía", imagen: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 0.7 },
        { id: 3, nombre: "J Balvin", imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 0.6 },
        { id: 4, nombre: "Karol G", imagen: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 0.8 },
        { id: 5, nombre: "Travis Scott", imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 1.0 },
        { id: 6, nombre: "Billie Eilish", imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 0.9 },
        { id: 7, nombre: "Dua Lipa", imagen: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 0.8 },
        { id: 8, nombre: "The Weeknd", imagen: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 1.2 },
        { id: 9, nombre: "Drake", imagen: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 1.5 },
        { id: 10, nombre: "Rihanna", imagen: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 2.0 }
    ];
    
    const marcas = [
        { id: 1, nombre: "Nike", imagen: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-1971-presente.jpg", precio: 1.0 },
        { id: 2, nombre: "Adidas", imagen: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo-1971-presente.jpg", precio: 0.8 },
        { id: 3, nombre: "Puma", imagen: "https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-1967-presente.jpg", precio: 0.7 },
        { id: 4, nombre: "Vans", imagen: "https://logos-world.net/wp-content/uploads/2020/04/Vans-Logo-1966-presente.jpg", precio: 0.6 },
        { id: 5, nombre: "Supreme", imagen: "https://logos-world.net/wp-content/uploads/2020/04/Supreme-Logo-1994-presente.jpg", precio: 2.0 },
        { id: 6, nombre: "Gucci", imagen: "https://logos-world.net/wp-content/uploads/2020/04/Gucci-Logo-2013-presente.jpg", precio: 3.0 },
        { id: 7, nombre: "Balenciaga", imagen: "https://logos-world.net/wp-content/uploads/2020/04/Balenciaga-Logo-2018-presente.jpg", precio: 2.5 },
        { id: 8, nombre: "Off-White", imagen: "https://logos-world.net/wp-content/uploads/2020/04/Off-White-Logo-2012-presente.jpg", precio: 2.2 },
        { id: 9, nombre: "Champion", imagen: "https://logos-world.net/wp-content/uploads/2020/04/Champion-Logo-1974-presente.jpg", precio: 0.9 },
        { id: 10, nombre: "Stüssy", imagen: "https://logos-world.net/wp-content/uploads/2020/04/Stussy-Logo-1980-presente.jpg", precio: 1.1 }
    ];

    const disenadores = [
        { id: 1, nombre: "Alex Designer", imagen: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 1.5 },
        { id: 2, nombre: "Maria Creativa", imagen: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 1.2 },
        { id: 3, nombre: "Carlos Estilo", imagen: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 1.8 },
        { id: 4, nombre: "Laura Moda", imagen: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 1.3 },
        { id: 5, nombre: "David Innovación", imagen: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", precio: 2.0 }
    ];
    
    // Inicializar modales de búsqueda
    function inicializarModalesBusqueda() {
        // Configuración para artistas, marcas y diseñadores
        const configModales = [
            { tipo: 'artista', modalId: 'modalArtistas', btnId: 'btnBuscarArtista', contenedorId: 'artistaSeleccionado', listaId: 'listaArtistas', busquedaId: 'busquedaArtista', datos: artistas },
            { tipo: 'marca', modalId: 'modalMarcas', btnId: 'btnBuscarMarca', listaId: 'listaMarcas', busquedaId: 'busquedaMarca', datos: marcas },
            { tipo: 'disenador', modalId: 'modalDisenadores', btnId: 'btnBuscarDisenador', listaId: 'listaDisenadores', busquedaId: 'busquedaDisenador', datos: disenadores }
        ];

        // Inicializar cada modal
        configModales.forEach(config => {
            const btnAbrir = document.getElementById(config.btnId);
            const modal = document.getElementById(config.modalId);
            
            if (btnAbrir && modal) {
                btnAbrir.addEventListener('click', function() {
                    modal.style.display = 'block';
                    const datos = config.datos;
                    cargarListaOpciones(datos, document.getElementById(config.listaId), config.tipo);
                });
            }
        });

        // Cerrar modales al hacer clic fuera
        window.addEventListener('click', function(event) {
            configModales.forEach(config => {
                const modal = document.getElementById(config.modalId);
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    }

    // Cargar lista de opciones en los modales (función genérica)
    function cargarListaOpciones(opciones, contenedor, tipo) {
        if (!contenedor) return;
        
        contenedor.innerHTML = '';
        
        // Opción "Ninguno"
        const opcionNinguno = document.createElement('div');
        opcionNinguno.className = 'opcion-colaboracion';
        opcionNinguno.innerHTML = `
            <div class="info-colaboracion-modal">
                <div class="imagen-colaboracion" style="background-color: #f0f0f0;"></div>
                <div class="detalles-colaboracion">
                    <h4>Ninguno</h4>
                    <p>Sin colaboración</p>
                </div>
            </div>
            <div class="precio-colaboracion">+0€</div>
        `;
        opcionNinguno.addEventListener('click', function() {
            seleccionarOpcion(null, tipo);
            document.getElementById(`modal${tipo.charAt(0).toUpperCase() + tipo.slice(1)}s`).style.display = 'none';
        });
        contenedor.appendChild(opcionNinguno);
        
        // Lista de opciones
        opciones.forEach(opcion => {
            const elemento = document.createElement('div');
            elemento.className = 'opcion-colaboracion';
            elemento.innerHTML = `
                <div class="info-colaboracion-modal">
                    <div class="imagen-colaboracion" style="background-image: url('${opcion.imagen}')"></div>
                    <div class="detalles-colaboracion">
                        <h4>${opcion.nombre}</h4>
                        <p>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</p>
                    </div>
                </div>
                <div class="precio-colaboracion">+${opcion.precio}€</div>
            `;
            elemento.addEventListener('click', function() {
                seleccionarOpcion(opcion, tipo);
                document.getElementById(`modal${tipo.charAt(0).toUpperCase() + tipo.slice(1)}s`).style.display = 'none';
            });
            contenedor.appendChild(elemento);
        });
    }

    // Seleccionar una opción (artista, marca o diseñador)
    function seleccionarOpcion(opcion, tipo) {
        const contenedor = document.getElementById(`${tipo}Seleccionado`);
        if (!contenedor) return;
        
        if (opcion) {
            contenedor.innerHTML = `
                <div class="info-colaboracion">
                    <div class="imagen-colaboracion" style="background-image: url('${opcion.imagen}')"></div>
                    <div class="detalles-colaboracion">
                        <h4>${opcion.nombre}</h4>
                        <p>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</p>
                    </div>
                </div>
                <div class="precio-colaboracion">+${opcion.precio}€</div>
                <button type="button" class="btn-buscar" id="btnBuscar${tipo.charAt(0).toUpperCase() + tipo.slice(1)}">+</button>
            `;
            
            // Reasignar evento al botón
            document.getElementById(`btnBuscar${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`).addEventListener('click', function() {
                document.getElementById(`modal${tipo.charAt(0).toUpperCase() + tipo.slice(1)}s`).style.display = 'block';
                const datos = tipo === 'artista' ? artistas : (tipo === 'marca' ? marcas : disenadores);
                cargarListaOpciones(datos, document.getElementById(`lista${tipo.charAt(0).toUpperCase() + tipo.slice(1)}s`), tipo);
            });
        } else {
            contenedor.innerHTML = `
                <span>Ninguno</span>
                <button type="button" class="btn-buscar" id="btnBuscar${tipo.charAt(0).toUpperCase() + tipo.slice(1)}">+</button>
            `;
            
            // Reasignar evento al botón
            document.getElementById(`btnBuscar${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`).addEventListener('click', function() {
                document.getElementById(`modal${tipo.charAt(0).toUpperCase() + tipo.slice(1)}s`).style.display = 'block';
                const datos = tipo === 'artista' ? artistas : (tipo === 'marca' ? marcas : disenadores);
                cargarListaOpciones(datos, document.getElementById(`lista${tipo.charAt(0).toUpperCase() + tipo.slice(1)}s`), tipo);
            });
        }
        
        actualizarPrecioTotal();
    }
    
    // Actualizar precio total
    function actualizarPrecioTotal() {
        const precioBase = parseFloat(document.getElementById('valorPrecio').value);
        let precioExtra = 0;
        
        // Verificar si hay artista seleccionado
        const artistaSeleccionado = document.querySelector('#artistaSeleccionado .precio-colaboracion');
        if (artistaSeleccionado) {
            const textoPrecio = artistaSeleccionado.textContent;
            const match = textoPrecio.match(/\+(\d+\.?\d*)€/);
            if (match) {
                precioExtra += parseFloat(match[1]);
            }
        }
        
        // Verificar si hay marca seleccionada
        const marcaSeleccionada = document.querySelector('#marcaSeleccionada .precio-colaboracion');
        if (marcaSeleccionada) {
            const textoPrecio = marcaSeleccionada.textContent;
            const match = textoPrecio.match(/\+(\d+\.?\d*)€/);
            if (match) {
                precioExtra += parseFloat(match[1]);
            }
        }

        // Verificar si hay diseñador seleccionado
        const disenadorSeleccionado = document.querySelector('#disenadorSeleccionado .precio-colaboracion');
        if (disenadorSeleccionado) {
            const textoPrecio = disenadorSeleccionado.textContent;
            const match = textoPrecio.match(/\+(\d+\.?\d*)€/);
            if (match) {
                precioExtra += parseFloat(match[1]);
            }
        }
        
        const precioTotal = precioBase + precioExtra;
        document.getElementById('muestraprecio').value = precioTotal.toFixed(2).replace('.', ',');
    }
    
    // Control del modal de creación de prenda
    const modalPrenda = document.getElementById('modalPrenda');
    const btnAbrirModal = document.getElementById('abrirModalPrenda');
    const btnCerrarModal = document.getElementById('cerrarModalPrenda');
    const btnCancelar = document.getElementById('cancelarPrenda');
    
    if (btnAbrirModal && modalPrenda) {
        // Abrir modal
        btnAbrirModal.addEventListener('click', function() {
            modalPrenda.style.display = 'block';
        });
        
        // Cerrar modal
        function cerrarModal() {
            modalPrenda.style.display = 'none';
        }
        
        if (btnCerrarModal) btnCerrarModal.addEventListener('click', cerrarModal);
        if (btnCancelar) btnCancelar.addEventListener('click', cerrarModal);
        
        // Cerrar al hacer clic fuera del modal
        window.addEventListener('click', function(event) {
            if (event.target === modalPrenda) {
                cerrarModal();
            }
        });
    }
    
    // Configuración de personalización de prenda
    const configuracionColores = [
        { selectorId: 'selectorColor1' },
        { selectorId: 'selectorColor2' },
        { selectorId: 'selectorColor3' },
        { selectorId: 'selectorColor4' }
    ];
    
    // Función para actualizar el degradado de fondo
    function actualizarDegradado() {
        const visualizadorPrenda = document.getElementById('visualizadorPrenda');
        if (!visualizadorPrenda) return;
        
        const color1 = document.getElementById('selectorColor1').value;
        const color2 = document.getElementById('selectorColor2').value;
        const color3 = document.getElementById('selectorColor3').value;
        const color4 = document.getElementById('selectorColor4').value;
        
        visualizadorPrenda.style.background = 
            `linear-gradient(45deg, ${color1} 0%, ${color2} 33%, ${color3} 66%, ${color4} 100%)`;
    }
    
    // Función para actualizar el texto
    function actualizarTexto() {
        const textoArtista = document.getElementById('textoArtista');
        const textoPrenda = document.getElementById('textoPrenda');
        
        if (!textoArtista || !textoPrenda) return;
        
        // Actualizar tipografía
        const tipografia = document.getElementById('selectorTipografia').value;
        textoArtista.style.fontFamily = tipografia;
        textoPrenda.style.fontFamily = tipografia;

        // Actualizar color del texto
        const colorTexto = document.getElementById('selectorColorTexto').value;
        textoArtista.style.color = colorTexto;
        textoPrenda.style.color = colorTexto;

        // Actualizar tamaño del texto
        const tamanio = document.getElementById('controlTamanioTexto').value + 'px';
        textoArtista.style.fontSize = tamanio;
        document.getElementById('valorTamanioTexto').textContent = tamanio;

        // El texto de la prenda será un poco más pequeño
        const tamanioPrenda = (document.getElementById('controlTamanioTexto').value * 0.75) + 'px';
        textoPrenda.style.fontSize = tamanioPrenda;
    }
    
    // Control de precio con deslizador
    const controlDeslizantePrecio = document.getElementById('valorPrecio');
    const inputPrecio = document.getElementById('muestraprecio');
    
    if (controlDeslizantePrecio && inputPrecio) {
        controlDeslizantePrecio.addEventListener('input', (e) => {
            const valor = parseFloat(e.target.value).toFixed(2);
            inputPrecio.value = valor.replace('.', ',');
            actualizarPrecioTotal();
        });
    }
    
    // Gestión de imágenes
    document.querySelectorAll('.espacio-imagen').forEach(espacio => {
        const input = espacio.querySelector('input[type="file"]');
        
        espacio.addEventListener('click', () => {
            if (input) input.click();
        });
        
        if (input) {
            input.addEventListener('change', (e) => {
                if (e.target.files && e.target.files[0]) {
                    const lector = new FileReader();
                    lector.onload = (e) => {
                        espacio.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`;
                    };
                    lector.readAsDataURL(e.target.files[0]);
                }
            });
        }
    });
    
    // Selector de tipo de prenda
    const selectorCategoria = document.getElementById('selectorCategoria');
    const selectorTipoPrenda = document.getElementById('selectorTipoPrenda');
    const vistaPrenda = document.getElementById('vistaPrenda');
    
    // Configuración de tipos de prenda por categoría
    const tiposPrenda = {
        cabeza: [
            { id: 'gorra', nombre: 'Gorra', svg: 'gorra' },
            { id: 'sombrero', nombre: 'Sombrero', svg: 'sombrero' },
            { id: 'vincha', nombre: 'Vincha', svg: 'vincha' },
            { id: 'bandana', nombre: 'Bandana', svg: 'bandana' }
        ],
        cuerpo: [
            { id: 'camiseta', nombre: 'Camiseta', svg: 'camiseta' },
            { id: 'sudadera', nombre: 'Sudadera', svg: 'sudadera' },
            { id: 'hoodie', nombre: 'Hoodie', svg: 'hoodie' },
            { id: 'chaqueta', nombre: 'Chaqueta', svg: 'chaqueta' }
        ],
        piernas: [
            { id: 'pantalon', nombre: 'Pantalón', svg: 'pantalon' },
            { id: 'shorts', nombre: 'Shorts', svg: 'shorts' },
            { id: 'falda', nombre: 'Falda', svg: 'falda' },
            { id: 'leggings', nombre: 'Leggings', svg: 'leggings' }
        ],
        pies: [
            { id: 'zapatillas', nombre: 'Zapatillas', svg: 'zapatillas' },
            { id: 'botas', nombre: 'Botas', svg: 'botas' },
            { id: 'sandalias', nombre: 'Sandalias', svg: 'sandalias' },
            { id: 'zapatos', nombre: 'Zapatos', svg: 'zapatos' }
        ]
    };
    
    // SVG para cada tipo de prenda
    const svgPrendas = {
        gorra: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80"><ellipse cx="50" cy="30" rx="40" ry="25" fill="white" stroke="#ccc" stroke-width="1"/><rect x="10" y="30" width="80" height="20" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        sombrero: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 70"><ellipse cx="50" cy="20" rx="45" ry="15" fill="white" stroke="#ccc" stroke-width="1"/><path d="M30,20 L30,50 C30,55 40,60 50,60 C60,60 70,55 70,50 L70,20 Z" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        vincha: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40"><rect x="20" y="15" width="60" height="10" rx="5" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        bandana: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><path d="M20,10 C30,5 70,5 80,10 L85,40 C85,45 70,50 50,50 C30,50 15,45 15,40 Z" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        camiseta: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><path d="M30,20 C40,10 60,10 70,20 L80,40 C80,50 85,55 90,60 L90,100 C90,110 80,115 70,110 L30,110 C20,115 10,110 10,100 L10,60 C15,55 20,50 20,40 Z" fill="white" stroke="#ccc" stroke-width="2"/></svg>',
        sudadera: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 140"><path d="M30,30 C40,20 60,20 70,30 L75,50 C80,60 85,65 90,70 L90,120 C90,130 80,135 70,130 L30,130 C20,135 10,130 10,120 L10,70 C15,65 20,60 25,50 Z" fill="white" stroke="#ccc" stroke-width="2"/><rect x="35" y="30" width="30" height="15" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        hoodie: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 140"><path d="M30,30 C40,20 60,20 70,30 L75,50 C80,60 85,65 90,70 L90,120 C90,130 80,135 70,130 L30,130 C20,135 10,130 10,120 L10,70 C15,65 20,60 25,50 Z" fill="white" stroke="#ccc" stroke-width="2"/><path d="M35,30 L35,20 C35,15 40,10 45,10 L55,10 C60,10 65,15 65,20 L65,30" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        chaqueta: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 140"><path d="M30,20 C40,10 60,10 70,20 L75,40 C80,50 85,55 90,60 L90,120 C90,130 80,135 70,130 L30,130 C20,135 10,130 10,120 L10,60 C15,55 20,50 25,40 Z" fill="white" stroke="#ccc" stroke-width="2"/><rect x="40" y="20" width="20" height="80" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        pantalon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><path d="M30,10 L70,10 L75,60 C75,70 70,80 60,85 L40,85 C30,80 25,70 25,60 Z" fill="white" stroke="#ccc" stroke-width="1"/><rect x="30" y="85" width="15" height="35" fill="white" stroke="#ccc" stroke-width="1"/><rect x="55" y="85" width="15" height="35" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        shorts: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80"><path d="M30,10 L70,10 L75,40 C75,50 70,55 60,60 L40,60 C30,55 25,50 25,40 Z" fill="white" stroke="#ccc" stroke-width="1"/><rect x="30" y="60" width="15" height="20" fill="white" stroke="#ccc" stroke-width="1"/><rect x="55" y="60" width="15" height="20" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        falda: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30,20 L70,20 L80,80 C80,90 70,95 50,95 C30,95 20,90 20,80 Z" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        leggings: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect x="25" y="10" width="20" height="110" rx="5" fill="white" stroke="#ccc" stroke-width="1"/><rect x="55" y="10" width="20" height="110" rx="5" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        zapatillas: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><path d="M20,10 L80,10 C85,15 90,25 85,35 L80,50 C75,55 25,55 20,50 L15,35 C10,25 15,15 20,10 Z" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        botas: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80"><path d="M20,10 L80,10 C85,15 90,25 85,35 L80,70 C75,75 25,75 20,70 L15,35 C10,25 15,15 20,10 Z" fill="white" stroke="#ccc" stroke-width="1"/><rect x="20" y="70" width="60" height="10" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        sandalias: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40"><path d="M20,10 L80,10 C85,15 90,25 85,30 L80,35 C75,40 25,40 20,35 L15,30 C10,25 15,15 20,10 Z" fill="white" stroke="#ccc" stroke-width="1"/><rect x="40" y="35" width="20" height="5" fill="white" stroke="#ccc" stroke-width="1"/></svg>',
        zapatos: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50"><path d="M20,10 L80,10 C85,15 90,25 85,30 L80,40 C75,45 25,45 20,40 L15,30 C10,25 15,15 20,10 Z" fill="white" stroke="#ccc" stroke-width="1"/></svg>'
    };
    
    // Cambiar categoría
    if (selectorCategoria) {
        selectorCategoria.addEventListener('change', function() {
            const categoria = this.value;
            actualizarOpcionesPrenda(categoria);
        });
    }
    
    // Cambiar tipo de prenda
    if (selectorTipoPrenda) {
        selectorTipoPrenda.addEventListener('change', function() {
            const tipo = this.value;
            actualizarVistaPrenda(tipo);
        });
    }
    
    // Actualizar opciones de prenda según la categoría
    function actualizarOpcionesPrenda(categoria) {
        if (!selectorTipoPrenda) return;
        
        selectorTipoPrenda.innerHTML = '';
        const opciones = tiposPrenda[categoria] || [];
        
        opciones.forEach(opcion => {
            const option = document.createElement('option');
            option.value = opcion.id;
            option.textContent = opcion.nombre;
            selectorTipoPrenda.appendChild(option);
        });
        
        // Actualizar vista con el primer tipo de la categoría
        if (opciones.length > 0) {
            actualizarVistaPrenda(opciones[0].id);
        }
    }
    
    // Actualizar vista de la prenda
    function actualizarVistaPrenda(tipo) {
        if (!vistaPrenda) return;
        
        // Cambiar SVG
        const svg = svgPrendas[tipo];
        if (svg) {
            vistaPrenda.style.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`;
        }
    }
    
    // Selector de tipografía
    const selectorTipografia = document.getElementById('selectorTipografia');
    
    if (selectorTipografia) {
        selectorTipografia.addEventListener('change', function() {
            actualizarTexto();
        });
    }
    
    // Inicializar modales de búsqueda
    inicializarModalesBusqueda();
    
    // Inicializar categoría por defecto
    if (selectorCategoria) {
        actualizarOpcionesPrenda(selectorCategoria.value);
    }
    
    // Inicializar controles de color
    configuracionColores.forEach(config => {
        const selector = document.getElementById(config.selectorId);
        if (selector) {
            selector.addEventListener('input', actualizarDegradado);
        }
    });
    
    // Inicializar controles de texto
    const selectorColorTexto = document.getElementById('selectorColorTexto');
    const controlTamanioTexto = document.getElementById('controlTamanioTexto');
    
    if (selectorColorTexto) selectorColorTexto.addEventListener('input', actualizarTexto);
    if (controlTamanioTexto) controlTamanioTexto.addEventListener('input', actualizarTexto);
    
    // Inicializar nombres de artista y prenda
    const nombreArtista = document.getElementById('nombreArtista');
    const nombrePrenda = document.getElementById('nombrePrenda');
    const textoArtista = document.getElementById('textoArtista');
    const textoPrenda = document.getElementById('textoPrenda');
    
    if (nombreArtista && textoArtista) {
        nombreArtista.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                textoArtista.textContent = this.value;
            } else {
                textoArtista.textContent = 'ARKAS';
            }
        });
    }
    
    if (nombrePrenda && textoPrenda) {
        nombrePrenda.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                textoPrenda.textContent = this.value;
            } else {
                textoPrenda.textContent = 'Edición Especial 2026';
            }
        });
    }
    
    // Aplicar valores iniciales
    actualizarDegradado();
    actualizarTexto();
    actualizarPrecioTotal();
});