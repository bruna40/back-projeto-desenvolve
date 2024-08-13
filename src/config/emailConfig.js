import nodemailer from 'nodemailer'
import 'dotenv/config'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendEmail(to) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Motivos para ter a Bruna no Seu Time 🚀',
    text: `
          Olá,

          Espero que este e-mail encontre você bem e com um sorriso no rosto!

          Meu nome é Bruna e estou aqui para compartilhar com você uma oportunidade incrível de adicionar uma nova estrela ao seu time. 🎉✨

          **Aqui estão alguns motivos pelos quais você deve considerar adicionar a Bruna ao seu time:**

          1. **Energia Positiva:** Tenho uma energia contagiante que pode transformar qualquer projeto em um sucesso. Você vai se surpreender com a quantidade de sorrisos que consigo trazer para o trabalho!
          2. **Skills Incríveis:** Sou desenvolvedora conhecimento em Node.js, Express e MongoDB, Javascript. Se você está procurando alguém que possa lidar com desafios tecnológicos com um sorriso no rosto, aqui estou eu! E mais, estou sempre em busca de aprender novas linguagens e tecnologias, o que me torna uma profissional adaptável e pronta para novos desafios.
          3. **Trabalho em Equipe:** Acredito que uma equipe unida é uma equipe vencedora. E eu sou aquela colega que sempre vai fazer piadas ruins para aliviar o clima e garantir que todos estejam se divertindo enquanto trabalham.
          4. **Amo o que Faço:** Trabalho com paixão e dedicação, e isso se reflete nos resultados que entrego. E se você estiver se perguntando, sim, eu também tenho algumas piadas prontas para compartilhar durante o trabalho.
          5. **Perfil Estelar:** Meu LinkedIn e GitHub estão cheios de projetos interessantes e contribuições valiosas. (Links abaixo para uma espiada!)

          **LinkedIn:** https://www.linkedin.com/in/bruna40  
          **GitHub:** https://github.com/bruna40

          Estou animada para a possibilidade de conversar com você sobre como posso trazer valor para sua equipe. E prometo, com a Bruna na equipe, haverá muitos momentos bons para rir, assim como este e-mail que você está recebendo agora!

          Agradeço antecipadamente pela consideração e espero a oportunidade de discutir como posso contribuir para seu time.

          Atenciosamente,  
          Bruna
  `,
  }

  try {
    return await transporter.sendMail(mailOptions)
  } catch (error) {
    console.error('Error in sendEmail:', error)
    throw new Error('Failed to send email.')
  }
}
