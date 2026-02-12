// ============================================
// 1. HEADER: Cambio sutil al hacer scroll (estilo IG)
// ============================================
const header = document.querySelector('.header');

function updateHeader() {
  if (window.scrollY > 20) {
    header.style.background = 'rgba(255,255,255,0.98)';
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.02)';
  } else {
    header.style.background = 'rgba(255,255,255,0.85)';
    header.style.boxShadow = 'none';
  }
}

window.addEventListener('scroll', updateHeader);
window.addEventListener('load', updateHeader);

// ============================================
// 2. BASE DE DATOS DE PRODUCTOS (GRAIN ARG)
// ============================================
const productos = [
  { nombre: "Maíz NK 940", categoria: "Maíz", descripcion: "Alto potencial de rendimiento y sanidad.", rendimiento: "138 qq/ha" },
  { nombre: "Maíz NK 870", categoria: "Maíz", descripcion: "Excelente estabilidad y adaptación.", rendimiento: "132 qq/ha" },
  { nombre: "Soja NK 4.2", categoria: "Soja", descripcion: "Grupo IV, resistencia a roya.", rendimiento: "48 qq/ha" },
  { nombre: "Soja NK 3.8", categoria: "Soja", descripcion: "Grupo III, alto contenido proteico.", rendimiento: "45 qq/ha" },
  { nombre: "Trigo NK Baguette", categoria: "Trigo", descripcion: "Calidad panadera superior.", rendimiento: "72 qq/ha" },
  { nombre: "Trigo NK Algarrobo", categoria: "Trigo", descripcion: "Excelente comportamiento a enfermedades.", rendimiento: "68 qq/ha" },
  { nombre: "Garbanzo NK Norteño", categoria: "Garbanzo", descripcion: "Calibre grande, selección premium.", rendimiento: "32 qq/ha" },
  { nombre: "Garbanzo NK Kabuli", categoria: "Garbanzo", descripcion: "Tipo kabuli, exportación.", rendimiento: "30 qq/ha" },
  { nombre: "Sorgo NK Silero", categoria: "Sorgo", descripcion: "Alta digestibilidad, biomasa.", rendimiento: "58 tn/ha" },
  { nombre: "Sorgo NK Granífero", categoria: "Sorgo", descripcion: "Tolerancia a sequía.", rendimiento: "82 qq/ha" }
];

// ============================================
// 3. RENDERIZAR PRODUCTOS
// ============================================
function renderProductos(arrayParaRenderizar) {
  const container = document.getElementById('product-list');
  if (!container) return;

  if (arrayParaRenderizar.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:60px; color:#6c757d;">
      <p style="font-size:18px;">No encontramos productos con esa búsqueda.</p>
      <p style="margin-top:8px;">Probá con: maíz, soja, trigo, garbanzo o sorgo.</p>
    </div>`;
    return;
  }

  let html = '';
  arrayParaRenderizar.forEach(p => {
    html += `
      <div class="product-item">
        <h3>${p.nombre}</h3>
        <div class="categoria">${p.categoria}</div>
        <p>${p.descripcion}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:16px;">
          <span style="background:#f8f9fa; padding:4px 12px; border-radius:20px; font-size:13px; font-weight:600;">
            ${p.rendimiento}
          </span>
          <a href="#" class="product-link">Ver ficha →</a>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// ============================================
// 4. FILTRO EN TIEMPO REAL
// ============================================
function initFiltro() {
  const searchInput = document.getElementById('search');
  if (!searchInput) return;

  function filtrar() {
    const termino = searchInput.value.toLowerCase().trim();
    if (termino === '') {
      renderProductos(productos);
    } else {
      const filtrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(termino) ||
        p.categoria.toLowerCase().includes(termino) ||
        p.descripcion.toLowerCase().includes(termino)
      );
      renderProductos(filtrados);
    }
  }

  searchInput.addEventListener('input', filtrar);
  
  // Si estamos en productos.html, renderizamos todo al inicio
  if (document.getElementById('product-list')) {
    renderProductos(productos);
  }
}

// ============================================
// 5. INICIAR TODO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  initFiltro();
});
