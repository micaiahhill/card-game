let playerNames = [];
let currentPlayerIndex = 0;

function goToPlayerSetup() {
    document.getElementById("welcome-screen").classList.remove("active");
  
    // We'll add the player input page next
    const playerSetup = document.getElementById("player-setup");
    if (playerSetup) playerSetup.classList.add("active");
  }
  function createNameInputs() {
    const count = parseInt(document.getElementById("player-count").value);
    const container = document.getElementById("name-inputs");
    container.innerHTML = ''; // Clear previous content
  
    if (isNaN(count) || count < 1 || count > 30) {
      container.innerHTML = "<p>Please enter a valid number of players (1–30).</p>";
      return;
    }
  
    for (let i = 0; i < count; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = `Player ${i + 1} name`;
      input.classList.add("player-name");
      input.required = true;
      container.appendChild(input);
      container.appendChild(document.createElement("br"));
    }
  
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Shuffle & Start Game";
    submitBtn.onclick = collectNamesAndStartGame;
    submitBtn.style.marginTop = "20px";
    container.appendChild(submitBtn);
  }
  
  function collectNamesAndStartGame() {
    const inputs = document.querySelectorAll(".player-name");
    let invalid = false;
    playerNames = []; // Reset the array before adding new names

    inputs.forEach(input => {
        const name = input.value.trim();
        if (name === "") {
            invalid = true;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "";
            playerNames.push(name);
        }
    });

    if (invalid) {
        document.getElementById("error-message").textContent = "Please fill in all player names.";
        return;
    }
    
  
    // Shuffle player order
    playerNames = playerNames.sort(() => Math.random() - 0.5);
    currentPlayerIndex = 0; // Reset to the first player
  
    console.log("Shuffled Players:", playerNames); // For debugging
    updateBanner(); // Update the banner with the first player's name
  
    // Move to deck selection page next (we'll build this next)
    document.getElementById("player-setup").classList.remove("active");
    const deckPage = document.getElementById("deck-selection");
    if (deckPage) deckPage.classList.add("active");
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const decks = {
    early: shuffleArray([
      "How did your name come to be? ",
      "What is your birthplace? Is that where you were raised?",
      "What kind of people were your parents?",

  "Where are your parents from?",
  "How did your parents meet each other?",
  "Could you describe your grandparents?",
  "What are some of the earliest things you can remember?",
  "What kind of work did your parents do?",
  "What were your siblings like when you were young?",
  "Do you have a specific story or memory about your brothers and sisters you could share?",
  "What kinds of activities did your family enjoy doing together when you were growing up?",
  "Who was the person you spent the most time with during your childhood?",
  "Did your family have any special traditions for the holidays?",
  "What was your childhood home like?",
  "Did you have any pets when you were a child?",
  "Were you close to any members of your extended family?",
  "Where did you attend elementary school?",
  "What is the happiest memory you have from your childhood?",
  "What are some of the most memorable moments from your time in elementary school?",
  "Who were your friends when you were a kid?",
  "What were your favorite games or toys to play with as a child?",
  "Did any of your childhood friends remain a part of your life as you got older?",
  "What did you enjoy doing for fun when you were a kid?",
  "What kind of movies, music, and books did you enjoy when you were a child?",
  "Did you ever experience any serious injuries or illnesses as a child?",
  "Where did you go to high school?",
  "Were there any teachers or coaches who had a significant influence on you as a kid?",
  "What were your favorite subjects in high school?",
  "What did you aspire to be when you grew up?",
  "What were some of the popular trends or styles when you were in school?",
  "Did you ever receive any special awards for your academic achievements or involvement in school activities?",
  "Did your relationship with your family change during your teenage years?",
  "Who were your closest friends during your high school years?",
  "Where did you and your friends typically hang out, and what did you do together?",
  "Were there any rebellious things you did as a teenager?",
  "Did you go on dates as a teenager?",
  "What was your most memorable dating experience as a teenager?",
  "Did you have a job as a teenager? If so, what did you do?",
  "What did you typically spend your money on as a teenager?",
  "Could you tell me about your first car?",
  "When did you have your first car accident?",
  "Did you participate in any sports in high school?",
  "Were you involved in any extracurricular activities besides sports?",
  "What were your favorite books, films, and music when you were a teenager?",
  "Who were some of the most famous celebrities during your teenage years?",
  "What advice would you offer to a teenager today?",
  "What's one of the craziest or most memorable stories from your teenage years?",
  "Tell me about a time when you got into the most trouble with your parents.",
  "What advice would you give to your younger, teenage self?"
    ]),
    mid:shuffleArray([
        "Did you attend any school or training after high school?",
        "What did you study in college?",
        "Did you have any influential professors or mentors in college?",
        "Did you work while you were in college?",
        "Did you serve in the military or have loved ones who served?",
        "Who were your closest friends in your early twenties?",
        "Who did you spend the most time with during your twenties?",
        "What are some of your most vivid memories with your friends in your twenties?",
        "What was your dating life like in your twenties?",
        "How did you and your spouse meet?",
        "Do you remember the location of your first date with your spouse?",
        "What qualities initially attracted you to your spouse?",
        "How would you describe your spouse during that time?",
        "What was your marriage proposal like?",
        "How long were you dating before you got engaged?",
        "What were the reactions of your friends and family to the person you were engaged to?",
        "How old were you when you got married?",
        "Tell me about your wedding. What was it like?",
        "Where did you and your spouse go on your honeymoon?",
        "What were the initial years of your marriage like?",
        "What did you admire most about your spouse?",
        "What is the most significant thing you've learned from your spouse?",
        "What was one of the most challenging aspects of your marriage during that period?",
        "How many children did you have?",
        "How old were you when you had your first child?",
        "What was your reaction when you found out you were going to have a baby?",
        "Tell me about the day your first child was born.",
        "How did you and your spouse decide on your children's names?",
        "Could you tell me a bit about each of your children?",
        "What were the holidays like when your children were young?",
        "What are some of your most memorable family vacations with your children?",
        "What are some of your favorite memories with your children?",
        "What's a particularly memorable or funny story from when your kids were teenagers?",
        "Tell us about a moment you felt particularly proud of for each of your children.",
        "What was it like for you when your children left home?",
        "Did you experience the loss of any family members during this time?",
        "What did you do in your professional career?",
        "What are some of your proudest accomplishments in your career?",
        "Who were your closest friends during this period of your life?",
        "How did you typically spend time with your friends?",
        "How did you spend your free time outside of your work?",
        "Did you develop or continue any hobbies during this time?",
        "What did you enjoy doing for fun?",
        "Were you a member of any groups or clubs?"
      ]),
    later: shuffleArray ([
        "How did it feel when you became a grandparent?",
        "What is the best part about being a grandparent?",
        "What is the most challenging aspect of being a grandparent?",
        "How have your relationships with your children evolved in your later years?",
        "What's the most difficult news you've ever received?",
        "Have you experienced the loss of any family members during this time?",
        "Who are your closest friends?",
        "Who is your longest-standing friend, and how did you two meet?",
        "How do you typically spend your time with your friends?",
        "When did you decide to retire from your work?",
        "How have you spent your time since you retired?",
        "What do you enjoy doing for fun now?",
        "What kind of movies, music, and books do you enjoy in the present day?",
        "What are some of the most valuable lessons you've learned throughout your life?",
        "What qualities do you value most in your friends?",
        "What is the most important lesson you learned from your mother? Your father?",
        "Who is the wisest person you've ever known, and what did you learn from them?",
        "What are some beliefs or opinions you've changed over the years?",
        "What advice would you offer your children and grandchildren about being parents?",
        "What did you find to be the most difficult aspect of raising children?",
        "What did you find to be the most rewarding aspect of being a parent?",
        "What song can instantly lift your spirits?",
        "What life advice would you give to someone my age?",
        "What kind of legacy do you hope to leave behind?",
        "Has religion or spirituality played a role in your life? If so, how?",
        "What are some guiding principles or mottos that you live by?",
        "What is a dream that you once had but have since let go of?",
        "What movie has had the biggest impact on you? Why?",
        "What are some things on your personal bucket list that you haven't yet done?",
        "What are some of your most treasured possessions, and why are they so important to you?",
        "What is something that consistently brings you joy?",
        "If you had unlimited financial resources, what would you do?",
        "What career advice would you give to someone my age who is just starting out?",
        "If you could have any superpower, what would it be?",
        "Do you have any advice for someone who is trying to choose a career path?",
        "If you could travel to any place in the world right now, where would you choose to go?",
        "If you were to win a million dollars, how would you use the money?",
        "What is the best piece of news you have ever received?",
        "What period of your life would you choose to go back and relive, and why?",
        "How do you see today's society as being different from when you were a child?",
        "What is the most embarrassing thing that has ever happened to you?",
        "What is your most precious memory?",
        "What is the kindest thing someone has ever done for you?",
        "What is the bravest thing you have ever done?",
        "What is the most significant loss you have ever experienced?",
        "What is the scariest thing that has ever happened to you?",
        "What is the hardest challenge you've ever faced?",
        "What is a regret that you have in your life?",
        "What advice would you give to your younger self?",
        "What makes you feel the most alive?",
        "What is something you appreciate about our generation?",
        "What are some of your strongest beliefs about yourself?",
        "At my funeral, I hope people will describe me as _____."
      ])
  };
  
  const usedCards = {
    early: [],
    mid: [],
    later: []
  };

  


function updateBanner() {
    const bannerName = document.getElementById("player-name");
    bannerName.textContent = playerNames[currentPlayerIndex];
  }
  
  function drawCard(stage) {
    console.log("Deck selected:", stage);
    const available = decks[stage].filter(q => !usedCards[stage].includes(q));
  
    if (available.length === 0) {
      usedCards[stage] = [];
      const messageElement= document.getElementById("message");
      if (messageElement) {
        messageElement.textContent = "All cards have been drawn. Please reset the deck.";
      }
      return;
    }
  
    const card = available[Math.floor(Math.random() * available.length)];
    usedCards[stage].push(card);
  
    const cardElement = document.getElementById(`${stage}-card`);
    const deckCard = cardElement.closest(".card");
  
    deckCard.classList.add("flipped");
  
    setTimeout(() => {
        cardElement.textContent = card;
    
        // Show the "Next Player" button
        document.getElementById("next-player-btn").style.display = "inline-block";
      }, 400);
    }
  
  
    function goToNextPlayer() {
        // Reset card text
        document.querySelectorAll('.card-back').forEach(card => card.textContent = "Click to draw");
    
        // Remove flipped class
        document.querySelectorAll('.deck-card').forEach(card => card.classList.remove("flipped"));
    
        document.getElementById("next-player-btn").style.display = "none";
    
        currentPlayerIndex = (currentPlayerIndex + 1) % playerNames.length;
        updateBanner();
    }

    function restartGame(){
        playerNames = [];
        currentPlayerIndex = 0;


        document.getElementById("player-count").value = "";
        document.getElementById("name-inputs").innerHTML = ""; // Clear previous content
        document.getElementById("error-message").textContent = ""; // Clear error message

        document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
            // Show welcome screen again
    document.getElementById("welcome-screen").classList.add("active");

    // Optional: Scroll to top
    window.scrollTo(0, 0);
}
    


  