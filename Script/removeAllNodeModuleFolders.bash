# This script will check the packages folder and check all subFolders  1 level down, if they have a node_modules folder, it will remove it

# Author: silassentinel
####################################################################################
####################################################################################
####################################################################################
echo "Removing all node_modules in the subfolders of packages"

cd ./packages

SET $projectfolders = ls -d */*
SET $projectsubfolders
for $folder in $folprojectders
    SET $projectSubfolders ls -d $folder
    for $subfolder in $subfolders
        echo "Checking $subfolder"

####################################################################################
####################################################################################
####################################################################################