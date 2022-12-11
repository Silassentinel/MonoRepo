@echo off

rem this script will traverse the directory tree upwards in search for a .git folder
rem if any found:
rem create envir vars for the following(A1) via jsontoenvir package in monorepo

rem A1.1: Whoami if available alse hostname - pc name
rem A1.2: current date + time
rem A1.3: commit message (get overwritten every execution)

rem A2: git add .
rem A3: git commit -m %commitmessage%
rem A4: git push

rem prefix for every envir var created by this script:
rem autocheckin_

rem config

rem default allowed amount folders to travers to find .git folder change below if needed
set autocheckin_allowedFoldersToTraverseUpwards=1
rem vars
set autocheckin_whoami=%username%
set autocheckin_hostname=%computername%
set autocheckin_datetime=%date% %time%
set autocheckin_commitmessage="AutoCommit: %autocheckin_whoami%@%autocheckin_hostname% %autocheckin_datetime%"
set autocheckin_folderToTraverseUpwards=

rem script

rem loop the amount of allowed times this will create an string containing the amount of folders to traverse upwards
rem example if %autocheckin_allowedFoldersToTraverseUpwards% = 2 then %autocheckin_folderToTraverseUpwards% = "../.."
for /L %%i in (1,1,%autocheckin_allowedFoldersToTraverseUpwards%) do (
    set autocheckin_folderToTraverseUpwards=%autocheckin_folderToTraverseUpwards%../
)

rem traverse upwards in the directory tree
cd %autocheckin_folderToTraverseUpwards%

rem loop through all folders in the current directory
for /D %%folder in (*) do (
    rem if a .git folder is found
    if "%%folder" == ".git" (
        rem create envir vars
        npm run start --workspace=packages/JsonToEnv -EnvVar=true -json='{"autocheckinWhoAmi": "' + %autocheckin_whoami% + '", "autocheckinHostname": "' + %autocheckin_hostname% + '", "autocheckinDatetime": "' + %autocheckin_datetime% + '", "autocheckinCommitMessage": "' + %autocheckin_commitmessage% + '"}'
        rem add all files
        git add .
        rem commit
        git commit -m %autocheckin_commitmessage%
        rem push
        git push
        rem exit
        exit
    )
)
