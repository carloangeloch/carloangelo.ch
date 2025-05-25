export const dropboxConverter = (dblink :string) => {

    if (typeof dblink === "string") {
        return String(dblink).replace("&dl=0","").replace("www.dropbox","dl.dropboxusercontent")
    }
}