const moment = require('moment');
const multiparty = require('connect-multiparty');
const fs = require('fs');

const uploadMiddleware = multiparty({ uploadDir: './uploads' });

exports.uploadMusic = [uploadMiddleware, (req, res) => {
    const { path } = req.files.file;
    const newPath = `./uploads/${Date.now()}_${req.files.file.originalFilename}`;

    fs.rename(path, newPath, (err) => {
        if (err) return res.status(500).send({ message: 'Error uploading file' });

        res.status(200).send({ message: 'File uploaded successfully', path: newPath });
    });
}];

exports.getMusicList = (req, res) => {
    fs.readdir('./uploads', (err, files) => {
        if (err) return res.status(500).send({ message: 'Error fetching files' });

        const fileList = files.map(file => ({
            name: file,
            uploadedAt: moment().format('YYYY-MM-DD HH:mm:ss')
        }));

        res.status(200).send({ files: fileList });
    });
};
