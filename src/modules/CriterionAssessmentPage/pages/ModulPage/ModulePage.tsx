import { useEffect, useState } from 'react'
import PageWrapper from '../../../../lib/components/PageWrapper/PageWrapper'
import StepOne from '../../components/StepOne/StepOne'

import SuccessCard from '../../../../lib/components/SuccessCard/SuccessCard'

import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import StepTwo from 'modules/CriterionAssessmentPage/components/StepTwo/StepTwo'
import StepThree from 'modules/CriterionAssessmentPage/components/StepThree/StepThree'

const ModulePage = () => {
  const [stepOneForm, setStepOneForm] = useState('')
  const [step, setStep] = useState(1)

  const navigate = useNavigate()

  const handleClickStepOne = (data: string) => {
    setStepOneForm(data)

    if (data !== '' && data) {
      setStep(2)
    }
    console.log(data)
  }

  const handleClickStepTwoNext = () => {
    setStep(3)
  }

  const handleClickStepThreeNext = () => {
    setStep(4)
  }

  const handlePrev = () => {
    setStep((prev) => prev - 1)
  }

  useEffect(() => {
    console.log(stepOneForm)
  }, [stepOneForm])

  const handleClick = () => {
    navigate('/assessment')
  }

  return (
    <PageWrapper title="Модуль А">
      {step === 1 && <StepOne handleClick={handleClickStepOne} />}
      {step === 2 && (
        <StepTwo
          handleClickStepTwoNext={handleClickStepTwoNext}
          handlePrev={handlePrev}
        />
      )}
      {step === 3 && (
        <StepThree onPrev={handlePrev} onNext={handleClickStepThreeNext} />
      )}
      {step === 4 && (
        <SuccessCard
          handleClick={handleClick}
          leftTitleButton="Отправить еще один ответ"
          rightTitleButton="Вернуться на главную"
          rightButtonClassName={styles.rightButton}
          title={'Данные успешно отправлены!'}
          description={'Теперь пора оценить другую команду :)'}
        />
      )}
    </PageWrapper>
  )
}

export default ModulePage
