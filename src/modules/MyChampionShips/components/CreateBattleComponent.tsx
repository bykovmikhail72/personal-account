import Button from 'ui/Button'
import Typography from 'ui/Typography'
import IconBasket from 'ui/icons/IconBasket'

import cn from 'classnames'

import styles from './styles.module.scss'

const mok = [
  'Модуль А',
  'Модуль B',
  'Модуль C',
  'Модуль D',
  'Модуль E',
  'Модуль F',
]

const CreateBattleComponent = ({ title, id, status }) => {
  const handleDelete = () => {
    console.log('delete')
  }

  const handleEdit = () => {
    console.log('edit')
  }
  return (
    <div
      className={cn(styles.wrapper, status === 'Завершено' && styles.finished)}>
      <div className={styles.header}>
        <div className={styles.about}>
          <Typography weight="semiBold" size={16} className={styles.title}>
            {title}
          </Typography>
          <Typography
            color={status === 'В процессе' ? '#4DCB4A' : '#CB4A69'}
            size={10}
            weight="semiBold"
            className="status">
            {status}
          </Typography>
        </div>
        <Button disabled={status === 'Завершено'}>+ Добавить форму</Button>
      </div>

      <div className={styles.modules}>
        {mok.map((item, i) => {
          return (
            <div key={i} className={styles.item}>
              <Typography size={14}>{`${item}:`}</Typography>
              <div className={styles.buttons}>
                <Button onClick={handleEdit} disabled={status === 'Завершено'}>Редактировать</Button>
                <IconBasket onClick={handleDelete} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CreateBattleComponent
