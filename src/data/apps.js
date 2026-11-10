
import {
  Image,
  NotebookPen,
  ListChecks,
  CalendarDays,
  ChartNoAxesCombined,
  Crown,
  MessageCircle,
} from 'lucide-react'

export const apps = [
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
]
