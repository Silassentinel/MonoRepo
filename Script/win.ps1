## this script will traverse the directory tree upwards in search for a .git folder
## if any found:
## create envir vars for the following(A1) via jsontoenvir package in monorepo

## A1.1: Whoami if available alse hostname - pc name
## A1.2: current date + time
## A1.3: commit message (get overwritten every execution)

## A2: git add .
## A3: git commit -m $commitmessage
## A4: git push

## prefix for every envir var created by this script:
## autocheckin_

####################################
#config

# default allowed amount folders to travers to find .git folder change below if needed
$autocheckin_allowedFoldersToTraverseUpwards = 1;
#vars
$autocheckin_whoami = whoami;
$autocheckin_hostname = hostname;
$autocheckin_datetime = get-date -format "dd-mm-yyyyTHH:mm:ss";
$autocheckin_commitmessage = "AutoCommit: $autocheckin_whoami@$hostname $datetime";
$autocheckin_folderToTraverseUpwards = "";

####################################
#script

# loop the amount of allowed times this will create an string containing the amount of folders to traverse upwards
# example if $allowedFoldersToTraverseUpwards = 2 then $folderToTraverseUpwards = "../.."
for ($i = 0; $i -lt $autocheckin_allowedFoldersToTraverseUpwards; $i++) {
    $autocheckin_folderToTraverseUpwards += "../";
}

# traverse upwards in the directory tree
Set-Location -Path $autocheckin_folderToTraverseUpwards;

# loop through all folders in the current directory
foreach ($folder in (Get-ChildItem -Directory)) {
    # if a .git folder is found
    if ($folder.Name -eq ".git") {
        # create envir vars
        npm run start --workspace=packages/JsonToEnv -EnvVar=true -json='{"autocheckinWhoAmi": "' + $autocheckin_whoami + '", "autocheckinHostname": "' + $autocheckin_hostname + '", "autocheckinDatetime": "' + $autocheckin_datetime + '",
        "autocheckinCommitMessage": "' + $autocheckin_commitmessage + '"}';
        # add all files
        git add .;
        # commit
        git commit -m $autocheckin_commitmessage;
        # push
        git push;
        # exit
        exit;
    }
}