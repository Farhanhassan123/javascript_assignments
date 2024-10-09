const defaultProfile = {
    name: "John Doe",
    description: "Web Developer",
    picture: "https://via.placeholder.com/100",
    backgroundColor: "white"
};

function changeName() {
    const newName = document.getElementById("inputField").value;
    if (newName) {
        document.getElementById("profileName").textContent = newName;
        document.getElementById("inputField").value = ''; 
    }
}

function changeDescription() {
    const newDescription = document.getElementById("inputField").value;
    if (newDescription) {
        document.getElementById("profileDescription").textContent = newDescription;
        document.getElementById("inputField").value = ''; 
    }
}

function changePicture() {
    const newPic = prompt("Enter the URL of the new profile picture:");
    if (newPic) {
        document.getElementById("profilePic").src = newPic;
    }
}

function changeBackgroundColor() {
    const newColor = document.getElementById("colorPicker").value;
    document.getElementById("profileCard").style.backgroundColor = newColor;
}
function resetProfile() {
    document.getElementById("profileName").textContent = defaultProfile.name;
    document.getElementById("profileDescription").textContent = defaultProfile.description;
    document.getElementById("profilePic").src = defaultProfile.picture;
    document.getElementById("profileCard").style.backgroundColor = defaultProfile.backgroundColor;
}