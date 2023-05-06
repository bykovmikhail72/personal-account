import { Form, Select } from 'antd'


import styles from './styles.module.scss'
import Typography from 'ui/Typography'
import Button from 'ui/Button'
import IconLeft from 'ui/icons/IconLeft'
import IconRight from 'ui/icons/IconRight'


const mok = [
  {
    name: 'Представлено 3 самостоятельных фличарта. Вычесть по 0,1 за отсутствие каждого. ',
    rate: [0, 0.1, 0.2, 0.3],
    descr: '-- Судья 1',
  },
  {
    name: 'Представлено 3 самостоятельных фличарта. Вычесть по 0,1 за отсутствие каждого. ',
    rate: [0, 0.1, 0.2, 0.3],
    descr: '-- Судья 2',
  },
  {
    name: 'Представлено 3 самостоятельных фличарта. Вычесть по 0,1 за отсутствие каждого. ',
    rate: [0, 0.1, 0.2, 0.3],
    descr: '-- Судья 3',
  },
]

interface IStepThree {
    onNext?: () => void
    onPrev?: () => void
}

const StepThree = ({ onNext, onPrev }: IStepThree) => {
  return (
    <div className={styles.container}>
      <Typography size={16} weight="semiBold">
        Шаг 3. Субъективная оценка от 3-х судей
      </Typography>
      <Form className={styles.list}>
        {mok.map(({ name, rate, descr }, i) => {
          return (
            <div key={i} className={styles.item}>
              <Typography size={14} weight="medium" className={styles.name}>
                {`${i + 1}. ${name}`}
              </Typography>
              <Select
                style={{ width: 128 }}
                options={rate.map((item) => ({
                  name: item,
                  value: item,
                  label: item,
                }))}
              />
              <Typography color={'#A5A5A5'} size={10}>
                {descr}
              </Typography>
            </div>
          )
        })}

        <div className={styles.buttons}>
          <Button
            onClick={onPrev}
            className={styles.leftIcon}
            leftIcon={<IconLeft />}>
            Назад
          </Button>
          <Button onClick={onNext} rightIcon={<IconRight />}>Отправить</Button>
        </div>
      </Form>
    </div>
  )
}

export default StepThree
