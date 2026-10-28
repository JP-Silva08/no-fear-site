---
version: alpha
name: No Fear Prontuário
description: Sistema visual da landing page da No Fear, startup de sistemas de gestão com IA para clínicas odontológicas, lida por donos e gestores de clínica.

colors:
  primary: "#45694a"
  primary-hover: "#3a5a3e"
  fern: "#568259"
  celadon: "#96e6b3"
  sage: "#77a87b"
  background: "#f1fffa"
  panel: "#ccfccb"
  surface: "#ffffff"
  sunken: "#e6f2ea"
  line: "#d5e3da"
  line-strong: "#7f8e84"
  fg: "#464e47"
  fg-muted: "#5f6b61"
  fg-subtle: "#7d887f"
  info: "#2a6f97"
  success: "#2f7a45"
  warning: "#9a5a06"
  danger: "#b23a3a"

typography:
  display:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.03em
  display-sm:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.025em
  headline:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 700
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: -0.01em
  title:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0.04em

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px

spacing:
  s25: 2px
  s50: 4px
  s75: 8px
  s100: 12px
  s200: 16px
  s300: 24px
  s400: 32px
  s500: 40px
  s600: 48px
  s700: 64px
  s800: 80px
  s900: 96px

components:
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.fg}"
    typography: "{typography.body}"
  band-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.fg}"
    typography: "{typography.body-lg}"
    padding: "{spacing.s700}"
  band-sunken:
    backgroundColor: "{colors.sunken}"
    textColor: "{colors.fg}"
    typography: "{typography.body}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.s300}"
  card-muted-text:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg-muted}"
    typography: "{typography.body-sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.s100}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-hover}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.s100}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.s100}"
  input-placeholder:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg-subtle}"
    typography: "{typography.body-lg}"
  mono-tag:
    backgroundColor: "{colors.sunken}"
    textColor: "{colors.fg-muted}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.sm}"
    padding: "{spacing.s50}"
  tag-active:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.primary-hover}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.sm}"
    padding: "{spacing.s50}"
  icon-chip:
    backgroundColor: "{colors.celadon}"
    textColor: "{colors.fg}"
    rounded: "{rounded.md}"
    size: 48px
  illustration-fill:
    backgroundColor: "{colors.sage}"
    rounded: "{rounded.md}"
  illustration-stroke:
    backgroundColor: "{colors.fern}"
    rounded: "{rounded.md}"
  divider:
    backgroundColor: "{colors.line}"
    height: 1px
  control-border:
    backgroundColor: "{colors.line-strong}"
    height: 1px
  status-info:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.info}"
    typography: "{typography.body-sm}"
  status-success:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.success}"
    typography: "{typography.body-sm}"
  status-warning:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.warning}"
    typography: "{typography.body-sm}"
  status-danger:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.danger}"
    typography: "{typography.body-sm}"
  headline-on-page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.fg}"
    typography: "{typography.display}"
  headline-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.fg}"
    typography: "{typography.display-sm}"
  section-title:
    backgroundColor: "{colors.background}"
    textColor: "{colors.fg}"
    typography: "{typography.headline}"
  card-title:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    typography: "{typography.headline-sm}"
  card-subtitle:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    typography: "{typography.title}"
  pill:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.fg}"
    rounded: "{rounded.full}"
    padding: "{spacing.s75}"
  empty:
    backgroundColor: "{colors.background}"
    textColor: "{colors.fg}"
    rounded: "{rounded.none}"
    padding: "{spacing.s25}"
  gap-xl:
    backgroundColor: "{colors.background}"
    height: 96px
    padding: "{spacing.s900}"
  gap-lg:
    backgroundColor: "{colors.background}"
    height: 80px
    padding: "{spacing.s800}"
  gap-md:
    backgroundColor: "{colors.background}"
    height: 48px
    padding: "{spacing.s600}"
  gap-sm:
    backgroundColor: "{colors.background}"
    height: 40px
    padding: "{spacing.s500}"
  gap-xs:
    backgroundColor: "{colors.background}"
    height: 32px
    padding: "{spacing.s400}"
