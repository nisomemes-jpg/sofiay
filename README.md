# Sofia & Ykaro · Nosso infinito

Site original reorganizado para publicação no GitHub Pages, preservando conteúdo, fotos e comportamento.

## Arquivos
- index.html: página principal.
- assets/css/style.css: aparência e layout.
- assets/js/script.js: animações, data de entrada e contador.
- assets/img/: três fotografias extraídas do HTML original, sem recompressão.
- .nojekyll: indica publicação como site estático.

## Como colocar no GitHub
1. Extraia o ZIP no computador (Windows: botão direito > Extrair tudo).
2. Abra seu repositório no GitHub. Em Add file > Upload files, arraste o index.html e a pasta assets extraídos. Pode enviar também README.md e .nojekyll.
3. Clique em Commit changes para salvar os arquivos.
4. O index.html e a pasta assets precisam estar diretamente na raiz do repositório, não dentro de outra pasta. Não envie somente o ZIP: o GitHub não o extrai para publicar.
5. Em Settings > Pages, escolha Deploy from a branch em Source.
6. Selecione a branch em que enviou os arquivos (normalmente main), a pasta / (root) e clique em Save.
7. Aguarde a publicação e abra o endereço mostrado nessa página.

## Uso e edição
Abra index.html no navegador para visualizar localmente. Não precisa instalar dependências nem executar compilação.
As fontes são carregadas pelo Google Fonts e precisam de internet; sem conexão, o navegador usa fontes alternativas. O botão de música abre o Spotify: não existe arquivo de áudio incorporado no original.
A data de entrada foi preservada no JavaScript. Essa tela é uma surpresa visual, não autenticação: quem acessar os arquivos pode consultar o conteúdo e a data.

## Se não abrir
- Confirme o nome index.html, em letras minúsculas, sem (1) e sem extensão .txt.
- Confirme que assets está ao lado de index.html e contém css, js e img.
- Confirme a branch e a pasta de publicação em Settings > Pages.
- Caso já exista um site, substitua o index.html antigo e envie a pasta assets deste pacote.

Referências:
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
