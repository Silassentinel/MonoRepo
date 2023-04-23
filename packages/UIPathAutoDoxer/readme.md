# About
This project is a tool to generate documentation for UiPath projects. 

flow: 
read in the xaml
parse xaml to jsonObject
loop over object keys,values
replace placeholders in html template with values from jsonObject
write html to disk & name as xaml file


# htmlStructure
- TemplateHtml.html
    - header
    - body
        - Actvity
            - ActivityTitle
            - Table
                - HeaderRow
                    - HeaderCell: activityName
                    - HeaderCell: activityType
                - BodyRow
                    - BodyCell: activityName
                    - BodyCell: activityType
            - Activity Comments
        - Arguments
            - ArgumentTitle
            - ArgumentTable
                - HeaderRow
                    - HeaderCell: argumentName
                    - HeaderCell: argumentType
                    - HeaderCell: argumentDirection
                    - HeaderCell: argumentDescription
                - BodyRow
                    - BodyCell: argumentName
                    - BodyCell: argumentType
                    - BodyCell: argumentDirection
                    - BodyCell: argumentDescription
        - Imports
            - ImportTitle
            - ImportList
**disclaimer:**
It is a work in progress and is not yet ready for production use.

# Getting Started
Follow the steps below to install the project locally.
Prerequisite:
- Install Node.js and npm
- Download the project
-- via git or as a zip


1.	Installation process:
    1. CD into project root
    1. Run `npm install`
2.	Software dependencies
    1. Can be found in the packages file.
3.	Latest releases
4.	API references

# Build and Test
1. Build
1.1. Run `npm run build`
2. Test
2.1. Run `npm run test`

# Contribute
To contribute to the project, you can fork the project and make a pull request.

# License
This project is licensed under the MIT License - see the LICENSE.md file for details