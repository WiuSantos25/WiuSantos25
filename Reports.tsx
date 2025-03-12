import React from 'react';
import { FileText, Download, Printer as PrinterIcon } from 'lucide-react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const Reports = () => {
  const generatePrinterReport = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(16);
    doc.text('Relatório de Impressoras', 14, 20);
    
    // Add date
    doc.setFontSize(10);
    doc.text(`Data: ${new Date().toLocaleDateString()}`, 14, 30);
    
    // Add table
    const headers = [['Modelo', 'Número de Série', 'Setor', 'Tipo', 'Status']];
    const data = [
      ['HP LaserJet Pro M404dn', 'VNB3K12345', 'TI', 'Própria', 'Ativa'],
      ['Brother MFC-L8900CDW', 'U63987432', 'RH', 'Locada', 'Ativa']
    ];
    
    (doc as any).autoTable({
      head: headers,
      body: data,
      startY: 40,
      theme: 'grid'
    });
    
    // Save the PDF
    doc.save('relatorio-impressoras.pdf');
  };

  const generatePaperReport = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(16);
    doc.text('Relatório de Consumo de Resmas', 14, 20);
    
    // Add date
    doc.setFontSize(10);
    doc.text(`Data: ${new Date().toLocaleDateString()}`, 14, 30);
    
    // Add summary
    doc.text('Resumo do Mês:', 14, 40);
    doc.text('Total em Estoque: 342 resmas', 14, 50);
    doc.text('Total de Entradas: 500 resmas', 14, 60);
    doc.text('Total de Saídas: 158 resmas', 14, 70);
    
    // Add table
    const headers = [['Data', 'Tipo', 'Quantidade', 'Setor']];
    const data = [
      ['15/03/2024', 'Entrada', '500', '-'],
      ['15/03/2024', 'Saída', '50', 'Financeiro']
    ];
    
    
    (doc as any).autoTable({
      head: headers,
      body: data,
      startY: 80,
      theme: 'grid'
    });
    
    // Save the PDF
    doc.save('relatorio-resmas.pdf');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Relatórios</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Printer Report */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <PrinterIcon className="w-6 h-6 text-blue-500" />
            <h3 className="text-lg font-medium text-gray-900 ml-2">Relatório de Impressoras</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Relatório detalhado com todas as impressoras, status e distribuição por setor.
          </p>
          <button
            onClick={generatePrinterReport}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Gerar PDF
          </button>
        </div>

        {/* Paper Usage Report */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-blue-500" />
            <h3 className="text-lg font-medium text-gray-900 ml-2">Consumo de Resmas</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Relatório mensal de consumo de resmas por setor e movimentações.
          </p>
          <button
            onClick={generatePaperReport}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Gerar PDF
          </button>
        </div>
      </div>

      {/* Report History */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Histórico de Relatórios</h3>
        <div className="bg-white rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gerado por
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">15/03/2024</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Relatório de Impressoras</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">Admin</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={generatePrinterReport}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">14/03/2024</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Consumo de Resmas</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">Admin</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={generatePaperReport}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;