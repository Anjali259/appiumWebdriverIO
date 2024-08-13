module.exports = {
    login: {
        username: '//*[@resource-id="com.argusoft.sewa.android.app:id/txtUsername"]',
        password: '//*[@resource-id="com.argusoft.sewa.android.app:id/txtPassword"]',
        signin: '//*[@resource-id="com.argusoft.sewa.android.app:id/loginButton"]',
        dashboardTitle: '//*[@resource-id="com.argusoft.sewa.android.app:id/toolbar_title"]'
    },
    homeIcon: {
        homeBtn: '//*[@resource-id="com.argusoft.sewa.android.app:id/menu_home"]',
        syncIcon: '//*[@resource-id="com.argusoft.sewa.android.app:id/menu_refresh"]'
    },
    myAshaLocators: {
        myPeopleAshaTab: '//android.widget.TextView[@text="My People ASHA"]',
        nextBtn: '//*[@resource-id="com.argusoft.sewa.android.app:id/nextButton"]',
        eligibleCouples: '//android.widget.TextView[@text="Eligible Couples"]',
        secondOption: '//*[@resource-id="com.argusoft.sewa.android.app:id/list_first_text_bold" and @text="A016152320"]',
        selectDate: '//android.widget.TextView[@text="Select date"]',
        okBtn: '//android.widget.Button[@resource-id="android:id/button1"]',
        selectMember: '//android.widget.TextView[@text="--Select--"]',
        proceedWithVisit: '//android.widget.TextView[@text="Proceed with visit"]',
        noBtn: '//android.widget.RadioButton[@text="NO"]',
        submitForm: '//android.widget.RadioButton[@text="I want to submit the data"]',
        successForm: '//android.widget.TextView[@text="Form is complete."]',
        completeForm: '//*[@resource-id="com.argusoft.sewa.android.app:id/nextButton"]',
        searchMember: '//android.widget.EditText[@text="Search Member"]'
    },
    newFamilyMemberLocators: {
        cfhcTab: '//android.widget.TextView[@text="CFHC"]',
        cfhcOption: '//android.widget.TextView[@text="Comprehensive family health census"]',
        nextBtn: '//*[@resource-id="com.argusoft.sewa.android.app:id/nextButton"]',
        addNewFamilyBtn: '//android.widget.TextView[@text="ADD NEW FAMILY"]',
        houseNumber: '//android.widget.EditText[@text="House Number"]',
        address1: '//android.widget.EditText[@text="Address Line 1"]',
        address2: '//android.widget.EditText[@text="Address Line 2"]',
        selectLocationDropdown: '//android.widget.TextView[@text="-Select-"]',
        dropdownList: '//android.widget.TextView',
        hinduOption: '//android.widget.TextView[@text="Hindu"]',
        generalOption: '//android.widget.TextView[@text="General"]',
        noRadioOptionList: '(//android.widget.RadioButton[@text="NO"])',
        allOption: '//android.widget.TextView[@text="All"]',
        angandID: '//android.widget.TextView[@text="ANGANVADI  1 TIMBA"]',

    },
    memberDetails: {
        yesRadioBtn: '//android.widget.RadioButton[@text="YES"]',
        firstName: '//android.widget.EditText[@text="First Name"]',
        middleName: '//android.widget.EditText[@text="Middle Name"]',
        lastName: '//android.widget.EditText[@text="Last Name"]',
        adharName: '//android.widget.EditText[@text="Name as per Aadhaar"]',
        fatherFathersName: '//android.widget.EditText[@text="Father’s father’s name"]',
        genderMale: '//android.widget.RadioButton[@text="Male"]',
        unmarriedOption: '//android.widget.TextView[@text="Unmarried"]',
        marriedOption: '//android.widget.TextView[@text="Married"]',
        yearPicker: '//android.widget.TextView[@resource-id="android:id/date_picker_header_year"]',
        previousMonth: '//android.widget.ImageButton[@content-desc="Previous month"]',
        firstDate: '//android.view.View[@text="1"]',
        sonData: '//android.widget.TextView[@text="Son"]',
        selectDate: '//android.widget.TextView[@text="Select date"]',
        dateSelect: '//android.widget.TextView[@resource-id="android:id/text1" and @text="2004"]',
        mobileNoField: '//android.widget.EditText[@text="Mobile Number"]',
        illiterateOption: '//android.widget.TextView[@text="Illiterate"]',
    },
    workStatusLocators: {
        workStatusTab: '//android.widget.TextView[@text="Work Status"]',
        selectFamily: '(//android.widget.ImageView[@content-desc="Description"])[1]',
        OkButton: '//android.widget.Button[@text="OK"]',
        familyDetails: '//android.widget.TextView[contains(@text, "QAHead MiddleName") and contains(@text, "QAFirstName MiddleName")]',
    }
}

