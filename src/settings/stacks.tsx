import { ReactNode } from "react"

interface Stack {
  emoji: string,
  title: string,
  description: string | ReactNode
}
export const stacks: Stack[] = [
  {
    emoji: "🖥️",
    title: "Frontend",
    description: <>Tecnologias para desenvolver a interface do usuário, incluindo <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>JQuery</strong>, <strong>Bootstrap</strong>, <strong>Tailwind CSS</strong>, <strong>React.js</strong> e <strong>Next.js</strong>.</>
  },
  {
    emoji: "🛠️",
    title: "Backend",
    description: <>Tecnologias para criar a lógica e funcionalidades do aplicativo, como <strong>Node.js</strong>, <strong>Firebase</strong> e <strong>Nest.js</strong>.</>
  },
  {
    emoji: "📊",
    title: "Banco de Dados",
    description: <>Sistemas de armazenamento e gerenciamento de dados, como <strong>MongoDB</strong>, <strong>Postgres</strong> e <strong>MySQL</strong>.</>
  },
  {
    emoji: "⏱️",
    title: "Metodologias Ágeis",
    description: <>Abordagens de desenvolvimento focadas em colaboração e entrega contínua, como <strong>Scrum</strong> e <strong>Kanban</strong>.</>
  },
  {
    emoji: "🔧",
    title: "Ferramentas Adicionais",
    description: <>Ferramentas para melhorar o processo de desenvolvimento e garantir a qualidade, como testes automatizados e gerenciamento de servidores.</>
  },
  {
    emoji: "🎨",
    title: "Habilidades Extras",
    description: <>Habilidades adicionais que contribuem para o sucesso, como design de interfaces (<strong>Photoshop</strong>, <strong>Figma</strong>, <strong>Canva</strong>) e prototipagem rápida.</>
  }
]