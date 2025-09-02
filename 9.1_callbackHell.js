setTimeout(function () {
    console.log("fetching users")
    setTimeout(function () {
        console.log("fetching posts")
        setTimeout(function () {
            console.log("fetching likes")
            setTimeout(function () {
                console.log("fetching comment")
            }, 1000)
        }, 2000)
    }, 3000)
}, 4000)
