import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEntrepriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Luiz', 'Otavio', '11111111');

    expect(sut).toHaveProperty('firstName', 'Luiz');
    expect(sut).toHaveProperty('lastName', 'Otavio');
    expect(sut).toHaveProperty('cpf', '11111111');
  });

  it('should have methods to get name and idn for individual custumers', () => {
    const sut = createIndividualCustomer('Luiz', 'Otavio', '11111111');

    expect(sut.getName()).toBe('Luiz Otavio');
    expect(sut.getIDN()).toBe('11111111');
  });
});

describe('EntrepriseCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have name, cnpj', () => {
    const sut = createEntrepriseCustomer('Empresa Gigante', '222.222.222');

    expect(sut).toHaveProperty('name', 'Empresa Gigante');
    expect(sut).toHaveProperty('cnpj', '222.222.222');
  });

  it('should have methods to get name and idn for entreprise custumers', () => {
    const sut = createEntrepriseCustomer('Empresa Gigante', '222.222.222');

    expect(sut.getName()).toBe('Empresa Gigante');
    expect(sut.getIDN()).toBe('222.222.222');
  });
});
