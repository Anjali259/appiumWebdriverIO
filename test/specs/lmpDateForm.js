// import login from "../handlers/login";
// const { expect, browser, $ } = require('@wdio/globals')
// const login = require('../../utils/login');
// const elements = require("../../utils/locators");

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await login();
//     })

//     // it('should fill up LMP date and submit the form', async () => {
//     //     await $(elements.myAshaLocators.myPeopleAshaTab).waitForExist();
//     //     await $(elements.myAshaLocators.myPeopleAshaTab).click();

//     //     await $(elements.myAshaLocators.nextBtn).waitForExist();
//     //     await $(elements.myAshaLocators.nextBtn).click();

//     //     await $(elements.myAshaLocators.eligibleCouples).waitForExist();
//     //     await $(elements.myAshaLocators.eligibleCouples).click();

//     //     await $(elements.myAshaLocators.secondOption).waitForDisplayed();
//     //     await $(elements.myAshaLocators.secondOption).click();
//     //     await $(elements.myAshaLocators.secondOption).click();

//     //     await $(elements.myAshaLocators.nextBtn).waitForExist();
//     //     await $(elements.myAshaLocators.nextBtn).click();

//     //     await $(elements.myAshaLocators.nextBtn).waitForExist();
//     //     await $(elements.myAshaLocators.nextBtn).click();

//     //     await $(elements.myAshaLocators.selectDate).waitForExist();
//     //     await $(elements.myAshaLocators.selectDate).click();

//     //     await $(elements.myAshaLocators.okBtn).waitForExist();
//     //     await $(elements.myAshaLocators.okBtn).click();

//     //     await $(elements.myAshaLocators.selectMember).waitForExist();
//     //     await $(elements.myAshaLocators.selectMember).click();
//     //     await $(elements.myAshaLocators.proceedWithVisit).waitForExist();
//     //     await $(elements.myAshaLocators.proceedWithVisit).click();

//     //     await $(elements.myAshaLocators.nextBtn).waitForExist();
//     //     await $(elements.myAshaLocators.nextBtn).click();

//     //     await $(elements.myAshaLocators.nextBtn).waitForExist();
//     //     await $(elements.myAshaLocators.nextBtn).click();

//     //     await $(elements.myAshaLocators.noBtn).waitForExist();
//     //     await $(elements.myAshaLocators.noBtn).click();

//     //     await $(elements.myAshaLocators.nextBtn).waitForExist();
//     //     await $(elements.myAshaLocators.nextBtn).click();

//     //     await $(elements.myAshaLocators.noBtn).waitForExist();
//     //     await $(elements.myAshaLocators.noBtn).click();

//     //     await $(elements.myAshaLocators.nextBtn).waitForExist();
//     //     await $(elements.myAshaLocators.nextBtn).click();

//     //     await $(elements.myAshaLocators.submitForm).waitForExist();
//     //     await $(elements.myAshaLocators.submitForm).click();

//     //     await $(elements.myAshaLocators.nextBtn).waitForExist();
//     //     await $(elements.myAshaLocators.nextBtn).click();

//     //     await $(elements.myAshaLocators.successForm).waitForDisplayed();
//     //     await $(elements.myAshaLocators.completeForm).waitForDisplayed();
//     //     await $(elements.myAshaLocators.completeForm).click();
//     //     await $(elements.myAshaLocators.searchMember).waitForDisplayed();
//     // })
//     it('should add new family member', async () => {

//         // General details before adding any members
//         await $(elements.newFamilyMemberLocators.cfhcTab).waitForExist();
//         await $(elements.newFamilyMemberLocators.cfhcTab).click();

//         await $(elements.newFamilyMemberLocators.cfhcOption).waitForExist();
//         await $(elements.newFamilyMemberLocators.cfhcOption).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.addNewFamilyBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.addNewFamilyBtn).click();

//         await $(elements.newFamilyMemberLocators.houseNumber).waitForExist();
//         await $(elements.newFamilyMemberLocators.houseNumber).setValue('212');

//         await $(elements.newFamilyMemberLocators.address1).waitForExist();
//         await $(elements.newFamilyMemberLocators.address1).setValue('Test Address 1');

//         await $(elements.newFamilyMemberLocators.address2).waitForExist();
//         await $(elements.newFamilyMemberLocators.address2).setValue('Test Address 2');

//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();

//         const dropdownByIndex = await $$(elements.newFamilyMemberLocators.dropdownList);
//         const elementByIndex = dropdownByIndex[2]; // Assuming index 1 means the second element
//         await $(elementByIndex).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();

//         await $(elements.newFamilyMemberLocators.hinduOption).waitForExist();
//         await $(elements.newFamilyMemberLocators.hinduOption).click();

//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();

