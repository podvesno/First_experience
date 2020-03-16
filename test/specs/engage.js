// example of a test group
// note: all tests under the test directory are ran
// const {Eyes, Target} = require('@applitools/eyes.webdriverio');
// const eyes = new Eyes();

// eyes.setApiKey('kI5bOq7QyT7tB6Iw1V81p4MwyKgthmq0QVWk1PlzNmI110');

describe('igolf LOGIN PAGE', ()=> {

    it('Login with invalid data',  ()=> {
        browser.url('');

    //    try {
    //     //const viewportSize = browser.getViewportSize();
        
    //      await eyes.open(browser, 'iGolf Connect Account Information', 'My first Javascript test!', {width: 1600, height: 1024});

    //      await eyes.check('Main Page', Target.window());

    //       $('button').click();

    //      await eyes.check('Second page', Target.window());
         
    //      await eyes.close();
    // }
    // finally {
    //      await eyes.abortIfNotClosed();
    // }


       $('input[name=userName]').addValue('test3@test1.com');

       $('input[name=password]').addValue('password11235');

        $('button').click();
        browser.waitUntil(() => {
        return $('.Error').getText() === 'Invalid email or password, please try again.'
        }, 2000, '');

   });


    it('Login with valid Email and invalid password', ()=> {

        browser.url('');
        $('input[name=userName]').addValue('test3@test.com');

        $('input[name=password]').addValue('password*235');

        $('button').click();
        browser.waitUntil(() => {
            return $('.Error').getText() === 'Invalid email or password, please try again.'
          }, 2000, '');

    });

    it('Login with invalid Email and valid password', ()=> {

        browser.url('');
        $('input[name=userName]').addValue('test3@tes*.com');

        $('input[name=password]').addValue('password1235');

        $('button').click();
        browser.waitUntil(() => {
            return $('.Error').getText() === 'Invalid email or password, please try again.'
          }, 2000, '');

    });

    it('Login with invalid Email and blank Password', ()=> {

        browser.url('');
        $('input[name=userName]').addValue('test3@test1.com');

        $('input[name=password]').addValue('');

        $('button').click();
        browser.waitUntil(() => {
            return $('.Error').getText() === 'Password is required.'
          }, 2000, '');

    });

    it('Login with invalid Password and blank Email', ()=> {

        browser.url('');
        $('input[name=userName]').addValue('');

        $('input[name=password]').addValue('password1235');

        $('button').click();
        browser.waitUntil(() => {
            return $('.Error').getText() === 'Email is required.'
          }, 2000, '');

    });

    it('Login with Password longer 90 characters and Email > 45 characters', ()=> {

        browser.url('');
        $('input[name=userName]').addValue('sdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsdfsdfs5');

        $('input[name=password]').addValue('-Afs-F*S-*AS/D-F*A<>?<]][\';\":|"1231231123123');

        $('button').click();
        browser.waitUntil(() => {
            return $('.Error').getText() === 'Invalid Custom Parameters'
          }, 2000, '');

    });

    it('Login with blank fields', ()=> {

        browser.url('');

        $('button').click();

        $('div[class*=Error]').getText().should.be.equal('Email is required.\nPassword is required.');

    });

    it('Login with valid data', ()=> {

        browser.url('');

        $('input[name=userName]').addValue('test3@test.com');

        $('input[name=password]').addValue('password1235');

        $('button').click();
    });
});

describe('igolf changing pages', ()=> {

    it('Changing page Pace of Play', ()=> {

        //browser.setTimeouts(1000);
        browser.waitUntil(() => {
            return $('div[class*=Menu]')}, 2000, '');
        browser.click('a[href="/pace-of-play"]');

        browser.waitUntil(() => {
        return $('div[class*=Menu]')}, 2000, '');
        //browser.pause(2000);

        $('a[href="/pace-of-play"]')
        .click();

        expect(browser.getText('span[class*=color-login-btn]'))
        .equal('Pace of Play');

   });

    it('Changing page Guest Feedback', ()=> {
        browser.pause(2000);
        $('a[href="/guest-feedback"]')
        .click();
        browser.waitUntil(() => {
            return $('span[class*=color-login-btn]').getText() === 'Guest Feedback'
          }, 2000, '');
    });

    it('Changing page Scorecard', ()=> {
        browser.pause(2000);
        $('a[href="/scorecard-manager/scorecard"]')
        .click();

        browser.waitUntil(() => {
            return $('span[class*=font-color-login-btn]').getText() === 'Scorecard Manager'
          }, 2000, '');
    });

    it('Changing page Course Map', ()=> {
        browser.pause(2000);
        $('a[href="/scorecard-manager/course-map"]')
        .click();
        browser.pause(2000);
        expect(browser.getText('span.title'))
        .equal('Submit A Request For A Layout Change');

    });

    it('Changing page Pro Tips' , ()=> {
        browser.pause(2000);
        const linkProtips = $('a[href="/scorecard-manager/pro-tips"]');
        linkProtips.click();
        browser.pause(2000);
        expect(browser.getText('span.title'))
        .equal('Edit Pro Tips');

    });
});

describe ('Opening all blocs on Pace of Play page' , ()=> {

    it('Open Pace of Play Cycle Comparison' , ()=> {
        $('a[href="/pace-of-play"]')
        .click();
        $('div.toggle-box span.pointer')
        .click();
        browser.pause(2000);
        $('div[class*=GraphChart]').click;
        //browser.saveScreenshot('ScreenNew');

     });

     it('Open Average Pace of Play - Days of the Week' , ()=> {
         $('.AverageBarChart .xAxis .recharts-layer:first-child tspan')
         .click();
         $('.AverageBarChart .xAxis .recharts-layer:last-child tspan')
         .click();

    });

    it('Check link of clients Bushnell Laser check TITLE' , ()=> {
        $('a[ href*=bushnell-golf-la]')
        .click();
        browser.pause(2000);
        browser.getTitle().should.equal('iGolf Connect Account Information');
    });
});

describe ('Change screens on Guest Feedback page' , () =>{
    it('Opening Guest Feedback page' , () => {
        $('a[href="/guest-feedback"]')
        .click();
    });

    it('Opening Customer Comments' , () => {
        //browser.close('');
        browser.url('');
        browser.waitUntil(() => {
            return $('span[class*=color-login-btn]').getText() === 'Guest Feedback'
          }, 2000, '');
        // $('a[href="/guest-feedback/customer-comments"]')
        // .click();

}); 
}); 