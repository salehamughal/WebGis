let a = prompt("Enter a user name")
function func() {
    if (a.charAt(0).toUpperCase() === a.charAt(0)) {
        if (a.length >= 3 && a.length <= 10) {
            if (/\d/.test(a) == false) {
                console.log(a)
            }
            else {
                console.log("Username is not valid")
            }
        }
        else {
            console.log("Username is not valid")
        }

    }
    else {
        console.log("Username is not valid")
    }
}
func()

