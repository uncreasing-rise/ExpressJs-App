const CSVService = require('../Services/CSVService')

const importCSV = async (req, res) => {
    try {
        const { model } = req.params
        await CSVService.importCSV(req.file.path, model)
        res.status(200).json({ message: `${model} data imported successfully` })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const exportCSV = async (req, res) => {
    try {
        const { model } = req.params
        const csvData = await CSVService.exportCSV(model)
        res.header('Content-Type', 'text/csv')
        res.attachment(`${model}.csv`)
        res.send(csvData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    importCSV,
    exportCSV,
}
