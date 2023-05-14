import PageWrapper from 'lib/components/PageWrapper/PageWrapper'
import Button from 'ui/Button'

import styles from './styles.module.scss'
import Typography from 'ui/Typography'
import { Input, Radio } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useState } from 'react'
import IconX from 'ui/icons/IconX'

const mok = ['0 баллов', '0.1 баллов', '0.2 баллов', '0.3 баллов']

const ModuleForm = () => {
  const [radioValue, setRadioValue] = useState('subject')
  const onChange = (e) => {
    console.log(radioValue)
    setRadioValue(e.target.value)
  }

  const RightHeader = () => {
    return (
      <div className={styles.buttons}>
        <Button className={styles.leftButton}>+ Добавить критерий</Button>
        <Button>Сохранить форму</Button>
      </div>
    )
  }

  return (
    <PageWrapper title=" " headerRight={<RightHeader />}>
      <div className={styles.moduleForm}>
        <div className={styles.name}>
          <Typography weight="light" className={styles.title}>
            Название формы
          </Typography>
          <Input
            style={{
              width: '418px',
            }}
          />
        </div>
        <div className={styles.name}>
          <Typography weight="light" className={styles.title}>
            Описание формы
          </Typography>
          <TextArea
            style={{
              width: '418px',
            }}
          />
        </div>
      </div>

      <div className={styles.criteriaForm}>
        <div className={styles.name}>
          <Typography weight="light" className={styles.title}>
            Описание формы
          </Typography>
          <TextArea
            style={{
              width: '418px',
            }}
          />
        </div>
        <div className={styles.name}>
          <Typography weight="light" className={styles.title}>
            Название формы
          </Typography>
          <Input
            style={{
              width: '418px',
            }}
          />
        </div>
        <div className={styles.name}>
          <Typography weight="light" className={styles.title}>
            Вид оценки
          </Typography>
          <Radio.Group onChange={onChange} value={radioValue}>
            <Radio value={'subject'}>Субъективный</Radio>
            <Radio value={'object'}>Объективный</Radio>
          </Radio.Group>
        </div>

        <div className={styles.criteriaList}>
          {mok.map((item, i) => {
            return (
              <div key={i} className={styles.item}>
                <Typography className={styles.title}>{`Вариант оценки ${
                  i + 1
                }:`}</Typography>
                <div className={styles.input}>
                  <Input
                    style={{
                      width: '418px',
                    }}
                    value={item}
                  />
                  <IconX />
                </div>
              </div>
            )
          })}
        </div>
        
        <div className={styles.sideButtons}>
          <Button className={styles.delete}>Удалить критерий</Button>
          <Button className={styles.add}>+ Вариант оценки</Button>
        </div>
      </div>
    </PageWrapper>
  )
}

export default ModuleForm
