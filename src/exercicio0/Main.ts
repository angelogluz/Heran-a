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
    const funcionario: Funcionario = geraUsuario(nomeGerado) as Funcionario;
    funcionario.nome = nomeGerado;

    const nomeFornecedor = faker.company.name();
    const fornecedor: Fornecedor = geraUsuario(nomeFornecedor) as Fornecedor;
    fornecedor.nome = nomeFornecedor;

    usuarios.push(funcionario)
    usuarios.push(fornecedor)

}
console.log(usuarios)

function geraUsuario(nomeGerado: string){
    const partesNome = nomeGerado.split(" ");
    const usuario: Usuario = new Usuario(faker.internet.username(
        {
            firstName: partesNome[0],
            lastName: partesNome[partesNome.length - 1]
        })
        , faker.internet.password(), "" + new Date().getTime())

        return usuario;
}