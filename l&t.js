// ============================================
// TASK 1: Welcome Message (2 Marks)
// ============================================
console.log("Welcome to the Hospital Patient System!");

// ============================================
// TASK 2: Declare and Update Variables (2 Marks)
// ============================================
let systemName = "Hospital Patient System";
let totalPatients = 150;
console.log(`System Name: ${systemName}`);
console.log(`Total Patients: ${totalPatients}`);

// ============================================
// TASK 3: Identify Datatypes (2 Marks)
// ============================================
let patientAge = 45;           // Number
let patientName = "John Doe";   // String
let isAdmitted = true;         // Boolean

console.log(`patientAge is of type: ${typeof patientAge}`);
console.log(`patientName is of type: ${typeof patientName}`);
console.log(`isAdmitted is of type: ${typeof isAdmitted}`);

// ============================================
// TASK 4: Perform a Calculation (2 Marks)
// ============================================
let patient1Age = 65;
let patient2Age = 42;
let ageDifference = patient1Age - patient2Age;
console.log(`Age difference between Patient 1 (${patient1Age}) and Patient 2 (${patient2Age}) is: ${ageDifference} years`);

// ============================================
// TASK 5: Classify a Record (2 Marks)
// ============================================
let patientAgeCheck = 35;
if (patientAgeCheck >= 60) {
    console.log("Patient is a senior citizen");
} else if (patientAgeCheck >= 18) {
    console.log("Patient is an adult");
} else {
    console.log("Patient is a minor");
}

// ============================================
// TASK 6: Iterate Over Records (2 Marks)
// ============================================
let patients = [
    { name: "Alice Smith", age: 28, gender: "Female", diagnosis: "Flu", room: 101 },
    { name: "Bob Johnson", age: 55, gender: "Male", diagnosis: "Diabetes", room: 203 },
    { name: "Carol Davis", age: 72, gender: "Female", diagnosis: "Arthritis", room: 305 },
    { name: "David Wilson", age: 19, gender: "Male", diagnosis: "Fracture", room: 107 }
];

console.log("\n=== Patient Records ===");
for (let i = 0; i < patients.length; i++) {
    console.log(`Patient ${i+1}: ${patients[i].name}, Age: ${patients[i].age}, Gender: ${patients[i].gender}, Diagnosis: ${patients[i].diagnosis}, Room: ${patients[i].room}`);
}

// ============================================
// TASK 7: Skip or Stop Early (2 Marks)
// ============================================
console.log("\n=== Patient Records with age conditions ===");
for (let i = 0; i < patients.length; i++) {
    if (patients[i].age < 20) {
        console.log(`Skipping ${patients[i].name} (age ${patients[i].age} - minor)`);
        continue; // Skip minors
    }
    if (patients[i].age > 70) {
        console.log(`Stopping at ${patients[i].name} (age ${patients[i].age} - senior)`);
        break; // Stop at seniors
    }
    console.log(`Processing ${patients[i].name} (age ${patients[i].age})`);
}

// ============================================
// TASK 8: Add & Find (2 Marks)
// ============================================
// Add new patient using push()
patients.push({ name: "Eva Martinez", age: 45, gender: "Female", diagnosis: "Migraine", room: 210 });
console.log(`\nAdded new patient: Eva Martinez`);

// Find patient with highest age
let highestAge = 0;
let oldestPatient = null;
for (let i = 0; i < patients.length; i++) {
    if (patients[i].age > highestAge) {
        highestAge = patients[i].age;
        oldestPatient = patients[i];
    }
}
console.log(`Oldest patient: ${oldestPatient.name} (Age: ${oldestPatient.age})`);

// ============================================
// TASK 9: Remove & Sort (2 Marks)
// ============================================
// Remove last patient using pop()
let removedPatient = patients.pop();
console.log(`\nRemoved patient: ${removedPatient.name}`);

console.log("\nPatients after removal:");
patients.forEach(patient => console.log(`- ${patient.name}, Age: ${patient.age}`));

// Sort patients by age (ascending)
patients.sort((a, b) => a.age - b.age);
console.log("\nPatients sorted by age (ascending):");
patients.forEach(patient => console.log(`- ${patient.name}: ${patient.age} years`));

// ============================================
// TASK 10: Create and Print an Object (2 Marks)
// ============================================
let patient = {
    patientId: "P001",
    fullName: "Michael Brown",
    age: 38,
    diagnosis: "Hypertension",
    admittedDate: "2026-07-20",
    roomNumber: 405
};

console.log("\n=== Patient Object Properties ===");
console.log(`Patient ID: ${patient.patientId}`);
console.log(`Full Name: ${patient.fullName}`);
console.log(`Age: ${patient.age}`);
console.log(`Diagnosis: ${patient.diagnosis}`);
console.log(`Admitted Date: ${patient.admittedDate}`);
console.log(`Room Number: ${patient.roomNumber}`);

// ============================================
// For submission: Mark attempted tasks
// ============================================
console.log("\n\n=== ATTEMPTED TASKS ===");
console.log("Task 1, Task 2, Task 3, Task 4, Task 5,");
console.log("Task 6, Task 7, Task 8, Task 9, Task 10");