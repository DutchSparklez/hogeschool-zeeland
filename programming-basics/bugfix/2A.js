/* Refactor the following code:

const dfs = 53; // THe age of the customer
const dma = 3500; // The monthly salary of the customer
const prd = 'fixed-contract'; // The job status of the customer
const qsa = 10000; // The requested loan amount of the customer
// first: the salary percentage is calculated:
const dfd = 100 * dma / qsa;
let vyg = 'rejected'; // this var is used to store the decision
if (dfs >= 18) {
if (dfs <= 25 && prd == 'fixed-contract' || dfs > 25 && prd == 'flex-contract') {
if (dfd <= 50) { vyg = 'approved';}
if (dfs > 25 && prd == 'fixed-contract' && dfd <= 25) {
vyg = 'approved';
}}
}         if (vyg == 'approved') {
document.write('Your loan request has been approved');}
if (result == 'rejected') {
                             document.write('Your loan request is rejected');} 
----------------------------------------------------------------------------------------*/

const age = 53;
const monthlySalary = 3500;
const jobStatus = 'fixed-contract';
const requestedLoan = 10000;
const salaryPercentage = 100 * monthlySalary / requestedLoan;
let decision = 'rejected';

if (age >= 18) {
  if (age <= 25 && jobStatus == 'fixed-contract' || age > 25 && jobStatus == 'flex-contract') {
    if (salaryPercentage >= 50) { 
      decision = 'approved';
    }
  }

  if (jobStatus == 'fixed-contract' && salaryPercentage >= 25) {
    decision = 'approved';
  }
}         

if (decision == 'approved') {
  document.write('Your loan request has been approved');
}

if (decision == 'rejected') {
  document.write('Your loan request is rejected');
}