var attempt = 3; 

    function validate() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var alertElement = document.getElementById("alertMessage");
        if (username == "admin" && password == "admin123") {
            alertElement.innerHTML = "Berhasil Login";
            alertElement.style.display = "block";

            setTimeout(function () {
                window.location = "home.html"; 
            }, 1300); 
            return false;
        } else {
            attempt--; 
            alertElement.innerHTML = "Kamu punya sisa " + attempt + " kali lagi untuk mencoba Login";
            alertElement.style.display = "block";

            if (attempt === 0) {
                document.getElementById("username").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
                return false;
            }
        }
    function logout() {
            window.location = "index.html";
    }
        setTimeout(function () {
            alertElement.style.display = "none";
        }, 9000);
    }