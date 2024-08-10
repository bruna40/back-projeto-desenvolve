A implementação de paginação está configurada na rota /products. Aqui está um resumo de como foi implementada:

Rota:

exemplo: http://localhost:3000/products?page=1&limit=10&search=Eyeshadow

GET /products: Retorna uma lista paginada de produtos.
Parâmetros de query:
page (opcional): Número da página a ser exibida (padrão: 1).
limit (opcional): Número de produtos por página (padrão: 10).