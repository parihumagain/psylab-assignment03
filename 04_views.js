// In this file you can instantiate your views
// First instantiate your wrapping views, then you can instantiate your trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/



// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator('intro',{
    trials: 1,
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
   text: `Welcome to our experiment Press next to go to next page`,

    /*`This is a sample introduction view.
            <br />
            <br />
            /*Welcome to our experimet on mental rotation. Thank you for participating.
            You are in the <strong>${coin}</strong> group.
            <br />
            <br />
            This is a minimal experiment with one key press view.`,*/
   buttonText: 'Next'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instrucions',
    title: 'General Instructions',
    text:  `Instructions
            <br />
            <br />
            You will be seeing two figures. The right figure should serve as a reference point.
            The left figure is rotated at the x-axis.
            Your task is to say whether the figures match or not by mentally rotating them.
            Press f  if they are same and press j if they are different.
            <br />
            <br />
            This experiment is comprised of 5 trials`,

    buttonText: 'Next'
});

//beginn View
const beginn = babeViews.view_generator('Beginn',{
    trials: 1,
    name: 'Begin',
    text:  `Instructions
            <br />
            <br />
            When ever you  are ready press next botton to begin he experiment`,

    buttonText: 'Next'
});



// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator('postTest',{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator('thanks',{
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial
*/


// Here, we initialize a forcedChoice view
const trails = babeViews.view_generator('trails',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.key_press.length,
    // name and trial_type should be identical to the variable name
    name: 'key_press',
    trial_type: 'key_press',
    data: _.shuffle(trial_info.key_press)
});

// Forced choise tasks

/*const forced_choice_trials = [
    {
        picture: "path/to/picture_of_questionmark.jpg",
        question: "What's the weather like? like?",
        option1: "shiny",
        option2: "rainbow"
    }
];
*/
// There are many more templates available:
// forcedChoice, sliderRating, dropdownChoice, testboxInput, ratingScale, imageSelection, sentenceChoice, keyPress, selfPacedReading and selfPacedReading_ratingScale

// If the provided templates are not enough, we can just create custom view templates in 02_custom_views_templates.js and use them here
