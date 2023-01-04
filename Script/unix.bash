# created by : silassentinel
## This script will search the directory for a .git folder
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

#vars
$autocheckin_whoami = $(whoami)
$autocheckin_hostname = $(hostname)
$autocheckin_date = $(date) # format: dd-mm-yyyyTHH:mm:ss
$autocheckin_commitmessage = "AutoCommit: $(whoami) $(date)"

####################################
#script
# create envir vars
npm run start --workspace=packages/JsonToEnv -EnvirVar=true -json="{\"autocheckin_whoami\":\"$autocheckin_whoami\",\"autocheckin_hostname\":\"$autocheckin_hostname\",\"autocheckin_date\":\"$autocheckin_date\",\"autocheckin_commitmessage\":\"$autocheckin_commitmessage\"}"

# git add .
git add .

# git commit -m $commitmessage
git commit -m $commitmessage

# git push
git push

# exit the script
exit

}