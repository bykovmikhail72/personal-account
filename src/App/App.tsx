import { Route, Routes } from 'react-router-dom'
import AuthPage from '../modules/Auth/pages/AuthPage'
import RegistrationPage from '../modules/Registration/pages/RegistrationPage'
import Page from '../lib/pages/index'
import MyPage from '../modules/MyPage/pages/MyPage'
import TeamPage from '../modules/TeamPage/pages/TeamPage'
import HistoryPage from '../modules/HistoryPage/pages/HistoryPage'
import ReportsPage from '../modules/ReportsPage/pages/ReportsPage'
import CriterionAssessmentPage from '../modules/CriterionAssessmentPage/pages/CriterionAssessmentPage'
import ModulePage from '../modules/CriterionAssessmentPage/pages/ModulPage/ModulePage'

function App() {
  const login = true
  if (!login) {
    return (
      <Routes>
        <Route>
          <Route path="/" element={<AuthPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
    )
  }

  if (login) {
    return (
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/" element={<MyPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route element={<CriterionAssessmentPage />} path="/assessment" />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/assessment/module" element={<ModulePage />} />
        </Route>
      </Routes>
    )
  }
}

export default App
