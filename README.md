# Smart-Blood
1.1 Purpose
Smart Blood is a software aimed towards the healthcare industry to help patients and
donors under one application. Patients will be able to evaluate their blood test reports and
donors will have a platform that would allow them to complete donor related tasks.
1.2 Document Conventions
This document is following IEEE format. The format of the headings is as follows: Major
headings are in bold 18pt font, and concurrent headings in bold 14 pt font. Sections are in the
format of x.y, where x and y are real, positive integers.

1.3 Intended Audience and Reading Suggestions
As the software requirement specification (SRS) is written for a more general audience, this
document is intended for individuals directly involved in the development of Smart Blood. This
includes medical facility staff (management, information technology, quality, validation, and
laboratory), auditors, software developers, project consultants, and team managers, as well
as testers such as Doctors, Patients, Donors and Staff. This document need not be read
sequentially, users are encouraged to jump to any section they find relevant. Anyone can use
Smart Blood to donate as well as who need blood, i.e patients, hospitals, blood banks, etc.
1.4 Product Scope
This software will enable patients to understand their test reports and based on their
reports they will be recommended with medicines that could potentially treat them. The
blood reports our application will be able to evaluate are vitamins, iron, complete blood
count and the basic metabolic panel.Donors will be able to make an account, book
appointments, view their donor history etc. Doctors can have a benefit as the evaluation
process has been decreased, doctors will be able to just take the reports and all the
medicines/treatments will be listed.
1.5 References
[1] IEEE Software Engineering Standard Committee, “IEEE Std 830-1998,
IEEE Recommended Practice for Software Requirement Specifications”. [2]
Software Requirement Specification template. [Online]. Available:
https://cs.gmu.edu/~rpettit/files/project/SRS-template.doc .
2. Overall Description
2.1 Product Perspective
The software will be able to check the patient’s blood test report, analyze it, and then it will
suggest whether the patient needs Blood or he/she can be cured by Medicines. It can be
primarily used by patients, doctors, and blood banks. It is a modified version of Smart Blood
Analytics where we can only get an analysis of our blood report, and you have to figure on

your own what step you will take next, but in our software, the experts will guide you about
your condition and it will help you to save your money.

2.2 Product Functions
Login Interface - User should enter valid username and password to get access to its
profile. The system provides security features through username-password matching
where only authorized users can access the system with different authorization levels.
Donor Profile Registrations - User will be able to see its Account No. , receipts of blood
donated, need and request of blood. This allows the healthy public to register as volunteer
donors.

INPUT: Donor/ Recipient Id, Name, Date of Birth, Sex, Blood
Group,Address, Contact Number, Email Address, Diseases (if any). OUTPUT:
Successfully Registered.
Patient Profile Registration - User will be able to see the information of their blood donor,
report of their blood
Blood Bank - Blood Bank staff can manage the blood stock starting from the blood collection, to
blood screening, processing, storage, transference and transfusion through this system. Each process
or work-flow can be traced from the database. The system will also alert the personnel whenever the
blood quantity is below its par level or when the blood in stock has expired.

2.3 User Classes and Characteristics
The system will support three user privileges: Users(Patients, Donors), Doctors, and Admin.
Users include patients and donors, patients and donors will have access to only their respective
functionalities, doctors will have access to users and doctors information but they can only read
them, and administrators will have access to everything.

The Users should be able to do the following functions:
Patients:
● Upload personal information.
● History of previous medications or drugs.
● Test resultsDonors:
● Upload personal information.
● History of previous medications or drugs.
● He can check how many times he has donated blood previously.
The doctor should be able to do the following functions:
● Get all donors who have previously donated the blood.● Decide whether the donor can
donate or not.
● Prescribe medicines to patients based on their reports.
● Have access to the medical history of both Donors and Patients.
● Recommend hospital to patients.
The administrator should be able to do the following functions:
● Add/Delete donors information.
● Add/Delete patients information.
● Add/Delete doctors information.
2.4 Operating Environment
Operating environment for the Smart Blood software are as listed below:
● Database(Sql)
● Client/Server system.
● Operating System (Windows).
● Platform(Node js, React)

2.5 Design and Implementation Constraints
● The donor and recipient are constrained to create an account first to avail the services.
● Internet connection is also a constraint for this software.
● This software is also constrained by the database capacity so it works well with a
smallernumber of donors and hospitals.
● End user&#39;s will not be able to get the information about the availability of the blood in
thebank.
● Only the Admin has all the right to edit the things in the End user&#39;s profile.

2.6 User Documentation
1. Node JS backend
technologyhttps://www.youtube.com/watch?v=TlB_eWDSMt4
https://nodejs.org/en/docs/

2. React Frontend
technologyhttps://www.youtube.com/watch?v=Ke90Tje7VS0
https://reactjs.org/docs/getting-started.html
