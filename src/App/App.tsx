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
import MyChampionShips from 'modules/MyChampionShips/pages/MyChampionShips'
import ModuleForm from 'modules/MyChampionShips/pages/ModuleForm/ModuleForm'
import CreateTeamPage from 'modules/CreateTeamPage/pages/CreateTeamPage'

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
          <Route path="/assessment/module" element={<ModulePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/champion-ships" element={<MyChampionShips />} />
          <Route path="/champion-ships/form" element={<ModuleForm />} />
          <Route path="/create-command" element={<CreateTeamPage />} />
        </Route>
      </Routes>
    )
  }
}

export default App
