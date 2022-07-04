
function GenerateName(){
    let chosenNoun = noun[Math.floor(Math.random()*noun.length)];
    let chosenadj = Adj[Math.floor(Math.random()*Adj.length)];
    let result = `${chosenadj} ${chosenNoun}`;
    return result;

}


noun = [
    "Aircraft",
    "Alligator",
    "Ankle",
    "Apple",
    "Area",
    "Armchair",
    "Art",
    "Aunt",
    "Baby",
    "Back",
    "Bag",
    "Bakery",
    "Ball",
    "Balloon",
    "Bat",
    "Beans",
    "Bear",
    "Bed",
    "Bermudas",
    "Bird",
    "Black",
    "Blender",
    "Blouse",
    "Boat",
    "Body",
    "Book",
    "Bow",
    "Brass",
    "Bridge",
    "Bucket",
    "Bulb",
    "Business",
    "Butter",
    "Cabinet",
    "Cafe",
    "Candy",
    "Cap",
    "Car",
    "Case",
    "Cat",
    "Chair",
    "Change",
    "Charlie",
    "Cheeks",
    "Cheese",
    "Chest",
    "Chicken",
    "Child",
    "City",
    "Clock",
    "Coffee",
    "Community",
    "Company",
    "Computer",
    "Cooker",
    "Costume",
    "Couch",
    "Country",
    "Cow",
    "Crest",
    "Day",
    "Deer",
    "Dentist",
    "Designer",
    "Desk",
    "Desktop",
    "Detective",
    "Doctor",
    "Dog",
    "Donkey",
    "Door",
    "Dresser",
    "Drum",
    "Ducation",
    "Ears",
    "Egg",
    "Elephant",
    "End",
    "Eye",
    "Face",
    "Fact",
    "Factory",
    "Family",
    "Fan",
    "Father",
    "Film",
    "Fish",
    "Flag",
    "Foot",
    "Force",
    "Forest",
    "Freezer",
    "Friend",
    "Frog",
    "Game",
    "Garage",
    "Girl",
    "Government",
    "Grapes",
    "Group",
    "Guest",
    "Guy",
    "Hamburger",
    "Hand",
    "Head",
    "Health",
    "Heart",
    "History",
    "Home",
    "Hospital",
    "Host",
    "Hotel",
    "Hour",
    "House",
    "Idea",
    "Information",
    "Issue",
    "Jersey",
    "Jewelry",
    "Job",
    "Kid",
    "Kind",
    "Law",
    "Leg",
    "Level",
    "Library",
    "Life",
    "Lighter",
    "Line",
    "Lot",
    "Luggage",
    "Man",
    "Member",
    "Milk",
    "Minute",
    "Moment",
    "Money",
    "Monkey",
    "Month",
    "Morning",
    "Mother",
    "Mouse",
    "Name",
    "Neck",
    "Night",
    "Number",
    "Office",
    "Onion",
    "Orange",
    "Others",
    "Paper",
    "Parent",
    "Park",
    "Part",
    "Party",
    "Pasta",
    "People",
    "Person",
    "Pig",
    "Place",
    "Plane",
    "Point",
    "Power",
    "President",
    "Problem",
    "Program",
    "Question",
    "Reason",
    "Research",
    "Result",
    "Ribs",
    "Right",
    "Room",
    "Salt",
    "Sandals",
    "School",
    "Scissors",
    "Service",
    "Shampoo",
    "Shirt",
    "Side",
    "Singer",
    "Skirt",
    "Smoke",
    "Soap",
    "Sofa",
    "State",
    "Story",
    "Stove",
    "Student",
    "Study",
    "Suit",
    "Sun",
    "Surgeon",
    "Swan",
    "Sweater",
    "System",
    "Table",
    "Tea",
    "Teacher",
    "Team",
    "Telephone",
    "Thing",
    "Tiger",
    "Time",
    "Tissue",
    "Toy",
    "Train",
    "Tunnel",
    "Vase",
    "Vehicle",
    "Waist",
    "War",
    "Water",
    "Way",
    "Week",
    "Wings",
    "Woman",
    "Word",
    "Work",
    "World",
    "Wrist",
    "Year",
    "Zebra"
    ]

Adj = [
    "Adventurous",
    "Aggressive",
    "Agreeable",
    "Alert",
    "Alive",
    "Amused",
    "Angry",
    "Annoyed",
    "Annoying",
    "Anxious",
    "Arrogant",
    "Ashamed",
    "Attractive",
    "Average",
    "Awful",
    "Bad",
    "Beautiful",
    "Better",
    "Bewildered",
    "Black",
    "Bloody",
    "Blue",
    "Blue-Eyed",
    "Blushing",
    "Bored",
    "Brainy",
    "Brave",
    "Breakable",
    "Bright",
    "Busy",
    "Calm",
    "Careful",
    "Cautious",
    "Charming",
    "Cheerful",
    "Clean",
    "Clear",
    "Clever",
    "Cloudy",
    "Clumsy",
    "Colorful",
    "Combative",
    "Comfortable",
    "Concerned",
    "Condemned",
    "Confused",
    "Cooperative",
    "Courageous",
    "Crazy",
    "Creepy",
    "Crowded",
    "Cruel",
    "Curious",
    "Cute",
    "Dangerous",
    "Dark",
    "Dead",
    "Defeated",
    "Defiant",
    "Delightful",
    "Depressed",
    "Determined",
    "Different",
    "Difficult",
    "Disgusted",
    "Distinct",
    "Disturbed",
    "Dizzy",
    "Doubtful",
    "Drab",
    "Dull",
    "Eager",
    "Easy",
    "Elated",
    "Elegant",
    "Embarrassed",
    "Enchanting",
    "Encouraging",
    "Energetic",
    "Enthusiastic",
    "Envious",
    "Evil",
    "Excited",
    "Expensive",
    "Exuberant",
    "Fair",
    "Faithful",
    "Famous",
    "Fancy",
    "Fantastic",
    "Fierce",
    "Filthy",
    "Fine",
    "Foolish",
    "Fragile",
    "Frail",
    "Frantic",
    "Friendly",
    "Frightened",
    "Funny",
    "Gentle",
    "Gifted",
    "Glamorous",
    "Gleaming",
    "Glorious",
    "Good",
    "Gorgeous",
    "Graceful",
    "Grieving",
    "Grotesque",
    "Grumpy",
    "Handsome",
    "Happy",
    "Healthy",
    "Helpful",
    "Helpless",
    "Hilarious",
    "Homeless",
    "Homely",
    "Horrible",
    "Hungry",
    "Hurt",
    "Ill",
    "Important",
    "Impossible",
    "Inexpensive",
    "Innocent",
    "Inquisitive",
    "Itchy",
    "Jealous",
    "Jittery",
    "Jolly",
    "Joyous",
    "Kind",
    "Talented",
    "Tame",
    "Tasty",
    "Tender",
    "Tense",
    "Terrible",
    "Thankful",
    "Thoughtful",
    "Thoughtless",
    "Tired",
    "Tough",
    "Troubled",
    "Ugliest",
    "Ugly",
    "Uninterested",
    "Unsightly",
    "Unusual",
    "Upset",
    "Uptight",
    "Vast",
    "Victorious",
    "Vivacious",
    "Wandering",
    "Weary",
    "Wicked",
    "Wide-Eyed",
    "Wild",
    "Witty",
    "Worried",
    "Worrisome",
    "Wrong",
    "Zany",
    "Zealous"
    ]

module.exports = {GenerateName};