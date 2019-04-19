const read = async (request,response) => {
    const db = request.app.get("db")
    const properties = await db.get_properties().catch(error => console.log(error))
    response.json(properties)
}
const create = async (request,response) => {
    const {name,address,city,state,zip,img_url,mortgage,rent} = request.body
    const db = request.app.get("db")
    const properties = await db.create_property([name,address,city,state,zip,img_url,mortgage,rent])
        .catch(error => console.log(error))
    response.json(properties)
}
const remove = async (request,response) => {
    const {id} = request.params
    const db = request.app.get("db")
    const properties = await db.remove_property(id).catch(error => console.log(error))
    response.json(properties)
}

module.exports = {
    create,
    remove,
    read
}