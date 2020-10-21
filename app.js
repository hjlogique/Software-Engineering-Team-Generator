
// =================================================
// ===== Software Engineering Team Generator =======
// ============= By Henry Jean Logique =============
// =================================================

// Depedencies
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");

// Create the output file and directory
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Array of information types for the prompt questions
const infoType = ["name", "id", "email", "specificInfo"];
const membersList = []; // Array of the team members

// Initialize a team object containing three member objects 
const TeamObject = {
	Manager: Manager,
	Engineer: Engineer,
	Intern: Intern,
};

// Create the prompt questions using the member's roles
// Main required information: name, id and email
const mainInfo = (memberRole) => {
	let info = [];
	infoType.forEach(element => {
		if (element !== infoType[3]) {
			info.push({
				type: "input",
				message: `What is the ${memberRole}'s ${element}?`,
				name: `${element}`
			});
			// Create specific prompt questions for different roles:
			// Office number, GitHub and School
		} else {
			let specialInfo = (memberRole === "Manager") ? "office number" :
				(memberRole === "Engineer") ? "GitHub" : "School";
			info.push({
				type: "input",
				message: `What is the ${memberRole}'s ${specialInfo}?`,
				name: `${element}`
			});
		}
	});
	return info;
}

// Create Prompt questions 
const questions = {
	Manager: mainInfo("Manager"),
	Engineer: mainInfo("Engineer"),
	Intern: mainInfo("Intern"),
	addOrGenerate: {
		type: "list",
		message: "Add a new member or generate the team summary?",
		choices: ["Engineer", "Intern", "Exit and generate the team summary"],
		name: "option",
	},
};

// Generate team members by asynchronous call with async and await
const generateMember = async (memberRole) => {
	const result = await inquirer.prompt(questions[memberRole]);
	const member = new TeamObject[memberRole](
		result.name,
		result.id,
		result.email,
		result.specificInfo,
	);
	membersList.push(member); // Update the members list
	addOrGenerate();
};

// Render HTML using the members information and write to the HTML file
const buildHTML = async () => {
	const HTML = render(membersList);
	try {
		fs.writeFileSync(outputPath, HTML);
	} catch (error) {
		console.log(error.message);
	}
};

// Add a new member to the team or generate the team summary
const addOrGenerate = async () => {
	const { option } = await inquirer.prompt(questions.addOrGenerate);
	if (option.startsWith("Exit")) return buildHTML();
	generateMember(option);
};

// Main function calls generateMember function to first create a Manager
// continuing with genaration of other team members and the team summary
const init = () => {
	generateMember("Manager");
};

init();
