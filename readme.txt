echo "# PracticalBootstrap" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/alexcar/PracticalBootstrap.git
git push -u origin main

Criar uma branch para cada capítulo
===================================
Create a branch to each chapter

Essa linha serve como base de teste para o comando checkout.

##########################################################################################################

Criar um projeto web para visualizar conteúdos HTML estáticos

$ dotnet new web --name NomeDoProjeto
$ cd NomeDoProjeto
$ mkdir wwwroot

Comandos
========
git log --oneline
git tag -a v1.0 -m "stable version of the practical bootstrap"

Trabalhando com branch
----------------------
git branch <nome da branch>
git checkout <nome da branch>

git add .
git commit -m "mensagem"

git checkout main
git merge <nome da branch>
git branch -d <nome da branch>
git branch


Practical Bootstrap page 47
Git Tutorial page 51


Inserir a linha app.UseStaticFiles(); no arquivo Startup.cs

my-git-repo
===========
$ git init # initialize a new repository
$ git add index.html # start tracking index.html. Here we have staged a snapshot.

$ git config --global user.name "Your Name"
$ git config --global user.email your.email@example.com

Undo changes in snapshot
------------------------
$ git log --oneline
$ git checkout a7d0cca

Para excluir um commit, basta encontrar o ID com o comando abaixo
$ git log --oneline

Em seguida, execute o comando
$ git revert 514fbe7

 Undo changes in working directory
 ---------------------------------
 Se desejar excluir mudanças tracked files
 $ git reset --hard
 
 O comando acima exclui mudanças realizadas em arquivos já existentes antes de fazer commit.
 Se desejar excluir arquivos criados, digite o comando abaixo
 
 $ git clean -f
 
 O comando acima vai remover todos os novos arquivos untracked antes de fazer commit.
 
 pull - receber mudanças do repositório remoto
 push - enviar mudanças para o repositório remoto
 fetch - recebe as referências 
 
 
 Exercise TodoApp
 ----------------
 1. Create a new repository
 cd \code\git
 mkdir TodoApp
 git init
 git config user.name "Alexcar"
 git config user.email alexandre.carvalho@live.com
 
2. Create a file named todo.txt in the directory and put in some text.

3. Stage todo.txt
git add todo.txt

4. Commit the project and put in a short commit message.
git commit -m "add todo.txt file"

5. Create two new files named done.txt and working.txt

6. Stage and commit those files.
git add done.txt working.txt
git commit -m "add done.txt and working.txt files"

7. Rename working.txt to in progress.txt

8. Add some text to done.txt

9. Check the directory status.
git status

10. Stage in progress.txt and done.txt
git add progress.txt done.txt

11. Unstage done.txt
git rm --cached done.txt

12. Commit the project
git commit -m "add progress.txt file"

13. Check the directory status.
git status

14. Create a file named test.txt and put in some text.

15. Stage and commit the project
git add test.txt
git commit -m "add test.txt file"

16. Revert the last commit
git log --oneline
git revert 11d42b9
# o arquivo test.txt foi excluído do working directory. 

Project todo-list

1. Create repository in GitHub

2. initializing a repository
mkdir todo-list
cd todo-list
git init

3. Linking repositories
git remote # list the remote repositories
git rm [remote_name] # remove repository
git remote add origin https://github.com/alexcar/todo-list.git 
git remote -v

4. Add README.md file
git add README.md 
git commit -m "initial commit"

5. Push project to remote repository
git push <remote_name> <branch_name>
git push origin master

6. Create a file index.html

7. Stage and commit
git add index.html
git commit -m "Add index.html that contains the project skeleton. See: #6"

8. Push 
git push origin master

# Para atribuir um número de issue e fechar automaticamente no commit:
git commit
# quando abrir o editor de texto informe:
-------------------------------------------------
Add basic style in index.html

 Resolve #5
-------------------------------------------------

palavras chaves a serem usadas:
close
closes
closed
fix
fixes
fixed
resolve
resolves
resolved

9. Creating a branch
git branch develop

10. Creating a branch and immediately switch to a new branch
git checkout -b testing

11. Deleting a branch
git branch -d testing

12. Merge branch
git checkout develop
git branch improve-readme-description
git checkout improve-readme-description
# Change the README.md file
git add README.md
git commit
git checkout develop
git merge improve-readme-description
git push origin develop

13. Create a pull request
git checkout develop
git branch improve-app-style
git checkout improve-app-style
# Change the index.html file
git add index.html
git commit -m "Add basic color changes on item rows"
git status
git push origin improve-app-style 
# Change the index.html file
git commit -a -m "Make the list items unselectable"
git push origen improve-app-style

14. Compare two branches
git checkout master
git diff master..develop
git diff # compare file.


Git Workflow
============

1. Create the repository
2. Create the Project
3. Create the Issue
4. No direct push to master
5. Any merge into master needs a Pull Request
6. Use the wiki to document your code
7. Always know where you are
8. Pull remote changes before any action
9. Take care of your cimmit message



https://www.pokertracker.com/user/72819/edit
JACarvalho /  Jsilva@2019
https://www.holdemmanager.com/hm3/#pricing

Chapter X
exercices from chapter x


Was developed a responsive navigation bar with menu


Cenários
========
1. A branch develop tinha arquivos que não estavam na branch main.
git checkout develop
git merge main # visualizou mensagens de conflito
git add .
git commit -m "resolvendo merge"
git checkout main
git merge --no-ff develop
git push origin main

2. Depois de finalizar o trabalho de uma issue, enviar a branch para solicitar a 
abertura de um pull request.
git add .
git commit
-------------------------
Título

Resolve #12
-------------------------
git push origin chapter6

# Realizar o pull request no github

# atualiza as branchs locais
git checkout develop
git merge chapter6
git branch -d chapter6
git pull origin develop
git diff origin/develop..develop
