# 10 dicas de acessibilidade para você não esquecer!

Arquivo feito baseando-se na palestra dada pela [`Talita Pagani`](https://github.com/talitapagani) na Frontinsampa 2016, onde ela discursou acerca de Acessibilidade na web. [Link para o vídeo da palestra](https://www.youtube.com/watch?v=4URTZHk6tz0).

Lembre-se!
---

#### "Acessibilidade não é feature de projeto! E isso não é questão somente de negócio, mas é uma questão de inclusão social.

#### "Público alvo a gente seguimenta por *interesse*, não por característica física, limitação ou deficiência."

---
## 1 - **Jamais** remova o outline dos elementos
---
O outline é um atributo dos elementos html, ele funciona como se fosse uma borda e serve para que os usuários possam navegar nas páginas a partir da tecla `tab`. Ao colocar `outline: None` nós tiramos essa propriedade, tornando impossível a mobilidade de alguns usuários no site.

Exemplo:
```CSS
elemento {
    outline: None
}
```

---
## 2 - Não basta estilizar o :hover, tem que ter o :focus também
---

- **:focus** - Propriedade do CSS que altera o comportamento do elemento quando o usuário, através do tab, focaliza o elemento.

- **:hover** - Propriedade do CSS que altera o comportamento do elemento quando o usuário passa o mouse em cima do elemento.

É muito importante que além de estilizar o :hover dos elementos que nós estilizemos o :focus, para que dessa forma a experiência de usuários que utilizam o tab como ferramenta de navegação seja a mais próxima possível da de usuários que utilizam o mouse para se deslocar pelo site.

Exemplo:
```CSS
elemento: hover, elemento:focus {
    background: #00ffdd;
}
```

---
## 3 - Permita que outros elementos também possam receber foco via teclado
---
É importante que elementos que não são links, como parágrafos, títulos ou imagens, também possam receber foco, ou seja, serem acessíveis pela tecla `tab`. 

Além de permitir que o usuário possa acessar mais áreas do seu site, ele permite que pessoas com dificuldade de focar, como dislexia, possam ser auxiliadas pelo :focus em parágrafos e textos.

```HTML
<h1 tabindex=0>Título do site</h1>
<p tabindex=0>Parágrafo</p>
```
---
## 4 - Textos capitalizados ou em caixa-alta
---
Textos capitalizados em caixa alta podem provocar que leitores de tela leiam os textos como se fossem síglas ou com uma entonação inadequada. É possível através do CSS fazer com que a aparência dos elementos fiquem visualmente em caixa alta caso desejado, deixando dessa maneira o texto com o impacto desejado, mas não impactando no funcionamento dos leitores de tela

Exemplo:
```CSS
    h1 {
        text-transform: uppercase;
    }
```

---
## 5 - Toda imagem precisa ter o atributo `alt` declarado
---

- **alt:** Alt é um atributo das tags img que servem para descrever a imagem.

É preciso fornecer textos alternativos para imagens que esteja no conteúdo para informar ao usuário qual a imagem que está, ou deveria estar, carregando no momento e o que ela significa. Esse tópico não é importante apenas para usuário com limitações, mas também para o caso da imagem em sí não carregar, por diversos problemas, nesse caso o alt da imagem irá aparecer no lugar.

---
## 6 - Marque o início do conteúdo e insira um link para pular direto a ele
---
Esse link é muito importante caso no site exista um menu de navegação gigantesco. Ao inserir um link âncora que pula direto para o conteúdo da página você poupa tempo e esforço do usuário. 

> É interessante que esse link seja logo o primeiro da página.

---
## 7 - Marque as seções do conteúdo com landMark roles do Aria
---
As landmark roles do Aria informam o que significam determinadas partes de um conteúdo, o que ajuda leitores de tela a identificar o que cada elemento é.

Exemplos:
```HTML
    <header role="banner">
    <nav role="navigation">
    <p class="copyright" role="contetinfo">
```

---
## 8 - "Clique aqui" para link: NÂO
---
Por exemplo, caso usuários com limitações visuais queiram, atraveś de leitores de tela, dar uma varredura pelos links da página? Ao utilizarmos apenas "clique aqui" para sinalizar o link nós não passamos ao usuário nenhuma informação real acerca do conteúdo desse link, os links precisam ter significados que remetem ao conteúdo do link.

Exemplo:
```HTML
    <p>Temos um conteúdo muito importante para disponibilziar para você, então <a href="www.pocoton.br">faça o download do nosso e-book em PDF</a></p>
```
O exemplo acima deixa bem claro sobre o que é o link, permitindo que leitores de tela informem de forma clara ao usuário o significado desse link.

---
## 9 - Assegurar contraste adequado entre fonte e cores/imagens no fundo
---
Bom, esse tópico é bem auto explicativo. É essencial assegurar que o conteúdo seja mais facilmente distinguível. **Nunca devemos associar informações a cores!** usuários com daltonismo sofrem com esse tipo de coisa.

Existem inúmeras aplicações para esse tópico, como setar a cor da fonte igual ao background e usar uma imagem como plano de fundo. Caso a imagem não carregue vai ser impossível de ler o que está escrito! Por isso é preciso ter cuidado em relação a isso.

---
## 10 - Teste seu site com CSS e JqvaScript desabilitados
---
Se o seu site faz sentido mesmo sem CSS e JavaScript ativados, no sentido de os textos estarem do tamanho certo e coerentes, então o seu site ja está muito mais acessível. 

---
## Bonus - Considere diferentes contextos de uso
---
Existem diveeeersos tipos de limitações diferentes! É importante que nós consideremos contexos diferentes e diversos tipos de limitações que o nosso usuário possa ter. Acessibilidade não é um problema, a acessibilidade só é difícil quando não é feita de forma adequada.