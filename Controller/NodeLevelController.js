
// const nodeLevel = [
//     {
//         id: 1,
//         username: "adminGanteng",
//         speed: 100,
//         gigi: 'susu'
//     },
//     {
//         id: 2,
//         username: "pangeranGanteng",
//         speed: 200,
//         gigi: 'belakang'
//     }
// ]

NodeLevel = {
    getData: (data) => {
        let nl = nodeLevel[nodeLevel.findIndex(nd => nd.level = data.Username)]
        return nl 
    }
}

module.exports = NodeLevel


