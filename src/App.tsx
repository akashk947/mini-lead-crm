import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { DashboardLayout } from './layout/DashboardLayout';
import { LeadsPage } from './pages/LeadsPage';
import { BoardPage } from './pages/BoardPage';
import { CreateLeadPage } from './pages/CreateLeadPage';
import { EditLeadPage } from './pages/EditLeadPage';
import { LeadProvider } from './context/LeadContext';

function App() {
  return (
    <LeadProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route index element={<Navigate to="/leads" replace />} />
            <Route path="leads" element={<LeadsPage />} />
            <Route path="board" element={<BoardPage />} />
            <Route path="leads/create" element={<CreateLeadPage />} />
            <Route path="leads/:id/edit" element={<EditLeadPage />} />
            <Route path="*" element={<Navigate to="/leads" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LeadProvider>
  );
}

export default App;
