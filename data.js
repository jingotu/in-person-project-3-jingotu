// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Jingo Tu",        // TODO: Add your name
        title: "Bioengineering Master's Student",      // TODO: Add your professional title
        email: "chun-hao_tu@berkeley.edu", // TODO: Add your email
        location: "Berkeley, CA",  // TODO: Add your location
        bio: "I'm a Bioengineering master's student at UC Berkeley with a focus on computational biology and bioinformatics. My background spans chemistry, wet-lab research, structural biology, and statistical genomics." // TODO: Add your bio
    },

    // Skills as an array
    skills: [
        "Python",   // TODO: Replace with your actual skills
        "R",  // TODO: Add more skills
        "Molecular Modeling",    // TODO: Students should have at least 5 skills
        "Protein Biochemistry",
        "HTML/CSS/JavaScript"
        // TODO: Add more skills - aim for 5-7 skills total
    ],

    // Projects as array of objects
    projects: [
        {
            title: "Serum Albumin & Cardiovascular Disease Genomic Analysis",
            description: "This project involved analyzing genomic data to identify potential links between serum albumin levels and cardiovascular disease risk. We utilized statistical genomics techniques to process large datasets and generate meaningful insights.",
            technologies: ["R", "GWAS", "Meta-analysis"], // Array of technologies used
            completionDate: "Mar 2026",   // When you completed it
            featured: true                   // Is this a featured project?
        },
        {
            title: "Protein Structural-Functional Analysis",
            description: "Studying protein structure-function relationships and substrate interactions by combining experimental structural biology with computational modeling.",
            technologies: ["Biochemical Assays", "Molecular Dynamics Simulation", "Molecular Modeling"],
            completionDate: "Mar 2026",
            featured: false
        },
        {
            title: "Mixed Reality Brain Sensor Positioning",
            description: "Developed a mixed-reality approach to simplify brain sensor positioning, reducing setup time.",
            technologies: ["Mixed Reality", "JavaScript"],
            completionDate: "Jun 2024",
            featured: false
        }
        // TODO: Add more projects during class
    ],

    // Contact and availability information
    availability: {
        freelance: false,    // TODO: Set to true if available for freelance work
        fullTime: true,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
console.log("Owner name:", portfolio.owner.name);
console.log("First skill:", portfolio.skills[0]);
console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
console.log("Email:", portfolio.owner.email);
console.log("Second project:", portfolio.projects[1]);
console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
console.log("Portfolio Summary:");
console.log(`${portfolio.owner.name} has ${portfolio.skills.length} skills`);
console.log(`and ${portfolio.projects.length} projects`);

// Find featured projects

for (let i = 0; i < portfolio.projects.length; i++) {

    if (portfolio.projects[i].featured === true) {

        console.log("Featured:", portfolio.projects[i].title);
    }
}

// Step 4.2: JSON Exploration

let dataAsJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio as JSON:", dataAsJSON);