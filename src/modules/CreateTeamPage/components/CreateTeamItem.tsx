import Button from 'ui/Button'
import Typography from 'ui/Typography'

import styles from './styles.module.scss'
import { useState } from 'react'
import ShowTeam from 'lib/components/ShowTeam/ShowTeam'
import { Modal } from 'lib/components/Modal'
import { Input, Select } from 'antd'
import IconX from 'ui/icons/IconX'

const CreateTeamItem = ({
  id,
  mok,
  name,
  teams,
  user,
  chairman,
  date,
  type,
}) => {
  const [showTeam, setShowTeam] = useState(false)
  const [showRename, setShowRename] = useState(false)
  const [showAddMember, setShowAddMember] = useState(false)
  const [elemId, setElemId] = useState(undefined)
  const [renameId, setRenameId] = useState(undefined)
  const [renameValue, setRenameValue] = useState('')
  const [addMemberId, setAddMemberId] = useState(undefined)

  const handleShowTeam = () => {
    const index = mok.findIndex((item) => item.id === id)
    setElemId(index)
    setShowTeam(!showTeam)
  }

  const handleShowRename = (id?: number) => {
    const index = teams.findIndex((item) => item.id === id)
    setRenameValue(teams[renameId]?.name)
    setRenameId(index)
    setShowRename(!showRename)
  }

  const handleRenameChange = (e) => {
    setRenameValue(e.target.value)
  }

  const handleSubmitRename = () => {
    const newObj = { ...teams[renameId], name: renameValue }

    console.log(newObj)
  }

  const handleAddMember = (id?: number) => {
    const index = teams.findIndex((item) => item.id === id)
    setAddMemberId(index)
    setShowAddMember(!showAddMember)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <Typography color={'#6e6e6e'} size={10} weight="light">
          {date}
        </Typography>
        <Typography color={'#6e6e6e'} size={10} weight="light">
          {`Председатель жюри: ${chairman}`}
        </Typography>
        <Typography color={'#6e6e6e'} size={10} weight="light">
          {`Вид: ${type}`}
        </Typography>
      </div>
      <div className={styles.title}>
        <Typography size={16} weight="semiBold">
          {name}
        </Typography>
        <Button className={styles.button}>+ Добавить команду</Button>
      </div>
      <div className={styles.list}>
        {teams.map((item, i) => {
          return (
            <div key={item.id} className={styles.item}>
              <Typography
                className={styles.name}
                size={14}
                weight="semiBold">{`${i + 1}. ${item.name}`}</Typography>
              <div className={styles.buttons}>
                <Button onClick={handleShowTeam} size="small">
                  Посмотреть
                </Button>
                <Button onClick={() => handleShowRename(item.id)} size="small">
                  Редактировать
                </Button>
                <Button onClick={() => handleAddMember(item.id)} size="small">
                  Добавить участника
                </Button>
                <Button size="small">Удалить</Button>
              </div>
            </div>
          )
        })}
      </div>
      {showTeam && (
        <ShowTeam
          showModal={showTeam}
          handleClick={handleShowTeam}
          data={mok}
          id={elemId}
        />
      )}
      {showRename && (
        <Modal
          open={showRename}
          onClose={handleShowRename}
          title={''}
          content={
            <div className={styles.modalWrapper}>
              <div className={styles.content}>
                <Typography size={16} weight="light">
                  Введите название команды:
                </Typography>
                <Input
                  style={{
                    width: '264px',
                  }}
                  value={renameValue}
                  onChange={handleRenameChange}
                />
              </div>
              <Button
                onClick={handleSubmitRename}
                className={styles.button}
                position="right">
                Сохранить
              </Button>
            </div>
          }
        />
      )}
      {showAddMember && (
        <Modal
          open={showAddMember}
          onClose={handleAddMember}
          title={teams[addMemberId].name}
          content={
            <div>
              <div className={styles.addMemberWrapper}>
                <div className={styles.input}>
                  <Typography size={14} weight="regular">
                    Поиск участника:
                  </Typography>
                  <Select
                    showSearch
                    style={{
                      width: '348px'
                    }}
                    options={user.map((item, i) => {
                      return {
                        name: item.fullName,
                        value: item.fullName,
                        key: i
                      }
                    })}
                  />
                </div>
                <div className={styles.addMemberContent}>
                  <table>
                    <tbody> 
                      <tr>
                        <td className={styles.title}><Typography size={14} weight='regular'>ФИО участников:</Typography></td>
                        <td className={styles.checkbox}><Typography size={14} weight='regular'>Капитан:</Typography></td>
                        <td></td>
                      </tr>
                      {user.map((item, i) => {
                        return (
                          <tr key={i}>
                            <td className={styles.title}>{`${i + 1}. ${item.fullName}`}</td>
                            <td className={styles.checkbox}><Input checked={item.isCaptain} type='checkbox' /></td>
                            <td><IconX /></td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          }
        />
      )}
    </div>
  )
}

export default CreateTeamItem
