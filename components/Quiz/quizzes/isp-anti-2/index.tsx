import { IQuiz } from '../IQuiz'

const quiz: IQuiz = {
  name: 'isp-anti-2',
  question: 'Какие приёмы помогают избегать грязных интерфейсов или рефакторить их?',
  variants: [
    {
      text: 'Расширение интерфейсов от более широкого родительского',
      description:
        'Наоборот, если родительский интерфейс имеет больше методов и полей, то выше вероятность, что один из них будет не нужен в сущности, реализующей этот интерфейс'
    },
    {
      text: 'Разбиение на интерфейсы, содержащие меньшее количество методов'
    },
    {
      text: 'Выделение интерфейса, извлечение класса, суперкласса'
    }
  ],
  meta: {
    correctAnswers: [1, 2]
  }
}

export default quiz