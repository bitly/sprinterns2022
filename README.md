# 2022 Winternship Public API Explorer
For this winternship, we are building out an GUI that is an explorer for the public facing Bitly API. Users can interface with the different endpoints, or access information from them more easily without needing to run cURL requests. 

### Wintern Leads Points of Contact

Hiiiiiiii this is Margaret 
Slack us or set up a video chat to ask us anything!

Sprintern Leads:
* Kevin Li - FE Engineer
* Grace McGrath - BE Engineer
* Diana Bishop - BE Engineer 

Tech Support:
* Aaron Marks	- BE Engineer
* Katelyn Arenas	- BE Engineer
* Josh Harshman	- Platform Engineer
* Patrick Evans	- BE Engineer (can also help with FE!)
* Justin Barry -	BE Engineer
* Parli Rizal -	BE Engineer
* Tyler Lugger -	BE Engineer

Agile Support:
* Julian Lasius -	Scrum Master / Agile Delivery

Product Support:
*Pawan Murthy - Product Manager


### Saving Work to Github
1. Create a new branch off of main `git checkout -b <YOUR BRANCH NAME>`
3. Make your changes
4. Commit changes to Github using the commands `git add <file names> ` (or `git add -A` to add all changes), `git commit -m "commit message"`, `git push --set-upstream origin <YOUR BRANCH>` (this --set-upstream parameter will only have to
be used the first time you push your branch to the remote, from then on you can just do `git push origin <YOUR BRANCH NAME>`)
5. On winterns2021 repo in Github, navigate to `branches`, find your branch, and click on the open pull request button. 

### Run Locally 
1. Make sure that you are in the directory with the `app.py` file (you can determine this by typing `ls -l` into the command line to list the files your current directory
and ensuring that you see `app.py` there)
2. Install node packages through `npm install`
3. Install flask through requirements.txt file, `pip install -r requirements.txt`
4. In one terminal, run `npm run start`. This will build and start the React web app.
5. In a second terminal, run `flask run --reload --debugger`. This will run the Flask app on an HTTP server.
3. You will see a log pop up in the console indicating that your application is `* Running on http://127.0.0.1:5000/` 
4. To view your webapp, click on `http://127.0.0.1:5000/` to open it in a new tab, or preview in the sidebar.

### That's it! 🎉

###### PS: `sample-app.py` to hit endpoints in flask/python 
[sample-app.py](https://gist.github.com/gracemcgrath/345c144f1717bf896ed78ea08b999540)
