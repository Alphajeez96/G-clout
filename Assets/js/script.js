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
    // add class to post box on type

const activatePost = () => {

    var element = document.getElementById("post_anchor");
    element.classList.add("active_post");
    var postButton = document.getElementById("post_btn");
    postButton.classList.add("active_post_button")
}
const deactivatePost = () => {
    var element = document.getElementById("post_anchor");
    element.classList.remove("active_post");
    var postButton = document.getElementById("post_btn");
    postButton.classList.remove("active_post_button")
}

// Quill editor here
var quill = new Quill('#editor', {
    modules: {
        toolbar: [
            [{
                header: [2, 3, 4, false]
            }],
            ['bold', 'italic', 'underline', 'image'],
        ]
    },
    theme: 'snow',
    placeholder: 'Write the rest of the article here',
});