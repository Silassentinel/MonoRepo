# This script will check the packages folder and check all subFolders  1 level down, if they have a node_modules folder, it will remove it

# Author: silassentinel
####################################################################################
####################################################################################
####################################################################################
echo "Removing all node_modules in the subfolders of packages"

cd ./packages

ls -d * | $projectfolders

for $folder in $folprojectders
    ls -d $folder/* | $projectSubfolders 
    for $subfolder in $projectSubfolders 
        echo "Checking $subfolder"

####################################################################################
####################################################################################
####################################################################################