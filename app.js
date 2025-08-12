// Simple JavaScript file for our Git tutorial project

document.addEventListener('DOMContentLoaded', function() {
    console.log('App initialized!');
    
    // We'll modify this file later to demonstrate Git tracking changes
    function addNewFeature() {
        const featureList = document.querySelector('#feature-list ul');
        const newFeature = document.createElement('li');
        newFeature.textContent = 'New feature added!';
        featureList.appendChild(newFeature);
    }
    
    // We'll uncomment and use this later
     const button = document.createElement('button');
     button.textContent = 'Add Feature';
     button.addEventListener('click', addNewFeature);
     document.querySelector('.container').appendChild(button);
});