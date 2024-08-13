// const elements = require("./../utils/locators");
import * as elements from "../utils/locators";

async function navigateToChfc() {
    // General details before adding any members
    await $(elements.newFamilyMemberLocators.cfhcTab).waitForExist();
    await $(elements.newFamilyMemberLocators.cfhcTab).click();

    await $(elements.newFamilyMemberLocators.cfhcOption).waitForExist();
    await $(elements.newFamilyMemberLocators.cfhcOption).click();

    await clickOnNext();

}

async function navigateToWorkStatus() {
    await $(elements.workStatusLocators.workStatusTab).waitForExist();
    await $(elements.workStatusLocators.workStatusTab).click();

    await clickOnNext();

}

async function addFamilyDetails() {
    await $(elements.newFamilyMemberLocators.addNewFamilyBtn).waitForExist();
    await $(elements.newFamilyMemberLocators.addNewFamilyBtn).click();

    await $(elements.newFamilyMemberLocators.houseNumber).waitForExist();
    await $(elements.newFamilyMemberLocators.houseNumber).setValue('212');

    await $(elements.newFamilyMemberLocators.address1).waitForExist();
    await $(elements.newFamilyMemberLocators.address1).setValue('Test Address 1');

    await $(elements.newFamilyMemberLocators.address2).waitForExist();
    await $(elements.newFamilyMemberLocators.address2).setValue('Test Address 2');

    await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
    await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();

    const dropdownByIndex = await $$(elements.newFamilyMemberLocators.dropdownList);
    const elementByIndex = dropdownByIndex[2]; // Assuming index 1 means the second element
    await $(elementByIndex).click();

    await clickOnNext();
}

async function selectCaste() {
    await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
    await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();

    await $(elements.newFamilyMemberLocators.hinduOption).waitForExist();
    await $(elements.newFamilyMemberLocators.hinduOption).click();

    await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
    await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();

    await $(elements.newFamilyMemberLocators.generalOption).waitForExist();
    await $(elements.newFamilyMemberLocators.generalOption).click();

    await clickOnNext();
}

async function clickOnNext(nextExistence = 1) {
    for (let i = 0; i < nextExistence; i++) {
        await $(elements.newFamilyMemberLocators.nextBtn).waitForExist();
        await $(elements.newFamilyMemberLocators.nextBtn).click();
    }
}

async function clickOnOk() {
    await $(elements.workStatusLocators.OkButton).waitForExist();
    await $(elements.workStatusLocators.OkButton).click();
}

async function selectMultipleNoOption() {
    const noRadioOptions = await $$(elements.newFamilyMemberLocators.noRadioOptionList);
    for (let i = 0; i < noRadioOptions.length; i++) {
        await $(noRadioOptions[i]).click();
    }
    await clickOnNext();
}

async function selectAllOption() {
    await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
    await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();
    await $(elements.newFamilyMemberLocators.allOption).waitForExist();
    await $(elements.newFamilyMemberLocators.allOption).click();
    await clickOnNext();
}

async function selectAnganId() {
    await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
    await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();
    await $(elements.newFamilyMemberLocators.angandID).waitForExist();
    await $(elements.newFamilyMemberLocators.angandID).click();
    await clickOnNext();
}

async function selectYesOption() {
    await $(elements.memberDetails.yesRadioBtn).waitForExist();
    await $(elements.memberDetails.yesRadioBtn).click();

    await clickOnNext();
}

async function addHeadMemberDetails() {
    const firstHeadNameField = await $(elements.memberDetails.firstName);
    await firstHeadNameField.click();
    await firstHeadNameField.setValue('QAHead');

    const middleHeadNameField = await $(elements.memberDetails.middleName);
    await middleHeadNameField.click();
    await middleHeadNameField.setValue('MiddleName');

    const lastHeadNameField = await $(elements.memberDetails.lastName);
    await lastHeadNameField.click();
    await lastHeadNameField.setValue('Lastname');

    const adharHeadField = await $(elements.memberDetails.adharName);
    await adharHeadField.click();
    await adharHeadField.setValue('QAHeadAutomation');

    await clickOnNext();

    const fathersName = await $(elements.memberDetails.fatherFathersName);
    await fathersName.click();
    await fathersName.setValue('QAHeadAutomation');

    await $(elements.memberDetails.genderMale).waitForExist();
    await $(elements.memberDetails.genderMale).click();

    await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
    await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();

    await $(elements.memberDetails.marriedOption).waitForExist();
    await $(elements.memberDetails.marriedOption).click();

    await clickOnNext();
}

async function addSonMemberData() {
    await $(elements.myAshaLocators.selectMember).waitForExist();
    await $(elements.myAshaLocators.selectMember).click();

    await $(elements.memberDetails.sonData).waitForExist();
    await $(elements.memberDetails.sonData).click();

    await clickOnNext();

    // Add member details
    const firstNameField = await $(elements.memberDetails.firstName);
    await firstNameField.click();
    await firstNameField.setValue('QAFirstName');

    const middleNameField = await $(elements.memberDetails.middleName);
    await middleNameField.click();
    await middleNameField.setValue('MiddleName');

    const lastNameField = await $(elements.memberDetails.lastName);
    await lastNameField.click();
    await lastNameField.setValue('Lastname');

    const adharField = await $(elements.memberDetails.adharName);
    await adharField.click();
    await adharField.setValue('QAAutomation');

    await clickOnNext();

    // More details
    await $(elements.memberDetails.genderMale).waitForExist();
    await $(elements.memberDetails.genderMale).click();

    await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
    await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();

    await $(elements.memberDetails.unmarriedOption).waitForExist();
    await $(elements.memberDetails.unmarriedOption).click();

    await clickOnNext();

}

