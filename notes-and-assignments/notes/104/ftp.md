Uploading to the USC Server using FTP
=====================================

###What is FTP?
FTP is short for File Transfer Protocol. This is a method to transfer files from your computer to another server. We will be using a software called FileZilla to upload files from your computer to the USC web server. 

Click [here](https://filezilla-project.org/download.php) to download FileZilla.
(Note: This is a FREE software. It may prompt you to download other programs during the installation. You do NOT need to download any other programs except FileZilla).

###Getting set up with FileZilla
1. Open up FileZilla on your computer.
2. Click on File -> Site Manager
3. You will see a window pop up. Click on the "New Site" button on the bottom left. 
4. Fill out the right side of this popup with the same information as the screenshot below. Put YOUR USC credentials in username and password. This is the same USC login information that you use to access Blackboard, myUSC, your email, and etc. 
<img src="/images/filezilla_step01.png"/>

5. Click "Connect" when you are ready. It may take several seconds for it to connect. When succesful, you will see something like the screenshot below. The LEFT side of the screen is YOUR desktop, which shows the files living in YOUR computer. The RIGHT side of the screen is your USC server space that all USC students get. Don't worry too much if the left side of the screen doesn't look exactly like my screenshot below.
<img src="/images/filezilla_step02.png"/>

6. On the RIGHT side of the screen (your USC server space), look for a folder called "public_html." If you do not see one, do not panic. You can easily create a new folder in here just like how you can create a new folder in you computer. Right-click anywhere inside the right screen and select "Create directoryy" and name it public_html. All lowercase, no spaces.
<img src="/images/filezilla_step03.png"/>

7. Double-click on the "public_html" folder to go inside that folder.
8. Inside the "public_html" folder, create another folder named itp104. **All lowercase, NO spaces.** You can create a folder by right-clicking anywhere inside the right screen and select "Create directory." Screenshot below of what your right screen should roughly look like.
<img src="/images/filezilla_step04.png"/>

That's it! Now you are ready to upload your files to this USC server.

###'Uploading' your files to the USC server
Now that you have the USC server set up. You are ready to 'upload' your files to the USC server. If succesful, this means your files will be LIVE on the Internet and anybody with the URL of your file will be able to see it!

1. Make sure you are logged into the USC server. Navigate into the itp104 folder you created earlier. Note that you can see the path of where you are in the server by looking at the field that says "Remote site." 

2. On the LEFT side of the FileZilla screen, navigate to where you saved YOUR files. If you followed instructions step-by-step in class, this is probably in your desktop in the itp104 folder. **Drag and drop the HTML page you wish to upload to the RIGHT screen.** This "uploads" your files into the USC server. 
<img src="/images/filezilla_step05.png"/>