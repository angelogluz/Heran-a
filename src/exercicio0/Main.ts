import { Faker, pt_BR } from '@faker-js/faker';
import { Usuario } from './Usuario';
import { Funcionario } from './Funcionario';
import { Fornecedor } from './Fornecedor';

const faker = new Faker({
    locale: [pt_BR],
});

const usuarios: Usuario[] = [];

for (let index = 0; index < 20; index++) {
    const nomeGerado = faker.person.fullName();
    const partesNome = nomeGerado.split(" ");
    const funcionario: Funcionario = new Funcionario(faker.internet.username(
        {
            firstName: partesNome[0],
            lastName: partesNome[partesNome.length - 1]
        })

        , faker.internet.password(), "" + new Date().getTime())
    funcionario._nome = nomeGerado;

    const nomeFornecedor = faker.company.name();
    const partesNomeFornecedor = nomeFornecedor.split(" ");
    const fornecedor: Fornecedor = new Fornecedor(faker.internet.username(
        {
            firstName: partesNomeFornecedor[0],
            lastName: partesNomeFornecedor[partesNome.length - 1]
        })
        , faker.internet.password(), "" + new Date().getTime())

    fornecedor._nome = nomeFornecedor;

    usuarios.push(funcionario)
    usuarios.push(fornecedor)

}
console.log(usuarios)