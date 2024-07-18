const storyContent = document.getElementById('story-content');
const choicesContainer = document.getElementById('choices');

// Example story data
const story = {
    intro: {
        text: "You find yourself in a dark forest. What do you do next?",
        choices: [
            { text: "Walk forward", link: "forward" },
            { text: "Climb a tree", link: "climb_tree" },
        ],
    },
    forward: {
        text: "You walk forward and find a river. What do you do next?",
        choices: [
            { text: "Swim across", link: "swim_across" },
            { text: "Follow the river", link: "follow_river" },
        ],
    },
    climb_tree: {
        text: "You climb a tree and see a village in the distance. What do you do next?",
        choices: [
            { text: "Climb down and walk to the village", link: "walk_to_village" },
            { text: "Stay in the tree", link: "stay_in_tree" },
        ],
    },
    swim_across: {
        text: "You swim across and find a hidden treasure. The end.",
        choices: [],
    },
    follow_river: {
        text: "You follow the river and find a bridge. What do you do next?",
        choices: [
            { text: "Cross the bridge", link: "cross_bridge" },
            { text: "Set up camp", link: "set_up_camp" },
        ],
    },
    walk_to_village: {
        text: "You walk to the village and find friendly villagers. The end.",
        choices: [],
    },
    stay_in_tree: {
        text: "You stay in the tree and wait for help. The end.",
        choices: [],
    },
    cross_bridge: {
        text: "You cross the bridge and find a castle. The end.",
        choices: [],
    },
    set_up_camp: {
        text: "You set up camp and rest for the night. The end.",
        choices: [],
    }
};

// Function to load a specific part of the story
function loadStory(part) {
    const storyPart = story[part];
    storyContent.innerHTML = storyPart.text;

    choicesContainer.innerHTML = '';
    storyPart.choices.forEach(choice => {
        const choiceElement = document.createElement('a');
        choiceElement.classList.add('choice');
        choiceElement.textContent = choice.text;
        choiceElement.href = '#';
        choiceElement.onclick = () => {
            loadStory(choice.link);
            return false;
        };
        choicesContainer.appendChild(choiceElement);
    });
}

// Load the intro story part on page load
window.onload = () => {
    loadStory('intro');
};
