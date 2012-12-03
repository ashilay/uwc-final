
(function(uwc, window, $) {  
    
    $(window).load(function() {   
        
    
    // viewModel contains app data and business logic
    function viewModel() {
        var self = this;
        
        self.greeting = {
            name: 'Artem Shylai',
            greeting: 'Frontend developer, tester. Always looking forward. Love to learn and collaborate.'
        };
        
        self.contacts = {
            phone: 'number',
            email: 'email',
            website: 'http://ms.p.ht/',
            skype: 'skype'
        };
        
        self.social = {
            twitter: 'https://twitter.com/',
            facebook: 'http://www.facebook.com/',
            linkedin: 'http://www.linkedin.com/'            
        };
        
        self.description = {
            who: {
                title: 'Who I am?',
                text: 'I am UA based graphic designer, ilustrator and webdesigner creating \n\
                effective visual identities for companies of all size around the world. \n\
                As graphic designer, I am a problem solver at heart and strive to deliver \n\
                the most effective solution at the higest of standar'
            },
            why: {
                title: 'Why me?',
                text: [
                    'Very Good understanding of the principles of design and design theories',
                    'Good technical skills enables me to use my knowlege of design principles',
                    'Ability to conceptualise and think visually',
                    'Ability to work within a team or alone'
                ]
            },
            benefits: {
                title: 'What is your benefit?',
                text: 'You will receive the fast developed product with high quality. \n\
                        Close and direct collaboration with a customer is the main goal. \n\
                        Daily meetings to elaborate requirements, discuss project priorities road map. \n\
                        Increment, iteration development allows to implement features in a right way with \n\
                        priorities in mind.'
            }
        };
        
        self.education = {
            title: 'Education',
            univercity: 'National Technical University of Ukraine “Kyiv Polytechnic Institute”',
            department: 'Department of automated process control. Programming of controllers',
            degree: 'Degree: MS (Computer Science)'
        };
        
        self.skills = {
            title: 'My Skill Set',
            core: {
                title: 'Core Skills',
                skills: [
                'html5, xhtml, xml',
                'css2, css3',
                'javascript'
            ]},
            libs: {
                title: 'Libs and Frameworks',
                skills: [
                'jQuery, jQuery UI',
                'KnockoutJS MVVM',
                'Skeleton css responsive grid',
                'LESS css pre-processor',
                'html5 boilerplate'
            ]
            }
        };
        
        self.experience = {
            title: 'Experience',
            jobs: [
                {
                 company: 'Infopulse Ukraine',
                 position: 'Frontend developer (web solutions)',
                 responsibility: [
                     'Client side web development.',
                     'Working up design mockups and transformation to valid cross-browser html layout.',
                     'Implementation of application client side logic using modern technologies.',
                     'Active participation in the project team meetings, close collaboration with \n\
                        another team members.'
                 ]
                },
                {
                 company: 'Cogniance Inc.',
                 position: 'QA engineer / Software tester',
                 responsibility: [
                     'Testing of mobile applications (Android, iOS, BlackBerry)',
                     'Testing of web applications',
                     'Creating Software Testing documentation - test cases, scenarios, verification checklists, \n\
                        test plans, metrics and validation matrices',
                     'Cooperation with developers, customers, support'
                 ]
                }
            ]
        }
        
            
    }
    
    
    uwc.vm = new viewModel();
    
    // apply all declarativly bound data
    ko.applyBindings(uwc.vm);        
    
    
    })  
    
    
})(window.uwc = window.uwc || {}, window, jQuery);

