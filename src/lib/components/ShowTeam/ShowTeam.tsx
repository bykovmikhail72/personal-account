import IconOk from 'ui/icons/IconOk'
import { Modal } from '../Modal'
import Typography from 'ui/Typography'

import styles from './styles.module.scss'

const ShowTeam = ({ showModal, handleClick, data, id }) => {
  return (
    <Modal
      open={showModal}
      onClose={handleClick}
      title={`Команда: ${data[id as number]?.name}`}
      titleSize={16}
      content={
        <table className={styles.modal}>
          <tbody>
            <tr>
              <td>
                <Typography color={'#656ED3'}>ФИО участников:</Typography>
              </td>
              <td>
                <Typography color={'#656ED3'}>Капитан:</Typography>
              </td>
              <td>
                <Typography color={'#656ED3'}>E-mail:</Typography>
              </td>
            </tr>
            {data[id as number]?.members.map((item, i) => {
              return (
                <tr>
                  <td className={styles.fullName}>{`${i + 1}. ${
                    item.fullName
                  }`}</td>
                  <td>{item.isCaptain && <IconOk />}</td>
                  <td>{item.email}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      }
    />
  )
}

export default ShowTeam
