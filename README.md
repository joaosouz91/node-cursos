# node-cursos
1) Instalar o mongodb normalmente.
2) Criar pasta para o banco (exemplo: "c:\nodejsdb\banco_331581")
3) Executar o comando abaixo:
-> mongod --dbpath c:\nodejsdb\banco_331581

4) Abrir o prompt de comando do mongo ([caminho de instalação do mongodb]\Server\4.0\bin\mongo.exe) e executar os comandos abaixo:
-> use banco_331581
-> db.usuarios.insert({'nome':'admin', 'senha':'admin'})

5) De volta ao prompt do windows, dirigir-se ao diretório do projeto [crud-cursos] e executar:
-> node app

6) Abrir endereço no navegador: http://localhost:3000

Usuário: admin
Senha: admin
