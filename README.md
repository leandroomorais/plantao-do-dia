# Plantão do Dia — versão web instalável

Monta a imagem da equipe plantonista do dia e abre o compartilhamento do
WhatsApp. Funciona offline e guarda tudo no próprio aparelho.

## Publicar no GitHub Pages

1. Crie um repositório novo em https://github.com/new, por exemplo
   `plantao-do-dia`, público, sem README.
2. Na página do repositório, clique em **uploading an existing file** e arraste
   todos os arquivos desta pasta: `index.html`, `manifest.webmanifest`, `sw.js`,
   `icon-192.png`, `icon-512.png`, `icon-maskable.png`. Confirme com
   **Commit changes**.
3. Vá em **Settings** → **Pages**. Em *Source*, escolha **Deploy from a branch**,
   branch `main` e pasta `/ (root)`. Salve.
4. Aguarde um ou dois minutos. O endereço aparece na mesma tela, no formato
   `https://SEU-USUARIO.github.io/plantao-do-dia/`.

## Instalar no celular

1. Abra o endereço no Chrome do Android.
2. Menu ⋮ → **Adicionar à tela inicial**.
3. O ícone do hospital aparece junto com os outros aplicativos e abre em tela
   cheia, sem barra de navegador.

Depois do primeiro acesso ele funciona sem internet.

## Publicar uma versão nova

Suba os arquivos alterados e troque o número em `sw.js`:

```js
var CACHE = "plantao-do-dia-v2";
```

Sem isso, os celulares continuam abrindo a versão guardada em cache.

## Limites desta versão

- Cada aparelho tem seu próprio cadastro. Não há sincronização entre celulares.
- Use **Exportar backup** antes de trocar de aparelho ou limpar os dados do
  navegador.
- O envio para o WhatsApp continua manual: o app entrega imagem e texto, e você
  toca em Status e depois no grupo.