async function selectPastMonthData() {
    await $(elements.memberDetails.selectDate).waitForExist();
    await $(elements.memberDetails.selectDate).click();

    await $(elements.memberDetails.previousMonth).waitForExist();
    await $(elements.memberDetails.previousMonth).click();

    await $(elements.memberDetails.firstDate).waitForExist();
    await $(elements.memberDetails.firstDate).click();

    await $(elements.myAshaLocators.okBtn).waitForExist();
    await $(elements.myAshaLocators.okBtn).click();

    await clickOnNext();
}

async function selectYear() {
    await $(elements.memberDetails.selectDate).waitForExist();
    await $(elements.memberDetails.selectDate).click();

    await $(elements.memberDetails.yearPicker).waitForExist();
    await $(elements.memberDetails.yearPicker).click();
}

async function scrollCalendarToSelectDate() {
    const createFingerActions = (id, startX, startY, endX, endY) => ({
        type: 'pointer',
        id: id,
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: startX, y: startY },
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 100 },
            { type: 'pointerMove', duration: 1000, origin: 'viewport', x: endX, y: endY },
            { type: 'pointerUp', button: 0 },
        ]
    });

    const fingers = ['finger1', 'finger2', 'finger3'];
    const startX = 1010;
    const startY = 1139;
    const endX = 972;
    const endY = 2025;

    for (const finger of fingers) {
        await driver.performActions([createFingerActions(finger, startX, startY, endX, endY)]);
    }
}

async function selectDateFromCalendar() {
    await $(elements.memberDetails.dateSelect).waitForExist();
    await $(elements.memberDetails.dateSelect).click();

    await $(elements.memberDetails.firstDate).waitForExist();
    await $(elements.memberDetails.firstDate).click();

    await $(elements.myAshaLocators.okBtn).waitForExist();
    await $(elements.myAshaLocators.okBtn).click();

    await clickOnNext();
}

async function phoneNumberDetails() {
    const mobileNoField = await $(elements.memberDetails.mobileNoField);
    await mobileNoField.click();
    const phoneNoValue = generateUniquePhoneNumber();
    await mobileNoField.setValue(phoneNoValue);
    await clickOnNext();
}

async function selectSingleNoRadioOption(noOptionExistence = 1) {
    for (let i = 0; i < noOptionExistence; i++) {
        await $(elements.newFamilyMemberLocators.noRadioOptionList).waitForExist();
        await $(elements.newFamilyMemberLocators.noRadioOptionList).click();
        await clickOnNext();
    }
}

async function submitForm() {
    await $(elements.myAshaLocators.submitForm).waitForExist();
    await $(elements.myAshaLocators.submitForm).click();
    await clickOnNext();

}

async function selectSingleYesRadioOption(yesOptionExistence = 1) {
    for (let i = 0; i < yesOptionExistence; i++) {
        await $(elements.memberDetails.yesRadioBtn).waitForExist();
        await $(elements.memberDetails.yesRadioBtn).click();
        await clickOnNext();
    }
}

async function selectIlliterateOption() {
    await $(elements.newFamilyMemberLocators.selectLocationDropdown).waitForExist();
    await $(elements.newFamilyMemberLocators.selectLocationDropdown).click();
    await $(elements.memberDetails.illiterateOption).waitForExist();
    await $(elements.memberDetails.illiterateOption).click();
    await clickOnNext();
}

async function selectHomeTab() {
    await $(elements.homeIcon.homeBtn).waitForExist();
    await $(elements.homeIcon.homeBtn).click();
}

async function syncData() {
    await $(elements.homeIcon.syncIcon).waitForExist();
    await $(elements.homeIcon.syncIcon).click();
}

function generateUniquePhoneNumber() {
    const firstDigit = 9;
    const remainingDigits = Math.floor(100000000 + Math.random() * 900000000); // Generates a 9-digit number
    return `${firstDigit}${remainingDigits}`;
}

export {
    navigateToChfc,
    addFamilyDetails,
    clickOnNext,
    selectCaste,
    selectMultipleNoOption,
    selectAllOption,
    selectAnganId,
    selectYesOption,
    addHeadMemberDetails,
    selectYear,
    scrollCalendarToSelectDate,
    selectDateFromCalendar,
    phoneNumberDetails,
    selectSingleNoRadioOption,
    selectIlliterateOption,
    selectSingleYesRadioOption,
    addSonMemberData,
    selectPastMonthData,
    submitForm,
    selectHomeTab,
    syncData,
    navigateToWorkStatus,
    clickOnOk,
    generateUniquePhoneNumber
};
