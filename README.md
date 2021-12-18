Welcome to my Final Project - Event Calendar.
==========================
<br>
<big>This is a browser app to search, save and manage events.</big>
<br>
<br>

To start working with the app please do one of the following:
==========================
1. Copy the github link https://github.com/Omakatayo/Event-calendar.git and open the repository from Version Control in JDK of your choice
2. Download zip file, unpack it on your computer and open the project in JDK of your choice

Second crucial step is MySQL setup
==========================

Please copy code below and run it in MySQL Workbench to create a database and give permissions to that has been set up in app properties.<br><br>

<code>create database event_calendar;

use event_calendar;

CREATE USER 'ironhacker'@'localhost' IDENTIFIED BY '1r0nH@ck3r';

GRANT ALL PRIVILEGES ON \*.\* TO 'ironhacker'@'localhost';

FLUSH PRIVILEGES;</code><br><br>

Third step is IntelliJ or IDE of your choice
==========================

Open main project folder in IDE and run all the microservices in order:
1. Discovery
2. Gateway
3. Event
4. Calendar
5. Register

If you can't run services click on pom file of each project with right mouse key and add them to Maven project.
Then you'll be able to run them.

Fourth step is VS Code
==========================

Open folder ec-client in VS Code, open new terminal and run command "ng install".
After all the dependencies installed you can run the app by "ng serve" command.
Then just open your browser at https://localhost:4200
It is important to run it on port 4200.


Program functionality
==========================

<big>For yor convenience 3 users are created:</big>
1. Admin user: <b><font color="yellow">Shubham</font></b>
2. Organizer user: <b><font color="yellow">Salva</font></b>
3. Standard user: <b><font color="yellow">Jaume</font></b>

Password for every user is "<b><font color="yellow">12345</font></b>"

You can use any of those accounts for authorization but program functionality will depend on the user you'll choose.<br><br>


<big>This is what you can do:</big>

<big>1. Browse through events without login</big>

<big>2. Search for events:</big>
- by name (partial names as well)
- by start date (you see events that are on this date or sooner - date format "YYYY-MM-DD")
- by category (MOVEMENT, SPIRITUAL, MEN_CIRCLES)
- by organizer (Salva)
- by availability (you'll see events that you can register to)

<big>3. You can register your own account (first part of email address will be your username)</big>

<big>4. When you're registered user you can save events to your personal calendars.
Also you can register to an event or unregister from one.</big>

<big>4. You can view your account's details going to "My account"</big>

- If your account type is "Organizer" you'll find there another tab called "Organizer".

- You'll find there all events that were created by your user.

- You'll be able to create new events and edit existing ones just by clicking at them.

- You can also delete events here.

<big>5. On "My calendars" tab you'll find all your calendars and events assigned to them.
Just click on a tab with the calendar name.</big>


<big>That's mostly it :). I hope you like my project. I plan to do some more stuff in near future like integration with Google Maps :).
Thanks for stepping by and have a nice day :)
