// Header con scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.background = 'rgba(255,255,255,0.98)';
    header.style.borderBottom = '1px solid rgba(0,0,0,0.04)';
  } else {
    header.style.background = 'rgba(255,255,255,0.97)';
    header.style.borderBottom = '1px solid rgba(0,0,0,0.02)';
  }
});

// Catálogo de productos NK
const productos = [
  { nombre: "NK 940 VIP", categoria: "Maíz", descripcion: "Alta performance en ambientes de potencial.", rendimiento: "138 qq/ha" },
  { nombre: "NK 870", categoria: "Maíz", descripcion: "Estabilidad y sanidad de hoja.", rendimiento: "132 qq/ha" },
  { nombre: "NK 4.2", categoria: "Soja", descripcion: "Grupo IV, resistencia a roya.", rendimiento: "48 qq/ha" },
  { nombre: "NK 3.8", categoria: "Soja", descripcion: "Grupo III, alto perfil sanitario.", rendimiento: "45 qq/ha" },
  { nombre: "NK Baguette", categoria: "Trigo", descripcion: "Calidad panadera superior.", rendimiento: "72 qq/ha" },
  { nombre: "NK Algarrobo", categoria: "Trigo", descripcion: "Excelente comportamiento en BC.", rendimiento: "68 qq/ha" },
  { nombre: "NK Norteño", categoria: "Garbanzo", descripcion: "Calibre grande, selección.", rendimiento: "32 qq/ha" },
  { nombre: "NK Kabuli", categoria: "Garbanzo", descripcion: "Exportación, tipo kabuli.", rendimiento: "30 qq/ha" },
  { nombre: "NK Silero", categoria: "Sorgo", descripcion: "Alta digestibilidad, biomasa.", rendimiento: "58 tn/ha" },
  { nombre: "NK Granífero", categoria: "Sorgo", descripcion: "Tolerancia a estrés hídrico.", rendimiento: "82 qq/ha" }
];

function renderProductos(items) {
  const container = document.getElementById('product-list');
  if (!container) return;
  
  if (items.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:80px; color:#4A5C54;">
      <p style="font-size:20px; font-weight:600;">No hay resultados</p>
      <p style="margin-top:8px;">Probá con otro término</p>
    </div>`;
    return;
  }

  let html = '';
  items.forEach(p => {
    html += `
      <div class="product-item">
        <h3>${p.nombre}</h3>
        <div class="categoria">${p.categoria}</div>
        <p>${p.descripcion}</p>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="background:var(--verde-claro); color:var(--verde-gdm); padding:4px 16px; font-size:14px; font-weight:700;">
            ${p.rendimiento}
          </span>
          <a href="#" class="product-link">Ver detalle →</a>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// Filtro
function initFiltro() {
  const input = document.getElementById('search');
  if (!input) return;

  renderProductos(productos);

  input.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    if (term === '') {
      renderProductos(productos);
    } else {
      const filtrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(term) ||
        p.categoria.toLowerCase().includes(term)
      );
      renderProductos(filtrados);
    }
  });
}

document.addEventListener('DOMContentLoaded', initFiltro);
