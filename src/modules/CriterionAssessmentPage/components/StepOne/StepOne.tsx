import { Select } from 'antd'
import Typography from '../../../../ui/Typography'
import Button from '../../../../ui/Button'
import IconRight from '../../../../ui/icons/IconRight'

import styles from './styles.module.scss'
import { useState } from 'react'

interface IStepOneProps {
  module?: string
  title?: string
  id?: number
  handleClick: (data: string) => void
}

const comand = ['Заводные котята', 'Вторая команда', 'Еще команда']

const StepOne = ({
  module = 'A',
  title = 'Анализ информационного потенциальной целевой аудитории',
  id = 1,
  handleClick,
}: IStepOneProps) => {
  const [stepOneForm, setStepOneForm] = useState<string>('')

  const handleChange = (value: string) => {
    setStepOneForm(value)
  }

  return (
    <div className={styles.container}>
      <Typography size={18} weight="bold">{`Модуль ${module}`}</Typography>
      <Typography className={styles.title} size={14}>
        {title}
      </Typography>
      <Typography weight="semiBold" className={styles.step} size={16}>
        Шаг 1.
      </Typography>
      <div className={styles.input}>
        <Typography size={14}>Выберите команду для оценки:</Typography>
        <Select
          onChange={handleChange}
          style={{
            width: 258,
          }}
          options={comand.map((item) => ({
            label: item,
            name: item,
            value: item,
          }))}
        />
        <Button
          onClick={() => handleClick(stepOneForm)}
          rightIcon={<IconRight />}>
          Далее
        </Button>
      </div>
    </div>
  )
}

export default StepOne
