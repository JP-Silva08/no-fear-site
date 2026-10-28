# No Fear — landing page

Landing page da No Fear, startup que vende sistemas de gestão com inteligência artificial para clínicas odontológicas e constrói o ecossistema ao redor: chatbots, servidores MCP e software sob medida.

Site estático em HTML, CSS e JavaScript puros. Sem frameworks, sem build e sem chamadas a APIs.

## Estrutura

```
index.html      página única
css/style.css   estilos (mobile first)
js/main.js      menu, entrada ao rolar, revelação da tagline e contato
assets/         favicon, imagem de compartilhamento e ícones (Phosphor, licença MIT)
DESIGN.md       sistema visual: cores, tipografia, espaçamento, raios, sombras e o que evitar
```

## Rodar localmente

Abra `index.html` no navegador, ou sirva a pasta:

```
python -m http.server 8000
```

## Contato por WhatsApp

O número e a mensagem pré-preenchida ficam em uma constante no topo de `js/main.js`:

```js
const CONTATO = {
  telefone: '5511900000000',
  telefoneExibido: '+55 11 90000-0000',
  mensagem: 'Olá! Quero criar um ecossistema de software para a minha clínica.'
};
```

O número atual é genérico. Troque pelos dados reais antes de divulgar a página. O e-mail do rodapé (`contato@nofear.com.br`) está direto no `index.html`.

## Conteúdo ilustrativo

A tela do sistema no hero usa nomes e horários fictícios e está rotulada como ilustrativa. A página não traz clientes, depoimentos nem métricas: quando houver dados reais, inclua na seção de produtos ou crie uma seção de provas.

## Publicação

GitHub Pages, branch `main`, pasta raiz.
