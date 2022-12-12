# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.




1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Well, right off the bat I would start to run the $ rails console in order to add the foreign key. Proceeding, I am unsure of the next steps, however I do understand this would be in the student model, so both models can link. To the best of my knowledge the foreign key is also a primary key.

Researched answer: To fix this problem, head into the rails console and create a variable in the student model to store an entry. This will give you a new ruby has with a 'person_id'. This will match the primary id of one of the students used for the foreign key. The name of the created foreign key in this case will be student_id along with an integer. The last step is to run a rails db:migrate to update the changes.




2. Which RESTful routes must always be passed params? Why?

Your answer: It seems to me that all of the RESTful routes must be passed params. May I ask you if your question is if there are specific RESTful routes that are necessary and always are passed in rails? From my knowledge all of the Restful routes must always be passed params.

*********Researched answer: I have spent a lot of time on this research question, coming back to it multiple times. I'm very confused and have had trouble finding this answer. Out of all the previous assessments, there has not been a question I couldn't find the answer to.     I am thinking that 'index', 'show', and 'create' must always be passed because these are part of the view, what the user can see. It makes sense to me that they will require ERB surrounding the params to display these in the browser. The correct answer is either right in front of my face, or it's in depth. My logic tells me that RESTful routes that are displayed will require params. 




3. Name three rails generator commands. What is created by each?

Your answer: The first rails generator command I know of is $ rails generate model: This creates a model or 'table' in the database. This also allows you to input column names. Another rails generator command is $ rails generate migration, which is different from the $ rails db:migrate command. I believe this updates the schema after you have made changes to an already created modl. The third rails generate command is $ rails generate controller. This creates a controller that is necessary for Model/View/Controller aspect of a rails application. This is the brains of the app and will give direction to everything within the files in rails.

Researched answer: The rails generate model command will create a 'table' name, column name, and with every column, the data type. The rails generate migration command is useful when changes need to be made to the database. Once changes are made to the database, this command will be entered. The rails generate controller command creates a controller file in which methods will be used.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students INDEX: will gather entire list of data

action: "POST" location: /students CREATE: takes new data and adds this to the database.

action: "GET" location: /students/new NEW: sends an HTML form allowing user to type in data to be sent to database.

action: "GET" location: /students/2 SHOW: query for one instance in the database will be displayed.

action: "GET" location: /students/2/edit EDIT: updates an instance in the database previously created.

action: "PATCH" location: /students/2 UPDATE: overwrites an existing instance in the database.

action: "DELETE" location: /students/2 DELETE: removes an item from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).



    --------------- NOTE ORGANIZER 1.0----------------
1. As a user, I want to clearly see my landing page so that navigating is easy.
2. As a user, I want to create a note, so I can add it to my to-do list.
3. As a user, I want to be redirected to the home landing page so that after I create my note, I don't get lost.
4. As a user, I want to have the ability to create notes and place all of them in a table, so I can stay organized.
5. As a user, I want to add pictures to my notes, so I can have a quick visual of them.
6. As a user, I want to change existing notes, so I'm able to modify my to-do lists.
7. As a user, I want to sign off and delete notes, so that completed tasks are no longer in my way.
8. As a user, I want I want to have my own personal login, so my notes are private and cannot be changed by others.
9. As a user, I want to easily click into each table, so I can view my associated notes.
10. As a user, I want my private notes to be safe when I leave the page, so they cannot be manipulated by others.