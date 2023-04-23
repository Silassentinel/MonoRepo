# This script will do the following:
# step1: create new folder in /packages folder
# step2: copy template folder contents to new folder
# step3: update newProject package.json file:
#    name
#    version
#    description
# step4: update project root package.json file: add newProject to workspaces
# step5: run npm update
# step6: run npm install

#region: args ( to be determined)
#endregion

#region: vars
#endregion

#region: code

#region: ui
#read input in terminal:
#https://stackoverflow.com/questions/226703/how-do-i-prompt-for-input-in-a-linux-shell-script
read -p  "Enter new project version:" projectName;
read -p  "Enter new project description:" description;
#endregion

#region: functions
#region basic shell
#create folder
mkdir -p /packages/$projectName;
#move to folder
cd /packages/$projectName;
#copy template folder contents to new folder
cp -r /packages/template/* .;
#region: project tampering
# run ts project update with parameters: name, version, description 
#endregion
#update newProject package.json file:
npm update;
#run npm install
npm install;
#endregion



#endregion