//         await $(elements.newFamilyMemberLocators.generalOption).waitForExist();
//         await $(elements.newFamilyMemberLocators.generalOption).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         const noRadioOptions = await $$(elements.newFamilyMemberLocators.noRadioOptionList);
//         await $(noRadioOptions[0]).click();
//         await $(noRadioOptions[1]).click();
//         await $(noRadioOptions[2]).click();
//         await $(noRadioOptions[3]).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();

//         await $(elements.newFamilyMemberLocators.allOption).waitForExist();
//         await $(elements.newFamilyMemberLocators.allOption).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();

//         await $(elements.newFamilyMemberLocators.angandID).waitForExist();
//         await $(elements.newFamilyMemberLocators.angandID).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         // Add Head of the family member
//         await $(elements.memberDetails.yesRadioBtn).waitForExist();
//         await $(elements.memberDetails.yesRadioBtn).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         // Add head of member details
//         const firstHeadNameField = await $(elements.memberDetails.firstName);
//         await firstHeadNameField.click();
//         await firstHeadNameField.setValue('QAHead');

//         const middleHeadNameField = await $(elements.memberDetails.middleName);
//         await middleHeadNameField.click();
//         await middleHeadNameField.setValue('MiddleName');

//         const lastHeadNameField = await $(elements.memberDetails.lastName);
//         await lastHeadNameField.click();
//         await lastHeadNameField.setValue('Lastname');

//         const adharHeadField = await $(elements.memberDetails.adharName);
//         await adharHeadField.click();
//         await adharHeadField.setValue('QAHeadAutomation');
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         // Father details 

//         const fathersName = await $(elements.memberDetails.fatherFathersName);
//         await fathersName.click();
//         await fathersName.setValue('QAHeadAutomation');

//         await $(elements.memberDetails.genderMale).waitForExist();
//         await $(elements.memberDetails.genderMale).click();

//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();

//         await $(elements.memberDetails.marriedOption).waitForExist();
//         await $(elements.memberDetails.marriedOption).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         // Birth date selection of head members
//         await $(elements.memberDetails.selectDate).waitForExist();
//         await $(elements.memberDetails.selectDate).click();

//         await $(elements.memberDetails.yearPicker).waitForExist();
//         await $(elements.memberDetails.yearPicker).click();

//         // // / Perform the touch action using the actions API
//         // await driver.performActions([
//         //     {
//         //         type: 'pointer',
//         //         id: 'finger1',
//         //         parameters: { pointerType: 'touch' },
//         //         actions: [
//         //             { type: 'pointerMove', duration: 0, x: 1010, y: 1139 },
//         //             { type: 'pointerDown', button: 0 },
//         //             { type: 'pause', duration: 100 },
//         //             { type: 'pointerMove', duration: 1000, origin: 'viewport', x: 972, y: 2025 },
//         //             { type: 'pointerUp', button: 0 },
//         //         ]
//         //     }
//         // ]);

//         // await driver.performActions([
//         //     {
//         //         type: 'pointer',
//         //         id: 'finger2',
//         //         parameters: { pointerType: 'touch' },
//         //         actions: [
//         //             { type: 'pointerMove', duration: 0, x: 1010, y: 1139 },
//         //             { type: 'pointerDown', button: 0 },
//         //             { type: 'pause', duration: 100 },
//         //             { type: 'pointerMove', duration: 1000, origin: 'viewport', x: 972, y: 2025 },
//         //             { type: 'pointerUp', button: 0 },
//         //         ]
//         //     }
//         // ]);

//         // await driver.performActions([
//         //     {
//         //         type: 'pointer',
//         //         id: 'finger3',
//         //         parameters: { pointerType: 'touch' },
//         //         actions: [
//         //             { type: 'pointerMove', duration: 0, x: 1010, y: 1139 },
//         //             { type: 'pointerDown', button: 0 },
//         //             { type: 'pause', duration: 100 },
//         //             { type: 'pointerMove', duration: 1000, origin: 'viewport', x: 972, y: 2025 },
//         //             { type: 'pointerUp', button: 0 },
//         //         ]
//         //     }
//         // ]);

//         const createFingerActions = (id, startX, startY, endX, endY) => ({
//             type: 'pointer',
//             id: id,
//             parameters: { pointerType: 'touch' },
//             actions: [
//                 { type: 'pointerMove', duration: 0, x: startX, y: startY },
//                 { type: 'pointerDown', button: 0 },
//                 { type: 'pause', duration: 100 },
//                 { type: 'pointerMove', duration: 1000, origin: 'viewport', x: endX, y: endY },
//                 { type: 'pointerUp', button: 0 },
//             ]
//         });

//         const fingers = ['finger1', 'finger2', 'finger3'];
//         const startX = 1010;
//         const startY = 1139;
//         const endX = 972;
//         const endY = 2025;

//         for (const finger of fingers) {
//             await driver.performActions([createFingerActions(finger, startX, startY, endX, endY)]);
//         }

