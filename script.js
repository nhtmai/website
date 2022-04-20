function changeProject(proj_class, proj_name, proj_tech) {
    resetMenu();

    const classItems = document.getElementsByClassName(proj_class);
    document.getElementById("proj_desc").innerHTML = classItems[1].innerHTML;
    classItems[0].style.textDecoration = 'underline';
    classItems[0].style.color = '#8A813E';
    document.getElementById("proj_name").innerHTML = proj_name;
    document.getElementById("proj_tech").innerHTML = proj_tech;
}

function resetMenu() {
    const classItems1 = document.getElementsByClassName("p1");
    const classItems2 = document.getElementsByClassName("p2");
    const classItems3 = document.getElementsByClassName("p3");

    classItems1[0].style.textDecoration = 'none';
    classItems2[0].style.textDecoration = 'none';
    classItems3[0].style.textDecoration = 'none';

    classItems1[0].style.color = '#373125';
    classItems2[0].style.color = '#373125';
    classItems3[0].style.color = '#373125';
}