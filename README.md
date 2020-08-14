# Not_Twitter
###### A basic twitter clone built to demonstrate my knowledge of the full stack coming fresh out of class using technologies I haven't used prior. 
This application is essentially a torn-down version of "Twitter" that allows anyone to insert a name, and a Tweet. I have added some safe-guards to the website, such as utilizing NPM to install "bad-words", a dependancy that prevents someone from inserting in any bad-words on the client-side prior to entering in the database. If a "bad-word", does get in, it will be replaced with asterisks. Another safe-guard dependancy implemented "express-rate-limit", which only allows for each IP address to "Tweet" something out once every 30 seconds.
<hr/>

###### So, why build a knock-off Twitter?
I have used Twitter for over a decade now, and it's something that I understand the grasp of **extremely** well. I also felt like it was time to experience new technologies since I haven't really messed around with anything other than what I learned in class, so this was an example of using that as well.
<hr/>

###### Technologies / Dependancies used in this.
HTML, JavaScript, CSS, Node.js, NPM, MongoDB, dependancies: "bad-words", "cors", "express", "express-rate-limit", "monk", "morgan", "nodemon"
<hr/>
