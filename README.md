# hw-10: Template Engine - Employee Summary

A Node CLI-based software engineering team generator. The application is invoked with:

```sh
node app.js
```

## User Story
```
As a manager I want to generate a webpage that displays my team's basic info so that
I have quick access to emails and GitHub profiles.
```

## User instructions
The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When input is complete, the application will create an HTML file that displays a team roster based on the information provided.

## Minimum Requirements
* [ ] Functional application
* [x] GitHub repository with a unique name and decriptive README
* [x] Dependencies: Inquirer, Jest
* [x] The app runs as Node CLI
* [ ] User runs CLI to generate an HTML page that displays information about their team
* [ ] Uniquely styled HTML output
* [ ] Use validation to ensure that the information provided is in the proper expected format
* [ ] Add the application to your portfolio
* [ ] All unit tests pass

## Submission on BCS
* [x] The URL of the GitHub repository
* [ ] **Optional**: GIF of your CLI application's functionality

## Suggested workflow:
  1. [ ] Run tests (`npm run test`)
  2. [ ] Create or update classes to pass a single test case
  3. [ ] Repeat until all tests pass

## Suggested directory structure:
```
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
  Main.html
  Engineer.html
  Intern.html
  Manager.html
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
```

### Classes
The project must have the these classes: `Employee`, `Manager`, `Engineer`, `Intern`. The tests for these classes in the `tests` directory must all pass.

Parent class `Employee`
  * name
  * id
  * title
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

Child class `Manager` extends `Employee`
  * officeNumber
  * getRole() // Overridden to return 'Manager'

Child class `Engineer` extends `Employee`
  * github  // GitHub username
  * getGithub()
  * getRole() // Overridden to return 'Engineer'

Child class `Intern` extends `Employee`
  * school 
  * getSchool()
  * getRole() // Overridden to return 'Intern'

### User input

The project must prompt the user to build an engineering team. An engineering team consists of a manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name
  * Role
  * ID
  * Role-specific property (School, link to GitHub profile, or office number)
