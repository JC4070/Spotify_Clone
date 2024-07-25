document.addEventListener('mouseover', function(event) {
    if (event.target.closest('.album-1st')) {
      document.querySelector('.right').style.background = 'linear-gradient(to bottom, #114233 8%, black 60%)';
    }
  });

  document.addEventListener('mouseout', function(event) {
    if (!event.target.closest('.album-1st')) {
      document.querySelector('.right').style.background = 'linear-gradient(to bottom, #114233 8%, black 60%)';
    }
  });
  document.addEventListener('mouseover', function(event) {
    if (event.target.closest('.album-1st-2nd')) {
      document.querySelector('.right').style.background = 'linear-gradient(to bottom, #67100c 8%, black 60%)';
    }
  });

  document.addEventListener('mouseout', function(event) {
    if (!event.target.closest('.album-1st-2nd')) {
      document.querySelector('.right').style.background = 'linear-gradient(to bottom, #114233 8%, black 60%)';
    }
  });
  document.addEventListener('mouseover', function(event) {
    if (event.target.closest('.album-1st-3rd')) {
      document.querySelector('.right').style.background = 'linear-gradient(to bottom, #614520 8%, black 60%)';
    }
  });

  document.addEventListener('mouseout', function(event) {
    if (!event.target.closest('.album-1st-3rd')) {
      document.querySelector('.right').style.background = 'linear-gradient(to bottom, #114233 8%, black 60%)';
    }
  });
  document.addEventListener('mouseover', function(event) {
    if (event.target.closest('.album-1st-4th')) {
      document.querySelector('.right').style.background = 'linear-gradient(to bottom, #0b4b4f 8%, black 60%)';
    }
  });

  document.addEventListener('mouseout', function(event) {
    if (!event.target.closest('.album-1st-4th')) {
      document.querySelector('.right').style.background = 'linear-gradient(to bottom, #114233 8%, black 60%)';
    }
  });
  document.addEventListener('mouseover', function(event) {
    if (event.target.closest('.album-1st-5th')) {
      document.querySelector('.right').style.background = 'linear-gradient(to bottom, #5d270f 8%, black 60%)';
    }
  });

  document.addEventListener('mouseout', function(event) {
    if (!event.target.closest('.album-1st-5th')) {
      document.querySelector('.right').style.background = 'linear-gradient(to bottom, #114233 8%, black 60%)';
    }
  });
  document.addEventListener('mouseover', function(event) {
    if (event.target.closest('.album-1st-6th')) {
      document.querySelector('.right').style.background = 'linear-gradient(to bottom, #0f273f 8%, black)';
    }
  });

  document.addEventListener('mouseout', function(event) {
    if (!event.target.closest('.album-1st-6th')) {
      document.querySelector('.right').style.background = 'linear-gradient(to bottom, #114233 8%, black 60%)';
    }
  });


 



let btn = document.querySelectorAll(".album-1st, .album-1st-2nd, .album-1st-3rd, .album-1st-4th, .album-1st-5th, .album-1st-6th, .blend, .album-lines-1st");
let homeButton = document.querySelector(".home");

let right = document.querySelector(".right");
let originalRightContent = right.innerHTML; // Store the original content of the right container

// Function to handle button click event
function handleButtonClick() {
    // Replace the content of the right container based on the button clicked
    right.innerHTML = `
    <div class="right1">


                <div class="good-morning1" style="background: linear-gradient(to bottom, #81bfb8 , #4b6f6b ); "><img
                        src="/ICONS/Web Series.jpeg" alt="">
                    <div class="name">Daily Mix 1<div class="name2">4 Songs, About 20 min</div>
                    </div>
                </div>
                <div class="middle-one">
                    <button class="middle-img-container" >
                        <div class="middle-img-container-div"><img src="../ICONS/play.png" class="middle-img" alt="">
                        </div>
                    </button>
                    <button class="middle-liked-container" >
                        <img src="../ICONS/liked-songs.png" class="middle-liked" alt="">
                    </button>
                    <button class="middle-dots">...</button>
                    <button class="middle-list">List <img src="../ICONS/list.png" class="middle-list-img"
                            alt=""></button>
                </div>

                <div class="album-lines1">
                    <div class="conatianer1">
                        <div class="title" style="color: rgb(167, 166, 166);">Title
                        </div>
                        <div class="album" style="color: rgb(167, 166, 166);">Album
                        </div>
                        <div class="time" style="color: rgb(167, 166, 166);">Time
                        </div>
                    </div>
                    <div class="horizontal-line"></div>
                </div>

                <button class="whole-song">
                    <div class="whole-song-1st">
                        <img src="../ICONS/qismat.jpeg" alt="" class="play-img-1" srcset="">
                        <div class="whole-ka-font">
                            <p>Qismat</p>
                            <p class="vishal">Ammy Virk</p>
                        </div>
                    </div>
                    <div class="whole-song-2nd" style="padding-right: 32px;">Qismat , Ammy Virk , Karan Aujhla .....
                    </div>
                    <div class="whole-song-3rd">3:22</div>
                </button>
                <button class="whole-song">
                    <div class="whole-song-1st">
                        <img src="../ICONS/perfect.jpeg" alt="" class="play-img-1" srcset="">
                        <div class="whole-ka-font">
                            <p>Perfect</p>
                            <p class="vishal">Ed Sheeran</p>
                        </div>
                    </div>
                    <div class="whole-song-2nd" style="padding-right: 90px;">Divide , Ed Sheeran , Plus .....</div>
                    <div class="whole-song-3rd">4:01</div>
                </button><button class="whole-song">
                    <div class="whole-song-1st" style="margin-left: -69px;">
                        <img src="../ICONS/pagal.jpeg" alt="" class="play-img-1" srcset="">
                        <div class="whole-ka-font">
                            <p>Pagal</p>
                            <p class="vishal">Gurnaam </p>
                        </div>
                    </div>
                    <div class="whole-song-2nd" style="padding-right: 50px;">Pagal , Gurnaam Bhullar , Gian .....</div>
                    <div class="whole-song-3rd">2:55</div>
                </button>
                <button class="whole-song">
                    <div class="whole-song-1st" style="margin-left: -59px;">
                        <img src="../ICONS/brown rang.jpeg" alt="" class="play-img-1" srcset="">
                        <div class="whole-ka-font">
                            <p>Brown Rang</p>
                            <p class="vishal">Honey Singh </p>
                        </div>
                    </div>
                    <div class="whole-song-2nd" style="padding-right: 50px;">Honey Singh , Urvashi Rautela .....</div>
                    <div class="whole-song-3rd">2:55</div>
                </button>



            </div>
      
    `;
    
}

// Function to handle home button click event
function handleHomeButtonClick() {
    // Restore the original content of the right container
    right.innerHTML = originalRightContent;
}

// Loop through each button and add click event listener
btn.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});

// Add click event listener to the home button
homeButton.addEventListener("click", handleHomeButtonClick);



// ----------------------------------------------------------------