//         // await driver.touchAction([
//         //     { action: 'press', x: 962, y: 1133 },
//         //     { action: 'moveTo', x: 962, y: 1724 },
//         //     'release'
//         //   ]);
//         //   await driver.touchAction([
//         //     { action: 'press', x: 945, y: 1171 },
//         //     { action: 'moveTo', x: 940, y: 1778 },
//         //     'release'
//         //   ]);
//         //   await driver.touchAction([
//         //     { action: 'press', x: 978, y: 1176 },
//         //     { action: 'moveTo', x: 956, y: 1869 },
//         //     'release'
//         //   ]);

//         await $(elements.memberDetails.dateSelect).waitForExist();
//         await $(elements.memberDetails.dateSelect).click();

//         await $(elements.memberDetails.firstDate).waitForExist();
//         await $(elements.memberDetails.firstDate).click();

//         await $(elements.myAshaLocators.okBtn).waitForExist();
//         await $(elements.myAshaLocators.okBtn).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();
//         // Birth date selection of head members completes here 

//         const mobileNoField = await $(elements.memberDetails.mobileNoField);
//         await mobileNoField.click();
//         await mobileNoField.setValue('9898989898');
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
//         await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();
//         await $(elements.memberDetails.illiterateOption).waitForExist();
//         await $(elements.memberDetails.illiterateOption).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
//         await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
//         await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
//         await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
//         await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
//         await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         const noDiseaseHeadOptions = await $$(elements.newFamilyMemberLocators.noRadioOptionList);
//         await $(noDiseaseHeadOptions[0]).click();
//         await $(noDiseaseHeadOptions[1]).click();
//         await $(noDiseaseHeadOptions[2]).click();
//         await $(noDiseaseHeadOptions[3]).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         const noDiseaseHeadOptions1 = await $$(elements.newFamilyMemberLocators.noRadioOptionList);
//         await $(noDiseaseHeadOptions1[0]).click();
//         await $(noDiseaseHeadOptions1[1]).click();
//         await $(noDiseaseHeadOptions1[2]).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
//         await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.memberDetails.yesRadioBtn).waitForExist();
//         await $(elements.memberDetails.yesRadioBtn).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();
//         // Add family member details

//         await $(elements.myAshaLocators.selectMember).waitForExist();
//         await $(elements.myAshaLocators.selectMember).click();

//         await $(elements.memberDetails.sonData).waitForExist();
//         await $(elements.memberDetails.sonData).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         // Add member details
//         const firstNameField = await $(elements.memberDetails.firstName);
//         await firstNameField.click();
//         await firstNameField.setValue('QAFirstName');

//         const middleNameField = await $(elements.memberDetails.middleName);
//         await middleNameField.click();
//         await middleNameField.setValue('MiddleName');

//         const lastNameField = await $(elements.memberDetails.lastName);
//         await lastNameField.click();
//         await lastNameField.setValue('Lastname');

//         const adharField = await $(elements.memberDetails.adharName);
//         await adharField.click();
//         await adharField.setValue('QAAutomation');

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         // More details
//         await $(elements.memberDetails.genderMale).waitForExist();
//         await $(elements.memberDetails.genderMale).click();

//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
//         await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();

//         await $(elements.memberDetails.unmarriedOption).waitForExist();
//         await $(elements.memberDetails.unmarriedOption).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         // Enter birth details
//         await $(elements.memberDetails.selectDate).waitForExist();
//         await $(elements.memberDetails.selectDate).click();

//         await $(elements.memberDetails.previousMonth).waitForExist();
//         await $(elements.memberDetails.previousMonth).click();

//         await $(elements.memberDetails.firstDate).waitForExist();
//         await $(elements.memberDetails.firstDate).click();

//         await $(elements.myAshaLocators.okBtn).waitForExist();
//         await $(elements.myAshaLocators.okBtn).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         // 2 TIMES NEXT BUTTON
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         // Enter disease details

//         await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
//         await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
//         await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
//         await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
//         await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         const noDiseaseOptions = await $$(elements.newFamilyMemberLocators.noRadioOptionList);
//         await $(noDiseaseOptions[0]).click();
//         await $(noDiseaseOptions[1]).click();
//         await $(noDiseaseOptions[2]).click();
//         await $(noDiseaseOptions[3]).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         const noDiseaseOptions1 = await $$(elements.newFamilyMemberLocators.noRadioOptionList);
//         await $(noDiseaseOptions1[0]).click();
//         await $(noDiseaseOptions1[1]).click();
//         await $(noDiseaseOptions1[2]).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
//         await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
//         await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.myAshaLocators.submitForm).waitForExist();
//         await $(elements.myAshaLocators.submitForm).click();
//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
//         await $(elements.newFamilyMemberLocators.nextBtn).click();

//         await $(elements.homeIcon.homeBtn).waitForExist();
//         await $(elements.homeIcon.homeBtn).click();

//         await $(elements.homeIcon.syncIcon).waitForExist();
//         await $(elements.homeIcon.syncIcon).click();


//     })

// })



