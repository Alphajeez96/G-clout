// Edit Profile form scripts here
function openForm(evt, formName) {

    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("edit_link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
}
window.addEventListener('load', (event) => {
    document.getElementById('edit_form').style.display = "block";
    document.getElementById('upgrade_form').style.display = "none";
});

// Upgrade form display here
const openUpgradeForm = () => {
    document.getElementById('upgrade_form').style.display = "block";
    document.getElementById('account').style.display = "none";
}


// toggle dropdown menu

const showDropdown = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}