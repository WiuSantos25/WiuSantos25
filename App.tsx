import React, { useState } from 'react';
import { Printer, FileSpreadsheet, Home, BarChart3 } from 'lucide-react';
import PrinterManagement from './components/PrinterManagement';
import PaperManagement from './components/PaperManagement';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'printers' | 'paper' | 'reports'>('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'printers':
        return <PrinterManagement />;
      case 'paper':
        return <PaperManagement />;
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">PrintManager Pro</h1>
        </div>
        <nav className="mt-6">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
              activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <Home className="w-5 h-5 mr-3" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('printers')}
            className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
              activeTab === 'printers' ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <Printer className="w-5 h-5 mr-3" />
            Impressoras
          </button>
          <button
            onClick={() => setActiveTab('paper')}
            className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
              activeTab === 'paper' ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <FileSpreadsheet className="w-5 h-5 mr-3" />
            Resmas
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
              activeTab === 'reports' ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <BarChart3 className="w-5 h-5 mr-3" />
            Relatórios
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;