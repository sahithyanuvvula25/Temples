function goToPage() {
    const state = document.getElementById("stateInput").value.trim().toLowerCase();

    if (state === "andhrapradesh") {
        window.location.href = "ap.html";
        alert("opening top 5 places in ap")
    } else if (state === "kerala") {
        window.location.href = "kerala.html";
             alert("opening top 5 places in kerala")
    } else if (state === "karnataka") {
        window.location.href = "ap.html";
    }
    
    
}