---

# No Fear Prontuário

## Overview

A direção é **prontuário clínico em papel menta**: a calma de uma sala de espera bem cuidada, com a precisão de um registro de paciente. O leitor é o dono ou o gestor de uma clínica odontológica. Ele lê a página com desconfiança, entre dois atendimentos, e precisa sentir que o software é sóbrio, previsível e feito por gente que entende de agenda, convênio e prontuário.

A página tem uma ideia visual só: fundo claro esverdeado, tinta cinza esverdeada para o texto e um único verde escuro para qualquer coisa que se clica. Os rótulos técnicos em monoespaçada (códigos, etapas, "ilustrativo") dão o tom de registro. A composição é assimétrica: texto à esquerda numa coluna estreita, evidência do produto à direita, sem centralizar tudo.

O que ela abre mão: drama, escuridão, brilho e qualquer sinal de "IA futurista". Nada de gradiente, vidro, neon ou partículas. A inteligência artificial aparece como função concreta (confirmar consulta, responder paciente, sugerir horário), nunca como aura.

## Colors

A paleta nasce do verde de uniforme cirúrgico e do papel de prontuário. O fundo é o creme esverdeado mais claro, os painéis de destaque usam um verde chá e a ação usa um verde floresta escuro o bastante para carregar texto branco com folga.

