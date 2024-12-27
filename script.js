// Button to start lessons
function startLesson(lessonId) {
    alert('You have started ' + lessonId);
    // You can add further functionality here, like loading lesson content dynamically.
}

// Quiz answer checking
function checkAnswer(selectedAnswer) {
    if (selectedAnswer === 'chord') {
        alert('Correct! A chord is a combination of notes.');
    } else {
        alert('Oops! That’s not correct.');
    }
}

// Example of handling profile editing
document.getElementById('edit-profile').addEventListener('click', function() {
    const newName = prompt("Enter your new name:");
    if (newName) {
        document.getElementById('user-name').textContent = newName;
    }
});

// Example of handling login/signup buttons
document.getElementById('login').addEventListener('click', function() {
    alert('Redirecting to login page...');
    // Redirect to login page (you can replace this with an actual redirect URL)
});

document.getElementById('signup').addEventListener('click', function() {
    alert('Redirecting to sign up page...');
    // Redirect to signup page (you can replace this with an actual redirect URL)
});
















// Simulating user login/signup (for now)
document.getElementById('login').addEventListener('click', function() {
    const username = prompt('Enter your username:');
    if (username) {
        alert('Welcome back, ' + username + '!');
        document.getElementById('user-name').textContent = username;
    }
});

document.getElementById('signup').addEventListener('click', function() {
    const username = prompt('Create a new username:');
    if (username) {
        alert('Account created for ' + username);
        document.getElementById('user-name').textContent = username;
    }
});

// Starting a lesson and displaying quiz content
function startLesson(lessonId) {
    let lessonContent = '';
    let quizContent = '';

    switch (lessonId) {
        case 'lesson1':
            lessonContent = `
                <h3>What is Music?</h3>
                <p>Music is the organization of sound over time, including melody, harmony, and rhythm.</p>
            `;
            quizContent = `
                <h4>Quiz: What is the main element of music?</h4>
                <button onclick="checkAnswer('melody')">Melody</button>
                <button onclick="checkAnswer('harmony')">Harmony</button>
                <button onclick="checkAnswer('rhythm')">Rhythm</button>
            `;
            break;
        case 'lesson2':
            lessonContent = `
                <h3>Notes and Scales</h3>
                <p>Notes are the building blocks of music. Scales are sequences of notes in a specific order.</p>
            `;
            quizContent = `
                <h4>Quiz: What is a scale?</h4>
                <button onclick="checkAnswer('scale')">A sequence of notes</button>
                <button onclick="checkAnswer('chord')">A combination of notes</button>
            `;
            break;
        case 'lesson3':
            lessonContent = `
                <h3>Chords and Progressions</h3>
                <p>Chords are combinations of notes played together. Progressions are sequences of chords.</p>
            `;
            quizContent = `
                <h4>Quiz: What is a chord?</h4>
                <button onclick="checkAnswer('chord')">A combination of notes</button>
                <button onclick="checkAnswer('scale')">A sequence of notes</button>
            `;
            break;
        default:
            lessonContent = `<h3>Lesson not found</h3>`;
            quizContent = ``;
    }

    document.getElementById('lesson-details').innerHTML = lessonContent;
    document.getElementById('lesson-quiz').innerHTML = quizContent;
}

// Handling quiz answer validation
function checkAnswer(selectedAnswer) {
    if (selectedAnswer === 'chord') {
        alert('Correct! A chord is a combination of notes.');
    } else if (selectedAnswer === 'scale') {
        alert('Correct! A scale is a sequence of notes.');
    } else if (selectedAnswer === 'melody') {
        alert('Correct! Melody is one of the main elements of music.');
    } else if (selectedAnswer === 'harmony') {
        alert('Correct! Harmony is one of the main elements of music.');
    } else {
        alert('Oops! That’s not correct.');
    }
}

// Example of handling profile editing
document.getElementById('edit-profile').addEventListener('click', function() {
    const newName = prompt("Enter your new name:");
    if (newName) {
        document.getElementById('user-name').textContent = newName;
    }
});
