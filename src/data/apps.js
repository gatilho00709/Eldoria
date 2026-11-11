
import {
  Image,
  NotebookPen,
  ListChecks,
  CalendarDays,
  ChartNoAxesCombined,
  Crown,
  MessageCircle,
  CloudSun,
} from 'lucide-react'

import { Code2 } from 'lucide-react'

export const apps = [

  {
  id: 'code-library',
  name: 'Biblioteca de Código',
  description: 'Organize, edite e compartilhe códigos.',
  icon: Code2,
  status: 'Disponível',
  },

  {
    id: 'thumbnail',
    name: 'Criador de Thumbnail',
    description: 'Crie thumbnails profissionais para seus vídeos.',
    category: 'Criação',
    icon: Image,
    status: 'Em breve',
  },
  {
    id: 'notes',
    name: 'Bloco de Notas',
    description: 'Escreva, edite e organize suas ideias.',
    category: 'Produtividade',
    icon: NotebookPen,
    status: 'Disponível',
  },
  {
    id: 'tasks',
    name: 'Gerenciador de Tarefas',
    description: 'Organize atividades, projetos e compromissos.',
    category: 'Produtividade',
    icon: ListChecks,
    status: 'Disponível',
  },
  {
    id: 'calendar',
    name: 'Calendário Inteligente',
    description: 'Planeje seus dias e acompanhe seus eventos.',
    category: 'Produtividade',
    icon: CalendarDays,
    status: 'Disponível',
  },
  {
    id: 'habits',
    name: 'Rastreador de Hábitos',
    description: 'Acompanhe seus hábitos e sua evolução.',
    category: 'Produtividade',
    icon: ChartNoAxesCombined,
    status: 'Disponível',
  },
  {
    id: 'eldoria-library',
    name: 'Biblioteca de Eldoria',
    description: 'Explore histórias, registros e conhecimentos.',
    category: 'Eldoria',
    icon: Crown,
    status: 'Em breve',
  },
  {
  id: 'connect',
  name: 'Eldoria Connect',
  description: 'Converse, compartilhe imagens e faça chamadas.',
  category: 'Comunicação',
  icon: MessageCircle,
  status: 'Disponível',
  },
  {
  id: 'weather',
  name: 'Observatório Climático',
  description: 'Acompanhe o clima atual e previsões meteorológicas.',
  category: 'Utilidades',
  icon: CloudSun,
  path: '/app/weather',
  status: 'Disponível',
},
]
