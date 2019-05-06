function login(data) {
    try {
        if (data.username === "fitriadmin" && data.pass === "123456") {
            return ({
                status: "ok"
            })
        }else{
            return ({
                status: "nok",
                message: "Silahkan cek username dan password anda"
            })
        }
    } catch (e) {
        return ({
            status: "nok",
            message: e
        })
    }
}

module.exports = {
    login
}