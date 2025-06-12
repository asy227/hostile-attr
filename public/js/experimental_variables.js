var v1_text = [
    'Imagine that you are sitting at the lunch table at school, eating lunch. '
    ,'You look up and see a boy coming over to your table with a drink.'
    , 'You turn around to eat your lunch, and the next thing that happens is that the boy’s drink gets spilled all over your back. The drink gets your shirt all wet.'
]

var v1_images = [
    'images/s1p1.png',
    'images/s1p2.png',
    'images/s1p3.png'
]

var v1_content = v1_text.map((text, index) => {
    return {
        text: text,
        image: v1_images[index]
    };
});

var v1_q = [
    {
        type: 'multiple-choice-image',
        prompt: 'Do you think that he spilled his drink all over you on purpose or on accident?',
        options: [ 
            'images/purpose.png', 
            'images/accident.png',
            'images/question.png'
        ]
    },
    {
        type: 'multiple-choice-image',
        prompt: 'Ignore it',
        options: [ //CHANGE TO CORRRECT IMAGES
            'images/no_answer.png',//no
            'images/maybe_answer.png',//maybe
            'images/yes_answer.jpg'//yes
        ]
    },
    {
        type: 'multiple-choice-image',
        prompt: 'Say something mean back',
        options: [
            'images/no_answer.png',//no
            'images/maybe_answer.png',//maybe
            'images/yes_answer.png'//yes
        ]
    }, 
    {
        type: 'multiple-choice-image',
        prompt: 'Tell a teacher',
        options: [ 
            'images/no_answer.png',//no
            'images/maybe_answer.png',//maybe
            'images/yes_answer.png'//yes
        ]
    }, 
    
    //asked to record voice but you dont need this for hostile attr
    /*{ 
        type: 'audio-input',
        prompt: 'Why does Lisa think this?'
    },*/
]

var v1 = {
    content: v1_images,
    questions: v1_q
}

var v2_text = [
    "Okay, now this next story is about football. Johnny and Bob are best friends. They really enjoy playing football together. Johnny and Bob both want to play on the school football team. The school football team plays every Monday after school.",
    "Johnny thinks that he is not as good at football as Bob is. He thinks that the football manager is more likely to choose Bob for the football team.",
    "But the football manager thinks that both Johnny and Bob are good football players. He wants them both to play in the school football team. But the manager knows that Johnny doesn’t think he will get on the team."
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
        prompt: 'Which of the two statements do you think is right?',
        options: [
            'The football team play on Fridays.',
            'The football team play on Mondays.'
        ]
    },
    {
        type: 'multiple-choice-image',
        prompt: 'Good! Now think about the story to answer this one… which reasoning is correct?',
        options: [
            'images/v2_q1_o1.png',
            'images/v2_q1_o2.png',
            'images/question.jpg'
        ]
    }
]

var v2 = {
    content: v2_images,
    questions: v2_q
}

var v3_text = [
    "Okay… one more story! Sarah and Joe are in the same class at school. Sarah and Joe often sit next to each other. Their teacher is Mrs. Brown. One day Mrs. Brown suggests that Sarah and Joe should bring a video into school to watch with the other children as a treat for being good in class. Mrs. Brown also says to them: 'Make sure you bring in something really funny that I will like too!",
    "Sarah’s favorite videos are cartoons. Joe’s favorite videos are adventure films. Which will it be? Cartoons or adventure films?",
    "Joe says to Sarah: ‘We just can’t decide so I think that we should take in the film that Mrs. Brown would like. Sarah, do you know which Mrs. Brown would like best?’ Sarah has a little think. She doesn’t have a clue which film Mrs. Brown would like! But Sarah decides to tell Joe that she knows that Mrs. Brown likes cartoons best. Sarah thinks that this will make Joe decide to take cartoon videos into school. Joe listens to this and then Joe says; 'We will take in a video of cartoons then.' So Sarah gets to enjoy her favorite cartoons!"
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
        prompt: 'Which of the following statements is true?',
        options: [
            'Mrs Brown asks Sarah and Joe to bring in something funny to watch.',
            'Mrs Brown asks Sarah and Joe to bring in something scary to watch.'
        ]
    },
    {
        type: 'multiple-choice-image',
        prompt: 'Which of the two statements do you think is right?',
        options: [
            'images/v3_q1_o1.png',
            'images/v3_q1_o2.png',
            'images/question.jpg'
        ]
    }
]

var v3 = {
    content: v3_images,
    questions: v3_q
}

var v4_text = [
    "During the war, the Red army captured a member of the Blue army. They want him to tell them where his army's tanks are; they know they are either by the sea or in the mountains. They know that the prisoner will not want to tell them, he will want to save his army, and so he will certainly lie to them.",
    "The prisoner is very brave and very clever, he will not let them find his tanks. The tanks are really in the mountains.",
    "Now when the other side asks him where his tanks are, he says, 'They are in the mountains."
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
        type: 'multiple-choice-image',
        prompt: 'Is it true what the prisoner said?',
        options: [
            'images/check_mark.png',
            'images/x_mark.png'
        ]
    },
    {
        type: 'multiple-choice-image',
        prompt: 'Where will the other army look for his tanks?',
        options: [
            'images/v4_q1_o1.png',
            'images/v4_q1_o2.png',
            'images/question.jpg']
    },
    {
        type: 'audio-input',
        prompt: 'Why did the prisoner say what he said?'
    }
]    

var v4 = { 
    content: v4_images,
    questions: v4_q
}

var v5_text = [
    "Okay, last story! Jill wanted to buy a kitten, so she went to see Mrs. Smith, who had lots of kittens she didn't want. Now Mrs. Smith loved the kittens, and she wouldn't do anything to harm them, though she couldn't keep them all herself.",
    "When Jane visited she wasn't sure she wanted one of Mrs. Smith's kittens, since they were all males and she had wanted a female.",
    "But Mrs. Smith said, 'If no one buys the kittens I'll just have to drown them!'"
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
        type: 'multiple-choice-image',
        prompt: 'Was it true, what Mrs. Smith said?',
        options: [
            'images/check_mark.png',
            'images/x_mark.png'
        ]
    },
    {
        type: 'audio-input',
        prompt: 'Why did Mrs. Smith say this to Jane?'
    },
    {
        type: 'audio-input-goodbye',
        prompt: 'Thank you so much for listening to all of these stories and answering the questions! Is there anything else you would like to tell us about the stories you heard? The next page will your record your answer to this question.'
    }
]

var v5 = {
    content: v5_images,
    questions: v5_q
}

var rmie_q = [
    {
        type: 'image-button',
        prompt: 'What emotion is being displayed here?',
        stimulus: 'images/rmie_p1.png',
        options: ['serious','ashamed','bewildered','alarmed']
    },
    {
        type: 'image-button',
        prompt: 'What emotion is being displayed here?',
        stimulus: 'images/rmie_p2.png',
        options: ['panicked','incredulous','despondent','interested']
    },
    {
        type: 'image-button',
        prompt: 'What emotion is being displayed here?',
        stimulus: 'images/rmie_p3.png',
        options: ['apologetic','friendly','uneasy','dispirited']
    }
]

var rmie = {
    questions: rmie_q
}

var v = [v1,v2,v3,v4,v5];