var v1_text = [
    'Imagine that you are sitting at the lunch table at school, eating lunch. '
    ,'You look up and see a boy coming over to your table with a drink.'
    , 'You turn around to eat your lunch, and the next thing that happens is that the boy’s drink gets spilled all over your back. The drink gets your shirt all wet.'
]

var v1_images = [
    'images/v1_p1.png',
    'images/v1_p2.png',
    'images/v1_p3.png'
]



var v1_content = v1_text.map((text, index) => {
    return {
        text: text,
        image: v1_images[index]
    };
});

var v1_q = [
    {
        type: 'multiple-choice',
        prompt: 'Based on this story, do you think that he spilled his drink all over you on purpose, or on accident?',
        options: [ 
            'Purpose',
            'Accident',
            '?'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Ignore it',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Say someting mean',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    }, 
    {
        type: 'multiple-choice',
        prompt: 'Ask a teacher for a towel',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Which are you most likely to do?',
        options: [ 
            'Ignore it',
            'Say something mean',
            'Ask a teacher for a towel'
        ]
    },

]

var v1 = {
    content: v1_images,
    questions: v1_q
}

var v2_text = [
    "Imagine that you are standing on the playground, playing catch with a number of children. ",
    "You throw the ball to a girl and she catches it. ",
    "You turn around, and the next thing you realize is that the girl has thrown the ball and hit you in the middle of your back. The ball hits you hard, and it hurts a lot"
]

var v2_images = [
    'images/v2_p1.png',
    'images/v2_p2.png',
    'images/v2_p3.png']

var v2_content = v2_text.map((text, index) => {
    return {
        text: text,
        image: v2_images[index]
    };
});

var v2_q = [
    {
        type: 'multiple-choice',
        prompt: 'Based on this story, do you think that she hit you on purpose, or on accident?',
        options: [ 
            'Purpose',
            'Accident',
            '?'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Ignore it',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Hit her back',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    }, 
    {
        type: 'multiple-choice',
        prompt: 'Fetch ice for the swelling',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Which are you most likely to do?',
        options: [ 
            'Ignore it',
            'Hit her back',
            'Fetch ice for the swelling'
        ]
    },
]

var v2 = {
    content: v2_images,
    questions: v2_q
}

var v3_text = [
    "Imagine that you are walking to school and you’re wearing your new tennis shoes. You really like your new shoes and this is the first day you have worn them. ",
    "Suddenly, you are bumped from behind by a boy. ",
    "You stumble and fall into a mud puddle and your new shoes get muddy."
]

var v3_images = [
    'images/v3_p1.png',
    'images/v3_p2.png',
    'images/v3_p3.png'
]

var v3_content = v3_text.map((text, index) => {
    return {
        text: text,
        image: v3_images[index]
    };
});

var v3_q = [
    {
        type: 'multiple-choice',
        prompt: 'Based on this story, do you think that the boy bumped you on purpose, or on accident?',
        options: [ 
            'Purpose',
            'Accident',
            '?'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Ignore it and walk away',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Push the boy in the mud',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    }, 
    {
        type: 'multiple-choice',
        prompt: 'Clean off your choes',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Which are you most likely to do?',
        options: [ 
            'Ignore it and walk away',
            'Push the boy in the mud',
            'Clean off your shoes'
        ]
    },
]

var v3 = {
    content: v3_images,
    questions: v3_q
}

var v4_text = [
    "Imagine that you have finished an art project for school. You’ve worked on it a long time and you’re really proud of it. A girl comes over to look at your project. The girl is holding a jar of paint. ",
    "You turn away for a minute and when you look back...",
    "...the girl has spilled paint on your art project. You worked on the project for a long time and now it is ruined."
]

var v4_images = [
    'images/v4_p1.png',
    'images/v4_p2.png',
    'images/v4_p3.png'
]

var v4_content = v4_text.map((text, index) => {
    return {
        text: text,
        image: v4_images[index]
    };
});

var v4_q = [
    {
        type: 'multiple-choice',
        prompt: 'Based on this story, do you think that the girl spilled the paint on purpose, or on accident?',
        options: [ 
            'Purpose',
            'Accident',
            '?'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Pretend like notihng happened',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Spill paint on the girl',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    }, 
    {
        type: 'multiple-choice',
        prompt: 'Try to fix the project',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Which are you most likely to do?',
        options: [ 
            'Pretend like nothing happened',
            'Spill paint on the girl',
            'Try to fix the project'
        ]
    },

]    

var v4 = { 
    content: v4_images,
    questions: v4_q
}

var v5_text = [
    "Imagine that you are on the playground. You and some other kids are having a race. A boy is standing on the side, bouncing a basketball. ",
    "The next thing you know is that the boy has bounced the ball and it has rolled under your feet, making you fall.",
    "You scrape your knee and someone else wins the race."
]

var v5_images = [
    'images/v5_p1.png',
    'images/v5_p2.png',
    'images/v5_p3.png'
]   

var v5_content = v5_text.map((text, index) => {
    return {
        text: text,
        image: v5_images[index]
    };
});

var v5_q = [
    {
        type: 'multiple-choice',
        prompt: 'Based on this story, do you think that the boy made you fall on purpose, or on accident?',
        options: [ 
            'Purpose',
            'Accident',
            '?'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Ignore it and walk away',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Say someting mean to him',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    }, 
    {
        type: 'multiple-choice',
        prompt: 'Get bandaids for your knee',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Which are you most likely to do?',
        options: [ 
            'Ignore it and walk away',
            'Say something mean to him',
            'Get band-aids for your knee'
        ]
    },

]

var v5 = {
    content: v5_images,
    questions: v5_q
} 

//------------------------------------------------------------------adding on-----------------------------------------------------------

var v6_text = [
    "Imagine that you brought your new toy to school today. You saved up your allowance to buy it and you want to show it to the other kids at school.",
    "You let a girl play with it for a few minutes while you go get a drink of water. ",
    "When you get back you realize that the girl has broken your brand new toy"
]

var v6_images = [
    'images/v6_p1.png',
    'images/v6_p2.png',
    'images/v6_p3.png'
]   

var v6_content = v6_text.map((text, index) => {
    return {
        text: text,
        image: v6_images[index]
    };
});

var v6_q = [
    {
        type: 'multiple-choice',
        prompt: 'Based on this story, do you think that the girl broke your toy on purpose, or on accident?',
        options: [ 
            'Purpose',
            'Accident',
            '?'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Ignore it and walk away',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Warn her that you are going to hurt her',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    }, 
    {
        type: 'multiple-choice',
        prompt: 'Try to fix the toy',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Which are you most likely to do?',
        options: [ 
            'Nothing',
            'Warn her that you are going to hurt her',
            'Try to fix the toy'
        ]
    },
]

var v6 = {
    content: v6_images,
    questions: v6_q
} 

var v7_text = [
    "Imagine that you are in the lunchroom. You’ve just gotten your tray, and you’re walking to a table.",
    "Suddenly, a boy bumps into your arm, and you drop your tray.",
    "Your food is spilled all over the floor."
]

var v7_images = [
    'images/v7_p1.png',
    'images/v7_p2.png',
    'images/v7_p3.png'
]   

var v7_content = v7_text.map((text, index) => {
    return {
        text: text,
        image: v7_images[index]
    };
});

var v7_q = [
    {
        type: 'multiple-choice',
        prompt: 'Based on this story, do you think that the boy bumped into you on purpose, or on accident?',
        options: [ 
            'Purpose',
            'Accident',
            '?'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Ignore it',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Say someting mean to him',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    }, 
    {
        type: 'multiple-choice',
        prompt: 'Ask a lunch lady to help you clean up',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Which are you most likely to do?',
        options: [ 
            'Ignore it',
            'Say something mean to him',
            'Ask a lunch lady to help you clean up'
        ]
    },

]

var v7 = {
    content: v7_images,
    questions: v7_q
} 

var v8_text = [
    "Imagine that you are at a water fountain waiting to get a drink.",
    "There is a girl taking her turn at the fountain",
    "The next thing you know, the girl has splashed some water on your face"
]

var v8_images = [
    'images/v8_p1.png',
    'images/v8_p2.png',
    'images/v8_p3.png'
]   

var v8_content = v8_text.map((text, index) => {
    return {
        text: text,
        image: v8_images[index]
    };
});

var v8_q = [
    {
        type: 'multiple-choice',
        prompt: 'Based on this story, do you think that the girl splashed water on you on purpose, or on accident?',
        options: [ 
            'Purpose',
            'Accident',
            '?'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Ignore it and walk away',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Splash water on her',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    }, 
    {
        type: 'multiple-choice',
        prompt: 'Wipe your face off',
        options: [ 
            'No',
            'Maybe',
            'Yes'
        ]
    },
    {
        type: 'multiple-choice',
        prompt: 'Which are you most likely to do?',
        options: [ 
            'Ignore it and walk away',
            'Splash water on her',
            'Wipe your face off'
        ]
    },

]

var v8 = {
    content: v8_images,
    questions: v8_q
} 

var v = [v1,v2,v3,v4,v5, v6, v7, v8];

