O front-end está desacoplado. Para funcionar só precisa subir o servidor da 
aplicação e abrir o index.html

Método GET, POST e DELETE apontando pra http://localhost:8080/logstore/log

                                    LAYOUT

Na página index.html é onde é possível visualizar os registros da entidade Log,
pesquisar e escolher quantidade a ser exibido por vez na tabela, sendo listado
em ordem decrescente de ocorrências.

A tela onde é possível realizar a inserção dos dados na entidade Log pode 
ser acessada clicando no botão "INSERT" azul em cima do lado direito. Nesta tela há
2 campos, "Occurrence" e "Content", estão seguindo os requisitos, é só preencher 
os campos e clicar no botão azul "INSERT LOG" e será inserido e redirecionado 
para página index.html ou se preferir voltar sem inserir, tem um botão 
"BACK" azul no lado direito em cima. 

Foi adicionado um botão delete pra cada registro na tabela do log. É só clicar
que será deletado o registro correspondente onde o botão está.
