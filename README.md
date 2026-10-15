### Fundamentação

## Cliente e Servidor:
**o DNS:** o navegador não sabe qual é o nome do site, ele precisa primeiro do IP do servidor, ele funciona tipo uma lista de contato pra internet, ele traduz isso pra o nome do site.

**Conexão:** ja com o ip, o navegador abre a conexão com o servidor, com o HTTP, e pra servidores segureso, HTTPS.

**Requisição:** o navegador envia uma requisição pro HTTP/HTTPS, pra lá vão alguns dados, tipo o navegador que você ta usando, cookies e etc.

**Resposta:** o servidor processa o pedido, e envia devolta uma resposta HTTP, contendo o status, e os arquivos do site.
O navegador le os arquivos, lê e renderiza a pagina na tua tela.

# Anatomia da requisição e da resposta

**Requisição:**
Utilizando GET no /busca?termo=node no meu código, o request.method e request.url mostra o GET e busca o /busca?termo=node.
No cabeçalho ficam as informações do GET, mostrando o charset, text/plain e a velocidade da resposta.
no corpo fica vazio, por que GET normalmente não envia corpo.
<img src="https://media.discordapp.net/attachments/930089808037031936/1560303421544730754/image.png?ex=6ad2394c&is=6ad0e7cc&hm=4867a1b4164d7833dfaab6c3a2ecef69783b23898ceb8f5dc303b99d06b8966b&=&format=webp&quality=lossless" />


**Resposta:**
Na linha inicial o 200 vem do response.writeHead (200, content).
No cabeçalho content-type: text/plain; charset=utf-8 vem do "content" em si, agora o date e connection são adicionados pelo proprio node.
No corpo, buscou por: node que vem da resposta do response.end(/buscou por: ${termo}).
<img src="https://media.discordapp.net/attachments/930089808037031936/1560304809712549969/image.png?ex=6ad23a97&is=6ad0e917&hm=7414c81eaac0f4bdf26afff86b9e0277e5988c9d5d49c16d62abd1b7a0a01216&=&format=webp&quality=lossless" />

# GET, POST, PUT, PATCH e DELETE, para que serve cada um, e o que significa um método ser seguro e idempotente.
**GET:** Serve para consultar ou recuperar dados do servidor sem alterar ele.

**POST:** Serve para enviar e criar um novo recurso no servidor

**PUT:** Serve para substituir por completo um recurso que não existe.

**PATCH:** Serve para aplicar uma modificação parcial em algum recurso.

**DELETE:**Serve para remover um recurso especifico do servidor.

Metodos seguros são aqueles que são considerados apenas leitura, como:
GET, HEAD, OPTIONS

e os não seguros pois eles modificam ou deletam dados:
POST, PUT, PATCH, DELETE.

Metodos idempotentes é quando você executa a mesma requisição varias vezes seguidas e produz exatamente o mesmo resultado no estado do servidor que executando ela apenas uma unica vez.
GET, PUT e DELETE são idempotentes, enquanto POST e PATCH já não são.

## Códigos de status

**1xx (Informativo):** Indica que a requisição foi recebida pelo servidor e o processo continua em andamento.

**2xx (Sucesso):** Significa que a solicitação foi recebida, compreendida e aceita com sucesso pelo servidor.

**3xx (Redirecionamento):** Avisa que ações adicionais precisam ser tomadas pelo cliente para concluir a requisição.

**4xx (Erro do Cliente):** Sinaliza que a requisição tem algum erro de sintaxe ou não pode ser atendida por culpa de quem fez o pedido.

**5xx (Erro do Servidor):** Indica que a requisição era válida, mas o próprio servidor falhou ao tentar processar.

**200 (OK):** A requisição foi sucedida e o servidor retornou o conteúdo solicitado.

**201 (Created):** A requisição foi sucedida e um novo recurso foi criado no servidor.

**301 (Moved Permanently):** O recurso foi movido permanentemente para uma nova URL, os navegadores e mecanismos de busca atualizam os links automaticamente para o novo endereço.

**302 (Found / Movido Temporariamente):** O recurso está temporariamente em outro endereço, mas a URL original deve continuar sendo usada para futuras requisições.

**304 (Not Modified):** A cópia que o cliente possui armazenada em cache ainda é válida e atualizada, dispensando o reenvio do conteúdo pelo servidor.

**400 (Bad Request):** O servidor não conseguiu entender a requisição devido a uma sintaxe inválida ou formato incorreto enviado pelo cliente.

**401 (Unauthorized):** O cliente não está autenticado, faltam credenciais válidas para provar quem ele é.

**403 (Forbidden):** O cliente está autenticado, mas ele não tem permissão de acesso para aquele recurso específico.

**404 (Not Found):** O servidor não encontrou o recurso ou a página solicitada no endereço informado.

**405 (Method Not Allowed):** O método HTTP utilizado é conhecido pelo servidor, mas não é permitido para aquele recurso específico.

**500 (Internal Server Error):** Um erro genérico e inesperado ocorreu dentro do servidor, impedindo-o de concluir a solicitação

Diferença de 401 e 403
**401:** Trata-se de falta de autenticação, o usuario não provou sua identidade.
**403:** Trata-se de falta de autorização, o usuario já ta logado, e o servidor sabe quem é, mas ele não tem o privilégio suficiente para ver aquela pagina.

Diferença de 301 e 302
**301:** Informa que a pgina mudou de endereço pra sempre.
**302:** Informa que a pagina mudou de endereço temporariamente.

## Cabeçalhos
**Content-Type:** Diz qual é o formato do arquivo enviado (ex: página HTML, imagem ou JSON).

**Content-Length:** Informa o tamanho exato do conteúdo em bytes.

**Location:** Indica a URL de redirecionamento (para onde o navegador deve ir automaticamente).

**Allow:** Lista quais métodos HTTP (GET, POST, etc.) são permitidos naquele endereço.

**Cache-Control:** Define as regras de cache (se e por quanto tempo a página pode ficar salva no navegador).

**User-Agent:** Identifica o navegador e sistema operacional de quem está acessando.

**Accept:** Informa ao servidor quais formatos de arquivo o cliente aceita receber de volta.

## HTTP é stateless
Significa que o servidor não guarda histórico das suas interações, ele é assim pois o protocolo dele foi desenhado para ser simples e escalável.
Para contornar isso, tu precisa enviar um identificador, como um token, junto das requisições.

## HTTP x HTTPS
**HTTP (Hypertext Transfer Protocol)**
Transmite os dados em texto simples, não tem criptografia e usa a porta 80

**HTTPS (Hypertext Transfer Protocol Secure)**
Coloca protocolos de criptografia, protege informações sensiveis, tipo senha, dados de cartão e etc.
Utiliza a porta 443.

## Uso de IA.
Foi utilizado IA para pesquisar sobre algumas perguntas do questionário inicial do README, e ajuda na SINTAXE do SCRIPT.JS.

## Conclusão.
Provavelmente mudaria a forma que eu organizava tudo, sinto que ainda peco bastante nesse aspecto.