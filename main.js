// Load Home
let mainWindow = byId( 'window' );
let btnAccount = byId( 'btn-account' );
let btnBotanicals = byId( 'btn-botanicals' );
let btnHome = byId( 'btn-home' );
let btnTech = byId( 'btn-tech' );
let btnSearch = byId( 'btn-search' );

// Load home
renderHome();

// BUTTON FUNCTIONALITY

// Home button Onclick, render home
btnHome.addEventListener( 'click', renderHome );

// Account
// Home button Onclick, render home
btnAccount.onclick = () => { 
  mainWindow.innerHTML = `
    <h1>Account</h1>
    <p>Isaac Switzer</p>
  `;
};

// Botanicals
// Home button Onclick, render home
btnBotanicals.onclick = () => { 
  mainWindow.innerHTML = `
    <h1>Botanicals</h1>
    Get all your stuff summer, and put it all in a backpack.
  `;
};


// FUNCTIONS
// Home
function renderHome() {
  mainWindow.innerHTML = `
    <h1>Home</h1>
    <button class='btn btn-primary'>Click meeeee</button>
  `;
}

// Tech
// Home button Onclick, render home
btnTech.onclick = () => { 
  mainWindow.innerHTML = `
    <h1>SpectraVision & Bionetics</h1>
    <p>View our technology</p>
  `;
};

// Search
// Home button Onclick, render home
btnSearch.onclick = () => { 
  mainWindow.innerHTML = `
    <h1>Search</h1>
    <p>Search Results</p>
  `;
};


// Utilities
function byId ( id ) { 
  return document.getElementById( id ); 
};