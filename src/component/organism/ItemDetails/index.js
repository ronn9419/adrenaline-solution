import React from 'react'
import moment from 'moment'

import Question from '@component/molecule/Question'

import style from './style.scss'

const ORDER_BY = {
  ASC: 'ASC',
  DESC: 'DESC',
}

export default ({ questions, title }) => {
  const sortMapRef = React.useRef(new Map())
  const [orderBy, setOrderBy] = React.useState(null)

  const formattedQuestions = React.useMemo(() => {
    sortMapRef.current.clear()

    return questions.map((question) => ({
      ...question,
      formattedDate: moment(question.date).format('DD/MM/YYYY'),
    }))
  }, [questions])

  const toggleSort = React.useCallback(() => {
    const sortMap = sortMapRef.current
    const nextOrderBy = orderBy === ORDER_BY.DESC ? ORDER_BY.ASC : ORDER_BY.DESC

    if (!sortMap.get(nextOrderBy)) {
      const ascQuestions = formattedQuestions.sort((a, b) =>
        moment(a.date).isAfter(moment(b.date)) ? 1 : -1
      )

      sortMap.set(ORDER_BY.ASC, ascQuestions)
      sortMap.set(ORDER_BY.DESC, ascQuestions.slice().reverse())
    }

    setOrderBy(nextOrderBy)
  }, [formattedQuestions, orderBy])

  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>

      <div>
        <span
          className={style.sortBtn}
          onClick={toggleSort}
          data-test-id="sort-by"
        >
          SORT BY {orderBy === ORDER_BY.DESC ? 'OLDEST' : 'LATEST'}
          <img src="/assets/svg/sort.svg" />
        </span>
      </div>

      <div className={style.questions}>
        {(sortMapRef.current.get(orderBy) || formattedQuestions).map(
          (question) => (
            <Question key={question.date} {...question} />
          )
        )}
      </div>
    </div>
  )
}
