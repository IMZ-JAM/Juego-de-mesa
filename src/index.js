function mostrarCarta(categoria) {
    const cartas = {
      ana  : ['assets/Analisis/Frame1.png', 'assets/Analisis/Frame2.png', 'assets/Analisis/Frame3.png', 'assets/Analisis/Frame4.png', 'assets/Analisis/Frame5.png' ],
      flex : ['assets/FlexMental/Frame1.png', 'assets/FlexMental/Frame2.png', 'assets/FlexMental/Frame3.png', 'assets/FlexMental/Frame4.png', 'assets/FlexMental/Frame5.png' ],
      mem  : ['assets/Memoria/Frame1.png', 'assets/Memoria/Frame2.png', 'assets/Memoria/Frame3.png', 'assets/Memoria/Frame4.png', 'assets/Memoria/Frame5.png' ],
      cre  : ['assets/Creatividad/Frame1.png', 'assets/Creatividad/Frame2.png', 'assets/Creatividad/Frame3.png', 'assets/Creatividad/Frame4.png', 'assets/Creatividad/Frame5.png' ],
      ima  : ['assets/Imaginacion/Frame1.png', 'assets/Imaginacion/Frame2.png', 'assets/Imaginacion/Frame3.png', 'assets/Imaginacion/Frame4.png', 'assets/Imaginacion/Frame5.png' ],
      log  : ['assets/Logica/Frame1.png', 'assets/Logica/Frame2.png', 'assets/Logica/Frame3.png', 'assets/Logica/Frame 4.png', 'assets/Logica/Frame5.png' ],
      rel  : ['assets/Relacional/Frame1.png', 'assets/Relacional/Frame2.png', 'assets/Relacional/Frame3.png', 'assets/Relacional/Frame4.png', 'assets/Relacional/Frame5.png' ],
      com  : ['assets/Comparacion/Frame1.png', 'assets/Comparacion/Frame2.png', 'assets/Comparacion/Frame3.png', 'assets/Comparacion/Frame4.png', 'assets/Comparacion/Frame5.png' ]
    };
    
    const bienvenida = document.querySelector('#bienvenida');
    bienvenida.innerHTML = '';

    const cartasCategoria = cartas[categoria];
    const cartaAleatoria = cartasCategoria[Math.floor(Math.random() * cartasCategoria.length)];
    
    const imgCarta = document.getElementById('carta');
    imgCarta.src = cartaAleatoria;
    document.getElementById('overlay').style.display = 'flex';
  }

  function ocultarCarta() {
    document.getElementById('overlay').style.display = 'none';
  }

  document.getElementById('btnAna').addEventListener('click', () => mostrarCarta('ana'));
  document.getElementById('btnFlex').addEventListener('click', () => mostrarCarta('flex'));
  document.getElementById('btnMem').addEventListener('click', () => mostrarCarta('mem'));
  document.getElementById('btnCre').addEventListener('click', () => mostrarCarta('cre'));
  document.getElementById('btnIma').addEventListener('click', () => mostrarCarta('ima'));
  document.getElementById('btnLog').addEventListener('click', () => mostrarCarta('log'));
  document.getElementById('btnRel').addEventListener('click', () => mostrarCarta('rel'));
  document.getElementById('btnCom').addEventListener('click', () => mostrarCarta('com'));
  document.getElementById('overlay').addEventListener('click', () => ocultarCarta());