- **Primary (#45694a):** verde floresta — única cor de ação. Botão principal, link importante, foco. Texto branco sobre ele passa de 6:1.
- **Primary hover (#3a5a3e):** o mesmo verde mais fundo — hover, active e links no texto corrido.
- **Background (#f1fffa):** papel menta — fundo da página. **Surface (#ffffff)** é só para cartões e a tela ilustrativa do hero.
- **Panel (#ccfccb):** verde chá — faixas de destaque, o bloco de contato e item ativo. Texto escuro sempre.
- **Sunken (#e6f2ea) e Line (#d5e3da):** trilhos, cabeçalhos de tabela e divisórias. Line separa; não serve de borda de controle.
- **Line strong (#7f8e84):** borda de campos e controles, 3,44:1.
- **Fg (#464e47), Fg muted (#5f6b61):** tinta cinza esverdeada para título e corpo, e para apoio. **Fg subtle (#7d887f)** só em placeholder e ícone, nunca em texto de leitura.
- **Fern (#568259), Celadon (#96e6b3), Sage (#77a87b):** decorativos. Entram em ilustração, ícones e fundos de ícone. Nunca texto pequeno sobre eles; Sage nunca é texto; Fern só em texto a partir de 18 px.
- **Info, success, warning, danger:** só quando houver significado de estado, como o "Ilustrativo" do hero (info) ou a validação de um campo.

O verde de ação ocupa menos de 10% da superfície. Se tudo é verde, nada é ação.

## Typography

Inter para tudo que é texto e JetBrains Mono para rótulos técnicos, números de etapa e o selo "ilustrativo". Isso segue a paleta da marca e prevalece sobre a lista genérica de fontes da skill de landing page. As duas diferem por classificação (grotesca e monoespaçada), então o rótulo se separa do discurso sem precisar de peso extra.

A escala só usa degraus do Tailwind: 14, 16, 18, 20, 24, 36, 48 e 60 px, cada um com o line height do degrau. Duas famílias de peso apenas: 400 para leitura e 600 e 700 para ação e título. Sem 900, sem itálico. Títulos grandes têm tracking negativo; rótulos mono têm tracking levemente positivo. O título do hero e o subtítulo têm largura máxima de 680 px, com quebras escolhidas por significado. Títulos usam `text-wrap: balance` e parágrafos `text-wrap: pretty` para nunca deixar uma palavra sozinha na última linha. Sem hífen no meio de frases.

Fallback: `system-ui, "Segoe UI", sans-serif` e `ui-monospace, Consolas, monospace`. Ambas as fontes são abertas (licença OFL).

## Layout

Base de espaçamento em 4 px, usando só a tabela: 0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80 e 96. Seções respiram 64 px no celular e 96 px no desktop. Botão principal: 8 px vertical e 12 px horizontal.

Container de 1152 px no máximo, grade de 12 colunas no desktop. O hero é assimétrico (texto em 5 colunas, tela ilustrativa em 7). Parágrafos de leitura ficam entre 60 e 70 caracteres. Em 390 px tudo vira uma coluna e a tela ilustrativa desce abaixo do texto; em 768 px os cartões passam a duas colunas; em 1440 px o container para de crescer e as margens laterais absorvem o resto.

Ordem das seções: hero, quem somos, o que fazemos, produtos, como funciona, tagline, FAQ, CTA final, rodapé.

## Elevation & Depth

A hierarquia vem primeiro de tom e borda: cartões brancos com borda de 1 px em Line sobre fundo menta, faixas em Panel e Sunken. Sombra só aparece onde existe camada real flutuando:

- Camadas flutuantes (botão de WhatsApp, menu móvel aberto): `0 4px 16px rgb(70 78 71 / 0.12)`, a sombra da paleta.
- Tela ilustrativa do hero, a única peça de destaque: Beautiful lg da skill de sombras, neutra.
- Cartões de produto em repouso: sem sombra, só borda. No hover, Beautiful sm.

Nunca duas sombras na mesma peça, nunca sombra colorida. A luz vem de cima.

## Shapes

Raio hierárquico: 4 px em etiquetas, 8 px em botões e campos, 12 px em cartões e na tela ilustrativa, círculo só em avatar e no botão flutuante. Elemento dentro de outro com folga menor que 32 px usa raio interno igual ao externo menos a folga, apenas quando o resultado passa de 2 px. Bordas sempre fecham o contorno inteiro; nunca borda em um lado só. Fundos são sempre chapados.

## Components

- **Botão primário:** fundo Primary, texto branco, 16 px semibold. Hover para Primary hover; active com `scale(0.98)`; foco com anel de 2 px em Primary hover e 2 px de recuo. Existe uma única CTA no hero.
- **Botão secundário:** branco com borda Line strong e texto Primary hover. Usado só fora do hero.
- **Cartão:** branco, borda Line, raio 12, padding 24. Ícone Phosphor dentro de quadrado Celadon de 48 px com raio 8 e traço em Fg.
- **Faixa de contato:** fundo Panel com a frase "Quer criar um ecossistema de software para a sua clínica? Fale com a gente." e botão para o WhatsApp.
- **Botão flutuante:** círculo Primary de 56 px, ícone de WhatsApp branco, fixo no canto inferior direito, com rótulo acessível.
- **Selo "Ilustrativo":** etiqueta mono com fundo Sunken, presente em toda tela, número ou exemplo que não seja dado real.
- **FAQ:** `details` e `summary` nativos, com seta que gira e conteúdo visível sem JavaScript.

## Do's and Don'ts

- Do usar #45694a como a única cor de ação e reservar o hover #3a5a3e para estados.
- Do rotular como "ilustrativo" toda tela, número e exemplo que não seja real.
- Do manter a CTA do hero única e repetir exatamente a mesma ação no bloco final.
- Do usar os degraus de tamanho e a tabela de espaçamento declarados, sem valores intermediários.
- Do mostrar função de IA como ação concreta: confirmar, responder, sugerir, lembrar.
- Don't colocar texto abaixo de 18 px sobre #77a87b, #96e6b3 ou #568259.
- Don't usar gradiente, vidro, brilho, partícula ou sombra colorida.
- Don't inventar cliente, depoimento, métrica ou logotipo de parceiro.
- Don't usar cartões dentro de cartões nem ícones em quadrados coloridos fora da seção de produtos.
- Don't usar uma segunda cor de destaque; para ênfase, use peso, espaço ou o fundo Panel.
- Don't animar o que não explica estado: sem flutuação contínua, sem digitação falsa, sem parallax.
- Don't usar itálico, peso 900, hífen em frases, "Seamless", "Elevar", "Revolucionar" nem exclamações.
