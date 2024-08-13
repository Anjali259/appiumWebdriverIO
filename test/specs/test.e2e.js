// import login from "../handlers/login";
// const { expect, browser, $ } = require('@wdio/globals')
import * as elements from "../../utils/locators";
import login from "../../utils/login";
import * as newFamilyFunc from "../newFamilyFunc";

describe.only('My Login application', () => {
    it('should login with valid credentials', async () => {
        await login();
    })

    it('should add new family member', async () => {
        await newFamilyFunc.navigateToChfc();
        await newFamilyFunc.addFamilyDetails();

        await newFamilyFunc.selectCaste();
        await newFamilyFunc.selectMultipleNoOption();
        await newFamilyFunc.clickOnNext();
        
        await newFamilyFunc.selectAllOption();
        await newFamilyFunc.selectAnganId();
        await newFamilyFunc.clickOnNext(2);

        // Add Head of the family member
        await newFamilyFunc.selectYesOption();

        // Add head of member details
        await newFamilyFunc.addHeadMemberDetails();

        // Birth date selection of head members
        await newFamilyFunc.selectYear();
        await newFamilyFunc.scrollCalendarToSelectDate();
        await newFamilyFunc.selectDateFromCalendar();

        await newFamilyFunc.phoneNumberDetails();
        await newFamilyFunc.clickOnNext(2);

        await newFamilyFunc.selectSingleNoRadioOption();
        await newFamilyFunc.selectIlliterateOption();

        await newFamilyFunc.selectSingleNoRadioOption(4);
        await newFamilyFunc.selectMultipleNoOption();

        await newFamilyFunc.selectMultipleNoOption();
        await newFamilyFunc.selectSingleNoRadioOption();
        await newFamilyFunc.clickOnNext();

        await newFamilyFunc.selectYesOption();
        await newFamilyFunc.clickOnNext();

        // Add family member son details
        await newFamilyFunc.addSonMemberData();

        // Enter birth details
        await newFamilyFunc.selectPastMonthData();

        // 2 TIMES NEXT BUTTON
        await newFamilyFunc.clickOnNext(2);

        // Enter disease details
        await newFamilyFunc.selectSingleNoRadioOption(4);
        await newFamilyFunc.selectMultipleNoOption();

        await newFamilyFunc.selectMultipleNoOption();
        await newFamilyFunc.selectSingleNoRadioOption();

        await newFamilyFunc.clickOnNext();
        await newFamilyFunc.selectSingleNoRadioOption();

        await newFamilyFunc.submitForm();
        await newFamilyFunc.clickOnNext();

        await newFamilyFunc.selectHomeTab();
        await newFamilyFunc.syncData();

        await newFamilyFunc.navigateToWorkStatus();
        await newFamilyFunc.clickOnNext(4);

        const familyItem = await $(elements.workStatusLocators.selectFamily);
        await familyItem.waitForExist({ timeout: 5000 });
        await familyItem.click();

        const familyAssertion = await $(elements.workStatusLocators.familyDetails);
        await familyAssertion.waitForExist({ timeout: 2000 });
        await expect(familyAssertion).toBeDisplayed();

        await newFamilyFunc.clickOnOk();
        await newFamilyFunc.selectHomeTab();
    })
})



