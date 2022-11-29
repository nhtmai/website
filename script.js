function changeProject(proj_class, proj_name, proj_date) {
    // remove stars
    const stars = document.getElementsByClassName("prjt_selected");
    const len = stars.length;
    for (let i = 0; i < len; i++) {
        stars[0].remove();
    }

    // add space
    const menuItems = document.getElementById("prjts_menu").childNodes;
    for (const item of menuItems) {
        if (item.tagName === "LI") {
            item.style.marginLeft = "30px";
            item.style.marginRight = "30px";
        }
    } 

    // add stars
    const classItems = document.getElementsByClassName(proj_class);

    document.getElementById("prjt_desc").getElementsByTagName("ul")[0].innerHTML = classItems[1].innerHTML;
    document.getElementById("prjt_name").innerHTML = proj_name;
    classItems[0].style.margin = "0";
    classItems[0].innerHTML = "<img class='prjt_selected' src='style/images/small star (1).png'>" + classItems[0].innerHTML + "<img class='prjt_selected' src='style/images/small star (2).png'>";
    document.getElementById("prjt_date").innerHTML = proj_date;
}
