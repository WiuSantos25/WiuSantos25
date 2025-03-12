import React from 'react';
import { Printer, FileSpreadsheet, Users, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Impressoras */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Printer className="w-10 h-10 text-blue-500" />
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total de Impressoras</h3>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Próprias</span>
              <span className="font-medium text-gray-900">16</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-500">Locadas</span>
              <span className="font-medium text-gray-900">8</span>
            </div>
          </div>
        </div>

        {/* Resmas */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <FileSpreadsheet className="w-10 h-10 text-green-500" />
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Estoque de Resmas</h3>
              <p className="text-2xl font-semibold text-gray-900">342</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Entradas (mês)</span>
              <span className="font-medium text-gray-900">500</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-500">Saídas (mês)</span>
              <span className="font-medium text-gray-900">158</span>
            </div>
          </div>
        </div>

        {/* Setores */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Users className="w-10 h-10 text-purple-500" />
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Setores Ativos</h3>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Maior Consumo</span>
              <span className="font-medium text-gray-900">RH</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-500">Menor Consumo</span>
              <span className="font-medium text-gray-900">TI</span>
            </div>
          </div>
        </div>

        {/* Alertas */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <AlertTriangle className="w-10 h-10 text-red-500" />
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Alertas</h3>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Estoque Baixo</span>
              <span className="font-medium text-gray-900">1</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-500">Manutenção</span>
              <span className="font-medium text-gray-900">2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Atividade Recente</h3>
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Saída de Resmas</p>
                <p className="text-sm text-gray-500">50 resmas - Setor Financeiro</p>
              </div>
              <span className="text-sm text-gray-500">Há 5 minutos</span>
            </div>
          </div>
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Nova Impressora</p>
                <p className="text-sm text-gray-500">HP LaserJet Pro M404dn - TI</p>
              </div>
              <span className="text-sm text-gray-500">Há 2 horas</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Entrada de Resmas</p>
                <p className="text-sm text-gray-500">200 resmas adicionadas ao estoque</p>
              </div>
              <span className="text-sm text-gray-500">Há 1 dia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;