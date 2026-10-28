// No Fear — landing page. JavaScript puro, sem dependências.

// Contato: único lugar onde o número e a mensagem são definidos.
const CONTATO = {
  telefone: '5511900000000',
  telefoneExibido: '+55 11 90000-0000',
  mensagem: 'Olá! Quero criar um ecossistema de software para a minha clínica.'
};

const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- WhatsApp ----------
const urlWhatsApp = 'https://wa.me/' + CONTATO.telefone + '?text=' + encodeURIComponent(CONTATO.mensagem);
document.querySelectorAll('[data-whatsapp]').forEach((el) => {
  el.href = urlWhatsApp;
  el.target = '_blank';
  el.rel = 'noopener noreferrer';
});
document.querySelectorAll('[data-phone]').forEach((el) => {
  el.href = 'tel:+' + CONTATO.telefone;
});
document.querySelectorAll('[data-phone-text]').forEach((el) => {
  el.textContent = CONTATO.telefoneExibido;
});

// ---------- Ano do rodapé ----------
const ano = document.getElementById('ano');
if (ano) ano.textContent = new Date().getFullYear();

// ---------- Menu móvel ----------
const botaoMenu = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');

function alternarMenu(abrir) {
  menu.classList.toggle('open', abrir);
  botaoMenu.setAttribute('aria-expanded', String(abrir));
  botaoMenu.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
}

if (botaoMenu && menu) {
  botaoMenu.addEventListener('click', () => {
    alternarMenu(botaoMenu.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) alternarMenu(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      alternarMenu(false);
      botaoMenu.focus();
    }
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', () => alternarMenu(false));
}

// ---------- Entrada suave ao rolar ----------
const revelaveis = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduzMovimento) {
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('in');
        io.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  revelaveis.forEach((el) => io.observe(el));
} else {
  revelaveis.forEach((el) => el.classList.add('in'));
}

// ---------- Item atual do menu ----------
const links = menu ? [...menu.querySelectorAll('a[href^="#"]')] : [];
const secoes = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window && secoes.length) {
  const ioMenu = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      links.forEach((a) => {
        const atual = a.getAttribute('href') === '#' + entrada.target.id;
        a.classList.toggle('current', atual);
        if (atual) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  secoes.forEach((s) => ioMenu.observe(s));
}

// ---------- Tagline: revelação palavra por palavra ----------
function dividirPalavras(raiz) {
  const andador = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT);
  const nos = [];
  while (andador.nextNode()) nos.push(andador.currentNode);
  const palavras = [];
  nos.forEach((no) => {
    const partes = no.textContent.split(/(\s+)/);
    const frag = document.createDocumentFragment();
    partes.forEach((parte) => {
      if (parte === '') return;
      if (/^\s+$/.test(parte)) {
        frag.appendChild(document.createTextNode(parte));
      } else {
        const span = document.createElement('span');
        span.className = 'word';
        span.textContent = parte;
        frag.appendChild(span);
        palavras.push(span);
      }
    });
    no.replaceWith(frag);
  });
  return palavras;
}

const alvo = document.querySelector('[data-reveal]');
if (alvo && !reduzMovimento) {
  const palavras = dividirPalavras(alvo);
  const total = palavras.length;
  const sobreposicao = 3; // palavras que se acendem ao mesmo tempo
  let agendado = false;

  const atualizar = () => {
    agendado = false;
    const vh = window.innerHeight;
    const r = alvo.getBoundingClientRect();
    // começa quando o topo cruza 90% da tela e termina com a base em 45%
    const progresso = (vh * 0.9 - r.top) / (vh * 0.45 + r.height);
    const p = Math.min(1, Math.max(0, progresso));
    palavras.forEach((w, i) => {
      const local = Math.min(1, Math.max(0, (p * (total + sobreposicao) - i) / sobreposicao));
      w.style.setProperty('--word-progress', local.toFixed(3));
    });
  };
  const pedir = () => {
    if (!agendado) {
      agendado = true;
      requestAnimationFrame(atualizar);
    }
  };

  palavras.forEach((w) => w.style.setProperty('--word-progress', 0));
  window.addEventListener('scroll', pedir, { passive: true });
  window.addEventListener('resize', pedir);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(pedir);
  atualizar();
}
