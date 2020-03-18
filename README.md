Hi if you want to use this project I invite you to the git clone.


BACKEND:

Step 1 => go to the tracks-server folder => npm i

Step 2 => launch the "npm run dev" server
then in another ngrok terminal with the command "ngrok http {Port of server}"
ex: http ngrok 3000.

I'll let you watch the ngrok doc afterwards

PS: The database is in Mongo, so you need to configure it.

The back is ready

FRONTEND:

Go to the tracks file

Step 1 => npm i

Step 2 => recover the http link provided by ngrok and replace it in the tracker.js file.

Step 3 => npm start

The application is ready to be used

PS: 

The file_mocklocation simulates the movement of a user.

If you want to test the application yourself commented on the import in "TrackCreateScreen".

Enjoy
