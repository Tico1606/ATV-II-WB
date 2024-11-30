import './index.css';  // Importe o arquivo CSS aqui, para aplicar o Tailwind CSS
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

class ClientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'clients',
      clients: [
        { id: 1, nome: 'João Silva', telefone: '(11) 99999-9999', email: 'joao@email.com', genero: 'M' },
        { id: 2, nome: 'Maria Santos', telefone: '(11) 88888-8888', email: 'maria@email.com', genero: 'F' },
      ],
      services: [
        { id: 1, nome: 'Corte de Cabelo', valor: 50.00 },
        { id: 2, nome: 'Manicure', valor: 30.00 },
        { id: 3, nome: 'Design de Sobrancelhas', valor: 40.00 },
      ]
    };
  }

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  }

  renderClientForm() {
    return (
      <div className="space-y-4">
        <Input placeholder="Nome" className="w-full p-3 border border-gray-300 rounded" />
        <Input placeholder="Telefone" className="w-full p-3 border border-gray-300 rounded" />
        <Input placeholder="Email" className="w-full p-3 border border-gray-300 rounded" />
        <select className="w-full p-3 border border-gray-300 rounded">
          <option value="">Selecione o Gênero</option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
        <Button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
          Cadastrar Cliente
        </Button>
      </div>
    );
  }

  renderServiceForm() {
    return (
      <div className="space-y-4">
        <Input placeholder="Nome do Serviço" className="w-full p-3 border border-gray-300 rounded" />
        <Input type="number" placeholder="Valor" className="w-full p-3 border border-gray-300 rounded" />
        <Button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
          Cadastrar Serviço
        </Button>
      </div>
    );
  }

  renderClientList() {
    return this.state.clients.map(client => (
      <Card key={client.id} className="mb-4 bg-white border shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{client.nome}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Telefone: {client.telefone}</p>
          <p>Email: {client.email}</p>
          <p>Gênero: {client.genero === 'M' ? 'Masculino' : 'Feminino'}</p>
          <div className="mt-4 space-x-2">
            <Button variant="outline">Editar</Button>
            <Button variant="destructive">Excluir</Button>
          </div>
        </CardContent>
      </Card>
    ));
  }

  renderServiceList() {
    return this.state.services.map(service => (
      <Card key={service.id} className="mb-4 bg-white border shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{service.nome}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Valor: R$ {service.valor.toFixed(2)}</p>
          <div className="mt-4 space-x-2">
            <Button variant="outline">Editar</Button>
            <Button variant="destructive">Excluir</Button>
          </div>
        </CardContent>
      </Card>
    ));
  }

  renderTabContent() {
    if (this.state.activeTab === 'clients') {
      return (
        <Card className="bg-white p-4">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Gerenciamento de Clientes</CardTitle>
          </CardHeader>
          <CardContent>{this.renderClientForm()}</CardContent>
          <div className="mt-8">
            {this.renderClientList()}
          </div>
        </Card>
      );
    }
    
    return (
      <Card className="bg-white p-4">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Gerenciamento de Serviços</CardTitle>
        </CardHeader>
        <CardContent>{this.renderServiceForm()}</CardContent>
        <div className="mt-8">
          {this.renderServiceList()}
        </div>
      </Card>
    );
  }

  render() {
    const { activeTab } = this.state;
    
    return (
      <div className="container mx-auto p-6">
        <Card className="mb-8 bg-gray-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">World Beauty (WB)</CardTitle>
          </CardHeader>
        </Card>

        <div className="mb-4 grid grid-cols-2 gap-2">
          <Button 
            className={`py-2 text-center rounded ${activeTab === 'clients' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => this.handleTabChange('clients')}
          >
            Clientes
          </Button>
          <Button 
            className={`py-2 text-center rounded ${activeTab === 'services' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => this.handleTabChange('services')}
          >
            Serviços
          </Button>
        </div>

        {this.renderTabContent()}
      </div>
    );
  }
}

export default ClientList;