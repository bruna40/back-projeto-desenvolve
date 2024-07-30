export function notFound(req, res) {
  res.status(404).json({
    error:
      'Oops! A rota não foi encontrada. Parece que você entrou em um buraco negro da web!',
  })
}
