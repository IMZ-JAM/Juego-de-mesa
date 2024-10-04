function mostrarCarta(categoria) {
    const cartas = {
      ana  : ['assets/Analisis/Frame 1.png', 'assets/Analisis/Frame 2.png', 'assets/Analisis/Frame 3.png', 'assets/Analisis/Frame 4.png', 'assets/Analisis/Frame 5.png' ],
      flex : ['assets/FlexMental/Frame 1.png', 'assets/FlexMental/Frame 2.png', 'assets/FlexMental/Frame 3.png', 'assets/FlexMental/Frame 4.png', 'assets/FlexMental/Frame 5.png' ],
      mem  : ['assets/Memoria/Frame 1.png', 'assets/Memoria/Frame 2.png', 'assets/Memoria/Frame 3.png', 'assets/Memoria/Frame 4.png', 'assets/Memoria/Frame 5.png' ],
      cre  : ['assets/Creatividad/Frame 1.png', 'assets/Creatividad/Frame 2.png', 'assets/Creatividad/Frame 3.png', 'assets/Creatividad/Frame 4.png', 'assets/Creatividad/Frame 5.png' ],
      ima  : ['assets/Imaginacion/Frame 1.png', 'assets/Imaginacion/Frame 2.png', 'assets/Imaginacion/Frame 3.png', 'assets/Imaginacion/Frame 4.png', 'assets/Imaginacion/Frame 5.png' ],
      log  : ['assets/Logica/Frame 1.png', 'assets/Logica/Frame 2.png', 'assets/Logica/Frame 3.png', 'assets/Logica/Frame 4.png', 'assets/Logica/Frame 5.png' ],
      rel  : ['assets/Relacional/Frame 1.png', 'assets/Relacional/Frame 2.png', 'assets/Relacional/Frame 3.png', 'assets/Relacional/Frame 4.png', 'assets/Relacional/Frame 5.png' ],
      com  : ['assets/Comparacion/Frame 1.png', 'assets/Comparacion/Frame 2.png', 'assets/Comparacion/Frame 3.png', 'assets/Comparacion/Frame 4.png', 'assets/Comparacion/Frame 5.png' ]
    };
    
    const bienvenida = document.querySelector('#bienvenida');
    bienvenida.innerHTML = '';
    // Seleccionar aleatoriamente una carta de la categoría elegida
    const cartasCategoria = cartas[categoria];
    const cartaAleatoria = cartasCategoria[Math.floor(Math.random() * cartasCategoria.length)];
    
    // Mostrar la carta en el overlay
    const imgCarta = document.getElementById('carta');
    imgCarta.src = cartaAleatoria;
    document.getElementById('overlay').style.display = 'flex';
  }

  // Función para ocultar la carta
  function ocultarCarta() {
    document.getElementById('overlay').style.display = 'none';
  }

  // Asignar eventos de clic a cada botón
  document.getElementById('btnAna').addEventListener('click', () => mostrarCarta('ana'));
  document.getElementById('btnFlex').addEventListener('click', () => mostrarCarta('flex'));
  document.getElementById('btnMem').addEventListener('click', () => mostrarCarta('mem'));
  document.getElementById('btnCre').addEventListener('click', () => mostrarCarta('cre'));
  document.getElementById('btnIma').addEventListener('click', () => mostrarCarta('ima'));
  document.getElementById('btnLog').addEventListener('click', () => mostrarCarta('log'));
  document.getElementById('btnRel').addEventListener('click', () => mostrarCarta('rel'));
  document.getElementById('btnCom').addEventListener('click', () => mostrarCarta('com'));
  document.getElementById('overlay').addEventListener('click', () => ocultarCarta());