export function openOverlay(modal) {
    if (document.getElementById("overlay")) {
        document.getElementById("overlay").style.display = "flex";
        if (modal === 'successModal') {
            openSuccessModal();
        } else if (modal === 'carousel') {
            openCarousel();
        }
    }
}

export function closeOverlay() {
    if (document.getElementById("overlay")) {
        document.getElementById("overlay").style.display = "none";
        closeCarousel();
    }
}

export function openSuccessModal() {
    if (document.getElementById("successModal"))
        document.getElementById("successModal").style.display = "flex";
}

export function closeSuccessModal() {
    if (document.getElementById("successModal")) {
        document.getElementById("successModal").style.display = "none";
        closeOverlay('successModal')
    }
}

export function openCarousel() {
    if (document.getElementById("carousel"))
        document.getElementById("carousel").style.display = "block";
}

export function closeCarousel() {
    if (document.getElementById("carousel"))
        document.getElementById("carousel").style.display = "none";
}

export function showNotification() {
    if (document.getElementById("notification"))
        document.getElementById("notification").style.display = "flex";
}

export function hideNotification() {
    if (document.getElementById("notification"))
        document.getElementById("notification").style.display = "none";
}

export function activeLink(n, arr) {

    if (document.getElementById("asideMenu")) {
        const table = document.getElementById("asideMenu");

        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                table.getElementsByTagName('tr')[i + 1].style.opacity = 1;
                table.getElementsByTagName('tr')[i].getElementsByTagName('td')[2].style.opacity = 1;
            }
        } else {
            table.getElementsByTagName('tr')[n].style.opacity = 1;
            table.getElementsByTagName('tr')[n - 1].getElementsByTagName('td')[2].style.opacity = 1;

        }
    }

}

export function resetActiveLinks() {
    if (document.getElementById("asideMenu")) {
        const table = document.getElementById("asideMenu");
        for (let i = 0; i < table.getElementsByTagName('tr').length; i++) {
            if (i === 0) continue;

            table.getElementsByTagName('tr')[i].style.opacity = 0.39;
            table.getElementsByTagName('tr')[i - 1].getElementsByTagName('td')[2].style.opacity = 0;
        }
    }

}
